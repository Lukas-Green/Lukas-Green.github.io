/* SCOPE — workspace: people, lists and to-dos
 *
 * Separate from projects.js because this is the half of life that is not a
 * repo. A to-do here can belong to a person, a project, both or neither.
 *
 * Anything you add in the browser lives in localStorage and is merged over
 * this file. Sidebar → Export to write it back out and commit it.
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

  clients: [
    { id:'kirk', short:'Kirk',   name:'Kirk Charlton',  org:'Art Inside Out',
      projects:['art-inside-out','cbn'],
      note:'Runs the Art Inside Out program and book shop. One of the two CBN program leads.' },
    { id:'robin', short:'Robin',  name:'Robin Davidson', org:'Restorative Reentry',
      projects:['next-reentry','cbn','freedease'],
      note:'Nonprofit lead. Her org was renamed from Better Neighbors, and the naming is still inconsistent across two repos.' },
    { id:'barry', short:'Barry',  name:'Barry Miller',   org:'Courier Direct',
      projects:['courier-direct'],
      note:'Co-founder with Sue, opened 2006. Tualatin, 24/7. Supplied the screenshots the redesign was built from. Has not seen the result.' },
    { id:'sue', short:'Sue',    name:'Sue Miller',     org:'Courier Direct',
      projects:['courier-direct'],
      note:'Co-founder. Barry is the contact on the redesign.' },
    { id:'nick', short:'Nick',   name:'Nick McCarty',   org:'Independent',
      projects:['nick-sites'],
      note:'Two sites built on the editorial-quant template. You have push access to three of his repos with no stated status.' },
    { id:'villa', short:'Villa Health',  name:'The Villa Health', org:'Integrative care, Vancouver WA',
      projects:['villa-health'],
      note:'No named contact on file. A preview site exists and there is no record it was ever sent.' },
    { id:'sovereign', short:'Sovereign Tattoo', name:'Sovereign Tattoo', org:'Client',
      projects:['sovereign-tattoo'],
      note:'No named contact, no engagement record. Repo untouched since June.' }
  ],

  /* Seeded from what the board and the branches already told us. Everything
     here is a real outstanding item, not an example. */
  todos: [
    { id:'t-kirk-canonical', list:'client', client:'kirk', project:'art-inside-out',
      text:'Email Kirk: which Art Inside Out copy is canonical, the repo or the inlined one here?',
      demand:'email', effort:'quick' },

    { id:'t-robin-name', list:'client', client:'robin', project:'next-reentry',
      text:'Ask Robin which name is current: Restorative Reentry or Next Reentry.',
      demand:'email', effort:'quick' },

    { id:'t-robin-freedease', list:'client', client:'robin', project:'freedease',
      text:'Show Robin FreedEase. She is a reentry org with no tool; it is a reentry tool with no org.',
      demand:'email', effort:'medium' },

    { id:'t-barry-send', list:'client', client:'barry', project:'courier-direct',
      text:'Send Barry the Courier Direct redesign. The email has been drafted twice and sent zero times.',
      demand:'email', effort:'quick' },

    { id:'t-nick-repos', list:'client', client:'nick', project:'nick-sites',
      text:'Ask Nick whether the three repos you can push to are live work or archive.',
      demand:'email', effort:'quick' },

    { id:'t-villa-status', list:'client', client:'villa', project:'villa-health',
      text:'Decide in one word whether Villa Health was pitched, ignored, or never sent.',
      demand:'decide', effort:'micro' },

    { id:'t-sovereign-close', list:'client', client:'sovereign', project:'sovereign-tattoo',
      text:'Close the loop on Sovereign Tattoo: one email asking to restart or finish.',
      demand:'email', effort:'quick' },

    { id:'t-agent-cancel', list:'admin', project:'luxiga-admin',
      text:'Call and cancel the duplicate registered agent. Two are billing at once.',
      demand:'call', effort:'quick' },

    { id:'t-cmra', list:'admin', project:'luxiga-admin',
      text:'Update car insurance or bank to the temp address so the CMRA form can be filed.',
      demand:'admin', effort:'medium' },

    { id:'t-ein', list:'admin', project:'luxiga-admin',
      text:'Chase the EIN, then open the business bank account.',
      demand:'call', effort:'deep' },

    { id:'t-vbe', list:'admin', project:'oregon-buys',
      text:'Check COBID VBE eligibility. Since HB 2295 any honorable discharge qualifies.',
      demand:'decide', effort:'micro' },

    { id:'t-codes', list:'admin', project:'oregon-buys',
      text:'Review the NIGP commodity codes. Wrong codes mean solicitations never reach you at all.',
      demand:'admin', effort:'medium' },

    { id:'t-proton', list:'admin',
      text:'Set up lukas@luxiga.co on Proton Mail.',
      demand:'admin', effort:'medium' },

    { id:'t-pps-status', list:'work', project:'pps-relief',
      text:'Fix the PPS Relief status line. It says pending and all seventeen files are there.',
      demand:'build', effort:'micro' },

    { id:'t-branches', list:'work', project:'branch-hygiene',
      text:'Delete the three branches that are zero commits ahead of main.',
      demand:'admin', effort:'quick' },

    { id:'t-previews', list:'work', project:'personal-site',
      text:'Delete the three -preview.html files from the portfolio.',
      demand:'admin', effort:'micro' }
  ]
};
