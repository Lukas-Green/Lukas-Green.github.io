#!/usr/bin/env node
/**
 * refresh-dates.js — keep `lastWorked` honest without editing it by hand.
 *
 *   node scope/tools/refresh-dates.js            # write changes
 *   node scope/tools/refresh-dates.js --dry-run  # show what would change
 *   node scope/tools/refresh-dates.js --no-net   # skip the GitHub calls
 *
 * Where each date comes from, keyed off the project's `home.type`:
 *
 *   main     last commit touching those paths on main
 *   branch   tip date of origin/<branch>
 *   repo     GitHub's pushed_at for owner/repo (public, unauthenticated)
 *   nowhere  last commit touching links.local, when that is a real path
 *
 * A project that genuinely lives in more than one place can declare them:
 *
 *   track: ['branch:claude/redesign-nonprofit-site-3LIKV',
 *           'repo:Lukas-Green/cbn-redirect']
 *
 * When `track` is present it wins over `home`, and the newest of the sources
 * is used — because the question the card answers is "when did I last touch
 * this project", not "when did I last touch this particular copy of it".
 *
 * Only the `lastWorked:` line moves. Everything else in projects.js is left
 * exactly as written, so hand-edited prose survives a refresh.
 *
 * No dependencies, per the repo's vanilla-only rule. git and curl only.
 */

'use strict';
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DRY   = process.argv.includes('--dry-run');
const NONET = process.argv.includes('--no-net');

const SCOPE_DIR = path.resolve(__dirname, '..');
const REPO      = path.resolve(SCOPE_DIR, '..');
const DATA_FILE = path.join(SCOPE_DIR, 'projects.js');

/* ---------- shell helpers ---------- */
function git(args) {
  try {
    return execFileSync('git', args, { cwd: REPO, encoding: 'utf8', stdio: ['ignore','pipe','ignore'] }).trim();
  } catch (e) { return ''; }
}
function pathExists(p) {
  // tracked on main, rather than merely present in the working tree
  return git(['ls-tree', '-r', '--name-only', 'main', '--', p]).length > 0;
}
function lastCommitDate(paths) {
  const valid = paths.filter(pathExists);
  if (!valid.length) return { date:null, why:'no tracked path' };
  const d = git(['log', '-1', '--format=%as', 'main', '--'].concat(valid));
  return d ? { date:d, paths:valid } : { date:null, why:'no commits touch it' };
}
function branchDate(ref) {
  const d = git(['log', '-1', '--format=%as', 'origin/' + ref]);
  return d ? { date:d } : { date:null, why:'branch not fetched — try git fetch origin' };
}
function repoPushedAt(full) {
  if (NONET) return { date:null, why:'--no-net' };
  try {
    const out = execFileSync('curl', [
      '-sS', '--max-time', '20',
      '-H', 'Accept: application/vnd.github+json',
      '-H', 'User-Agent: scope-refresh-dates',
      'https://api.github.com/repos/' + full
    ], { encoding:'utf8' });
    const j = JSON.parse(out);
    if (j && j.pushed_at) return { date: j.pushed_at.slice(0,10) };
    const msg = (j && j.message) ? String(j.message).split('.')[0].toLowerCase() : 'no pushed_at';
    return { date:null, why: msg.length > 46 ? msg.slice(0, 46) + '…' : msg };
  } catch (e) { return { date:null, why:'network or parse error' }; }
}

/* ---------- load the data the same way the page does ---------- */
const src = fs.readFileSync(DATA_FILE, 'utf8');
global.window = {};
require(DATA_FILE);
const DATA = global.window.SCOPE;
if (!DATA || !DATA.projects) { console.error('Could not read SCOPE from projects.js'); process.exit(1); }

/* ---------- resolve a date per project ---------- */
function sourceDate(spec) {
  const i = spec.indexOf(':');
  const kind = i === -1 ? '' : spec.slice(0, i), ref = spec.slice(i + 1);
  if (kind === 'main')   return lastCommitDate([ref]);
  if (kind === 'branch') return branchDate(ref);
  if (kind === 'repo')   return repoPushedAt(ref);
  return { date:null, why:'unknown source "' + spec + '"' };
}

function resolve(p) {
  if (Array.isArray(p.track) && p.track.length) {
    const got = p.track.map(sourceDate);
    const hits = got.filter(r => r.date);
    // A partial answer is only a lower bound: the missing source could be the
    // newest one. Better to leave the date alone than to move it backwards.
    if (hits.length < got.length) {
      return { date:null, why:(got.length - hits.length) + ' of ' + got.length + ' sources unreachable' };
    }
    return hits.sort((a, b) => (a.date < b.date ? 1 : -1))[0];
  }
  const home = p.home || {};
  switch (home.type) {
    case 'main':
      return lastCommitDate(String(home.ref || '').split(',').map(s => s.trim()).filter(Boolean));
    case 'branch':
      return branchDate(home.ref);
    case 'repo':
      return repoPushedAt(home.ref);
    case 'nowhere': {
      const local = p.links && p.links.local;
      if (!local) return { date:null, why:'exists only as prose' };
      const r = lastCommitDate([local]);
      return r.date ? r : { date:null, why:'exists only as prose' };
    }
    default:
      return { date:null, why:'no home.type' };
  }
}

/* ---------- rewrite only the lastWorked line, per project ---------- */
let out = src, changed = 0, same = 0;
const skipped = [], moved = [];

for (const p of DATA.projects) {
  const r = resolve(p);
  if (!r.date) { skipped.push([p.id, r.why]); continue; }
  if (r.date === p.lastWorked) { same++; continue; }

  // find this project's block, then the first lastWorked inside it
  const idAt = out.indexOf("id: '" + p.id + "'");
  if (idAt === -1) { skipped.push([p.id, 'block not found']); continue; }
  const re = /lastWorked: '(\d{4}-\d{2}-\d{2})'/g;
  re.lastIndex = idAt;
  const m = re.exec(out);
  if (!m) { skipped.push([p.id, 'no lastWorked line']); continue; }

  moved.push([p.id, p.lastWorked, r.date]);
  out = out.slice(0, m.index) + "lastWorked: '" + r.date + "'" + out.slice(m.index + m[0].length);
  changed++;
}

/* stamp the file's own date so the footer stops lying */
const today = new Date().toISOString().slice(0,10);
if (changed) out = out.replace(/updated: '\d{4}-\d{2}-\d{2}'/, "updated: '" + today + "'");

/* ---------- report ---------- */
const pad = s => String(s).padEnd(22);
console.log('\nSCOPE — refresh lastWorked' + (DRY ? '  (dry run, nothing written)' : ''));
console.log('-'.repeat(60));
if (moved.length) {
  console.log('\nmoved:');
  moved.forEach(([id, from, to]) => console.log('  ' + pad(id) + from + '  ->  ' + to));
}
if (skipped.length) {
  console.log('\nleft alone:');
  skipped.forEach(([id, why]) => console.log('  ' + pad(id) + why));
}
console.log('\n' + changed + ' moved, ' + same + ' already current, ' + skipped.length + ' left alone.');

if (!DRY && changed) {
  fs.writeFileSync(DATA_FILE, out);
  console.log('Written to ' + path.relative(REPO, DATA_FILE) + '. Check the diff before committing.');
} else if (!DRY) {
  console.log('Nothing to write.');
}
