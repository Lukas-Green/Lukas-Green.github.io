/* SCOPE — workspace: lists only
 *
 * The real people and to-dos live in `workspace.local.js`, which is
 * gitignored and never published. This repo is public; client names and
 * candid notes about live engagements do not belong in it.
 *
 * Fresh clone: the People view is empty and the tool still works. Copy
 * `workspace.local.example.js` to `workspace.local.js` to fill it in.
 *
 * list    client | work | admin | life | someday
 * demand  call | email | text | decide | admin | read | build | errand
 * effort  micro (<=2 min) | quick (<=15) | medium (~1hr) | deep
 */

window.SCOPE_WORKSPACE = {

  lists: [
    { id:'client',  name:'People & clients', blurb:'Things owed to a person. These are the ones that rot quietly.' },
    { id:'work',    name:'Project work',     blurb:'Tied to something on the board.' },
    { id:'admin',   name:'Business admin',   blurb:'The LLC, the filings, the money plumbing.' },
    { id:'life',    name:'Life',             blurb:'Not work. Just as real.' },
    { id:'someday', name:'Someday',          blurb:'Written down so it stops circling.' }
  ],

  clients: [],

  todos: []
};
