/* Copy this to `workspace.local.js` and fill it in.
 *
 * That filename is gitignored (`scope/*.local.js`), so real client names,
 * candid notes and business detail never reach the public repo. This example
 * is committed purely to document the shape.
 *
 * Every key is optional. Anything you leave out falls back to the public
 * projects.js / workspace.js.
 */

window.SCOPE_LOCAL = {

  workspace: {
    clients: [
      { id:'someone', name:'Full Name', short:'First', org:'Their org',
        projects:['a-project-id'],
        note:'Who they are and what is actually going on with them.',
        archived:false }            // archived clients sort last and read as closed
    ],
    todos: [
      { id:'t-example', list:'client',   // client | work | admin | life | someday
        client:'someone', project:'a-project-id',
        text:'Email them about the thing.',
        demand:'email',               // call | email | text | decide | admin | read | build | errand
        effort:'quick' }              // micro (<=2 min) | quick (<=15) | medium (~1hr) | deep
    ]
  },

  /* The opening line, so "what do I even say" is already paid for. */
  scripts: {
    'a-project-id': { kind:'call', text:'Hi, I am calling about...' }
  },

  /* Override any field of any project. Useful for wording too candid to commit. */
  projects: {
    'a-project-id': {
      summary:'The version you would not publish.',
      blockers:['The real reason it is stuck.'],
      lane:'closed', laneSet:'confirmed', laneWhy:'Why it is closed.'
    }
  }
};
