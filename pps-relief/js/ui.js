/* ============================================================
   UI Rendering Engine — all views
   ============================================================ */
const UI = (() => {
  const content = () => document.getElementById('app-content');
  const header  = () => document.getElementById('header-title');

  const STEP_ICONS = {
    scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7l7-4 7 4"/><path d="M3 13l2-6 4 6a4 4 0 0 1-6 0z"/><path d="M15 13l2-6 4 6a4 4 0 0 1-6 0z"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/></svg>',
    gavel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5l6 6M4 20l6.5-6.5"/><rect x="10.5" y="1.5" width="8" height="8" rx="1" transform="rotate(45 14.5 5.5)"/><path d="M2 22h20"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    balance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M5 7l7-4 7 4"/><path d="M3 13l2-6 4 6"/><path d="M15 13l2-6 4 6"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>'
  };

  const CELEBRATIONS = [
    "Incredible progress! Keep it going.",
    "Another step closer to relief.",
    "You're doing the hard work. It matters.",
    "One more milestone — well done.",
    "Steady progress builds strong cases.",
    "You should be proud of this progress.",
    "Each step forward counts.",
    "Real progress. Keep pushing."
  ];

  function setTitle(title) { header().textContent = title; }

  function wrapGlossaryTerms(text) {
    if (!text || typeof GLOSSARY === 'undefined') return text;
    let result = text;
    Object.keys(GLOSSARY).forEach(term => {
      const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'g');
      result = result.replace(regex, '<span class="legal-term" data-term="$1">$1</span>');
    });
    return result;
  }

  function bindTooltips(container) {
    const terms = container.querySelectorAll('.legal-term');
    terms.forEach(el => {
      el.addEventListener('click', showTooltip);
      el.addEventListener('mouseenter', showTooltip);
    });
  }

  function showTooltip(e) {
    const term = e.target.dataset.term;
    const def = GLOSSARY[term];
    if (!def) return;

    const tip = document.getElementById('tooltip');
    tip.innerHTML = `<div class="tooltip-label">${term}</div>${def}`;
    tip.classList.remove('hidden');
    tip.setAttribute('aria-hidden', 'false');

    const rect = e.target.getBoundingClientRect();
    const tipW = 280;
    let left = rect.left + rect.width / 2 - tipW / 2;
    left = Math.max(12, Math.min(left, window.innerWidth - tipW - 12));
    let top = rect.bottom + 8;
    if (top + 120 > window.innerHeight) top = rect.top - 80;

    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
    tip.style.maxWidth = tipW + 'px';
  }

  function hideTooltip() {
    const tip = document.getElementById('tooltip');
    tip.classList.add('hidden');
    tip.setAttribute('aria-hidden', 'true');
  }

  function showToast(msg, type) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast' + (type ? ' ' + type : '');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.add('hidden'), 2500);
  }

  function showCelebration(stepNum, totalSteps) {
    const el = document.getElementById('celebration');
    const text = document.getElementById('celebrationText');
    const progress = State.getProgress(totalSteps);
    const msg = CELEBRATIONS[Math.floor(Math.random() * CELEBRATIONS.length)];
    text.textContent = `Step ${stepNum} complete! ${progress.percentage}% done. ${msg}`;
    el.classList.remove('hidden');
    setTimeout(() => el.classList.add('hidden'), 2800);
  }

  // ========== DASHBOARD ==========
  function renderDashboard() {
    setTitle('PPS Relief Guide');
    const steps = GUIDE_DATA.steps;
    const progress = State.getProgress(steps.length);
    const state = State.get();
    const docs = state.documents.length;
    const totalActions = steps.reduce((sum, s) => sum + s.substeps.reduce((s2, sub) => s2 + sub.actionItems.length, 0), 0);
    const checkedActions = Object.values(state.actionItems).filter(a => a.checked).length;

    // Find next uncompleted step
    const nextStep = steps.find(s => !state.steps[s.id] || !state.steps[s.id].completed) || steps[0];

    const circumference = 2 * Math.PI * 48;
    const offset = circumference - (progress.percentage / 100) * circumference;
    const ringClass = progress.percentage >= 80 ? 'high' : '';

    let html = `
      <div class="dash-hero">
        <div class="dash-greeting">Your Progress</div>
        <div class="dash-progress-ring" role="progressbar" aria-valuenow="${progress.percentage}" aria-valuemin="0" aria-valuemax="100">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke-width="4" class="ring-bg"/>
            <circle cx="50" cy="50" r="48" fill="none" stroke-width="4" class="ring-fill ${ringClass}"
              stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
          </svg>
          <div class="dash-progress-pct">${progress.percentage}%</div>
        </div>
        <div class="dash-progress-label">${progress.completed} of ${progress.total} steps complete</div>
        <button class="btn-primary dash-cta" onclick="Router.navigate('#/step/${nextStep.id}')">
          ${progress.completed > 0 ? 'Continue: Step ' + nextStep.id : 'Start Step 1'}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      <div class="dash-stats">
        <div class="stat-card">
          <div class="stat-num green">${progress.completed}</div>
          <div class="stat-label">Steps Done</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${checkedActions}</div>
          <div class="stat-label">Tasks Done</div>
        </div>
        <div class="stat-card">
          <div class="stat-num violet">${docs}</div>
          <div class="stat-label">Docs Saved</div>
        </div>
      </div>

      <div class="dash-section-label">Up Next</div>
    `;

    // Show next 3 uncompleted steps
    const upcoming = steps.filter(s => !state.steps[s.id] || !state.steps[s.id].completed).slice(0, 3);
    upcoming.forEach(step => {
      const status = state.steps[step.id] || {};
      const badge = status.completed ? '<span class="step-badge badge-complete">Done</span>'
        : status.started ? '<span class="step-badge badge-active">In Progress</span>'
        : '<span class="step-badge badge-pending">Pending</span>';

      html += `
        <div class="step-card ${status.completed ? 'completed' : status.started ? 'active-step' : ''}" onclick="Router.navigate('#/step/${step.id}')">
          <div class="step-num">${step.id}</div>
          <div class="step-info">
            <div class="step-title">${step.title}</div>
            <div class="step-summary">${step.summary}</div>
            <div class="step-meta">${badge}</div>
          </div>
          <div class="step-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
        </div>
      `;
    });

    content().innerHTML = html;

    // Attorney tip
    if (state.userProfile && state.userProfile.hasAttorney === 'no' && progress.completed < 3) {
      content().innerHTML += `
        <div class="attorney-tip">
          <strong>Tip:</strong> Consider consulting with a licensed Oregon attorney, especially for Steps 5-7 which involve court filings and constitutional arguments. Many offer free initial consultations.
        </div>
      `;
    }
  }

  // ========== STEPS LIST ==========
  function renderStepsList() {
    setTitle('All Steps');
    const steps = GUIDE_DATA.steps;
    const state = State.get();

    let html = `<div class="search-bar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder="Search steps..." id="stepSearch" aria-label="Search steps">
    </div>`;

    steps.forEach(step => {
      const status = state.steps[step.id] || {};
      const badge = status.completed ? '<span class="step-badge badge-complete">Done</span>'
        : status.started ? '<span class="step-badge badge-active">In Progress</span>'
        : '<span class="step-badge badge-pending">Pending</span>';

      // Count action items
      const actionIds = step.substeps.flatMap(sub => sub.actionItems.map(a => a.id));
      const ap = State.getActionProgress(actionIds);

      html += `
        <div class="step-card ${status.completed ? 'completed' : status.started ? 'active-step' : ''}" data-search="${step.title.toLowerCase()}" onclick="Router.navigate('#/step/${step.id}')">
          <div class="step-num">${status.completed ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : step.id}</div>
          <div class="step-info">
            <div class="step-title">${step.title}</div>
            <div class="step-summary">${step.summary}</div>
            <div class="step-meta">
              ${badge}
              <span>${ap.checked}/${ap.total} tasks</span>
            </div>
          </div>
          <div class="step-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
        </div>
      `;
    });

    content().innerHTML = html;

    // Search filter
    document.getElementById('stepSearch').addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.step-card').forEach(card => {
        card.style.display = card.dataset.search.includes(q) ? '' : 'none';
      });
    });
  }

  // ========== STEP DETAIL ==========
  function renderStep(stepId) {
    const step = GUIDE_DATA.steps.find(s => s.id === parseInt(stepId));
    if (!step) { Router.navigate('#/steps'); return; }

    setTitle('Step ' + step.id);
    State.startStep(step.id);
    const state = State.get();
    const stepStatus = state.steps[step.id] || {};

    let html = `
      <div class="step-detail-header">
        <div class="step-detail-num">
          <span style="display:inline-block;width:20px;height:20px;color:var(--accent)">${STEP_ICONS[step.icon] || ''}</span>
          Step ${step.id} of ${GUIDE_DATA.steps.length}
        </div>
        <h2 class="step-detail-title">${step.title}</h2>
        <p class="step-detail-summary">${wrapGlossaryTerms(step.summary)}</p>
      </div>
    `;

    step.substeps.forEach(sub => {
      const actionIds = sub.actionItems.map(a => a.id);
      const ap = State.getActionProgress(actionIds);
      const pct = ap.percentage;

      html += `
        <div class="substep-card" onclick="Router.navigate('#/step/${step.id}/sub/${sub.id}')">
          <div class="substep-id">Section ${sub.id}</div>
          <div class="substep-title">${sub.title}</div>
          <div class="substep-preview">${sub.detail}</div>
          <div class="substep-progress">
            <div class="substep-bar"><div class="substep-bar-fill ${pct === 100 ? 'full' : ''}" style="width:${pct}%"></div></div>
            <span>${ap.checked}/${ap.total}</span>
          </div>
        </div>
      `;
    });

    // Notes section
    const note = State.getNote(step.id);
    html += `
      <div class="notes-section">
        <div class="action-list-label">Your Notes</div>
        <textarea class="notes-textarea" placeholder="Add notes for this step..." id="stepNotes">${note}</textarea>
      </div>
    `;

    // Sticky mark-complete button
    html += `
      <div style="height: 80px;"></div>
      <div class="sticky-action">
        <button class="btn-primary ${stepStatus.completed ? 'btn-danger' : ''}" id="toggleComplete">
          ${stepStatus.completed ? 'Unmark Step ' + step.id : 'Mark Step ' + step.id + ' Complete'}
        </button>
      </div>
    `;

    content().innerHTML = html;
    bindTooltips(content());

    // Notes autosave
    document.getElementById('stepNotes').addEventListener('input', (e) => {
      State.setNote(step.id, e.target.value);
    });

    // Toggle complete
    document.getElementById('toggleComplete').addEventListener('click', () => {
      if (stepStatus.completed) {
        State.unmarkStepComplete(step.id);
        showToast('Step ' + step.id + ' unmarked', '');
      } else {
        State.markStepComplete(step.id);
        showCelebration(step.id, GUIDE_DATA.steps.length);
      }
      renderStep(stepId);
    });
  }

  // ========== SUBSTEP DETAIL ==========
  function renderSubstep(stepId, subId) {
    const step = GUIDE_DATA.steps.find(s => s.id === parseInt(stepId));
    if (!step) { Router.navigate('#/steps'); return; }
    const sub = step.substeps.find(s => s.id === subId);
    if (!sub) { Router.navigate('#/step/' + stepId); return; }

    setTitle('Section ' + sub.id);

    let html = `
      <div class="substep-detail-header">
        <div class="substep-detail-breadcrumb">Step ${step.id} <span>›</span> Section ${sub.id}</div>
        <h2 class="substep-detail-title">${sub.title}</h2>
        <p class="substep-detail-text">${wrapGlossaryTerms(sub.detail)}</p>
      </div>
    `;

    // Action items
    if (sub.actionItems.length) {
      const ap = State.getActionProgress(sub.actionItems.map(a => a.id));
      html += `
        <div class="action-list">
          <div class="action-list-label">Action Items (${ap.checked}/${ap.total})</div>
      `;
      sub.actionItems.forEach(item => {
        const checked = State.isActionChecked(item.id);
        const typeClass = item.type === 'task' ? 'type-task' : item.type === 'research' ? 'type-research' : 'type-document';
        html += `
          <div class="action-item">
            <div class="action-check ${checked ? 'checked' : ''}" data-id="${item.id}" role="checkbox" aria-checked="${checked}" tabindex="0">
              <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span class="action-text ${checked ? 'done' : ''}">${wrapGlossaryTerms(item.text)}</span>
            <span class="action-type ${typeClass}">${item.type}</span>
          </div>
        `;
      });
      html += '</div>';
    }

    // Legal references
    if (sub.legalRefs && sub.legalRefs.length) {
      html += `
        <div class="legal-refs">
          <div class="legal-refs-label">Legal References</div>
      `;
      sub.legalRefs.forEach(ref => {
        html += `<div class="legal-ref"><span>&#9878;&#65039;</span> <strong>${ref.cite}</strong> — ${ref.description}</div>`;
      });
      html += '</div>';
    }

    // Attorney tip for certain steps
    const state = State.get();
    if (state.userProfile && state.userProfile.hasAttorney === 'no' && parseInt(stepId) >= 5) {
      html += `
        <div class="attorney-tip">
          <strong>Tip:</strong> This step involves complex legal procedures. Consider consulting with an attorney who practices criminal defense or post-conviction law in Oregon.
        </div>
      `;
    }

    content().innerHTML = html;
    bindTooltips(content());

    // Bind checkboxes
    content().querySelectorAll('.action-check').forEach(el => {
      const handler = () => {
        const id = el.dataset.id;
        State.toggleAction(id);
        const nowChecked = State.isActionChecked(id);
        el.classList.toggle('checked', nowChecked);
        el.setAttribute('aria-checked', nowChecked);
        el.nextElementSibling.classList.toggle('done', nowChecked);
        if (nowChecked) showToast('Task completed!', 'success');
      };
      el.addEventListener('click', handler);
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
    });
  }

  // ========== DOCUMENTS ==========
  function renderDocuments() {
    setTitle('Documents');
    const docs = State.getDocuments();

    if (docs.length === 0) {
      content().innerHTML = `
        <div class="doc-empty">
          <div class="doc-empty-icon">&#128194;</div>
          <div class="doc-empty-text">No documents tracked yet</div>
          <div class="doc-empty-sub">Tap + to log a document you've gathered</div>
        </div>
        <button class="fab" onclick="UI.showAddDocModal()" aria-label="Add document">+</button>
      `;
      return;
    }

    let html = '';
    docs.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt)).forEach(doc => {
      const step = GUIDE_DATA.steps.find(s => s.id === doc.stepId);
      const stepLabel = step ? 'Step ' + step.id : '';
      const date = new Date(doc.addedAt).toLocaleDateString();
      html += `
        <div class="doc-item">
          <div class="doc-item-header">
            <span class="doc-item-name">${escHtml(doc.name)}</span>
            <span class="doc-item-step">${stepLabel}</span>
          </div>
          ${doc.notes ? '<div class="doc-item-notes">' + escHtml(doc.notes) + '</div>' : ''}
          <div class="doc-item-date">Added ${date}</div>
          <div class="doc-item-actions">
            <button class="btn-ghost" onclick="UI.removeDoc('${doc.id}')">Remove</button>
          </div>
        </div>
      `;
    });

    content().innerHTML = html + `<button class="fab" onclick="UI.showAddDocModal()" aria-label="Add document">+</button>`;
  }

  function showAddDocModal() {
    const steps = GUIDE_DATA.steps;
    let opts = '<option value="">— Select step —</option>';
    steps.forEach(s => { opts += `<option value="${s.id}">Step ${s.id}: ${s.title}</option>`; });

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'docModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-title">Add Document</div>
        <div class="form-group">
          <label class="form-label">Document Name</label>
          <input class="form-input" id="docName" placeholder="e.g., Judgment and Sentence" autocomplete="off">
        </div>
        <div class="form-group">
          <label class="form-label">Related Step</label>
          <select class="form-select" id="docStep">${opts}</select>
        </div>
        <div class="form-group">
          <label class="form-label">Notes (optional)</label>
          <textarea class="form-textarea" id="docNotes" placeholder="Where you got it, status, etc."></textarea>
        </div>
        <div class="modal-actions">
          <button class="btn-secondary" onclick="document.getElementById('docModal').remove()">Cancel</button>
          <button class="btn-primary" id="saveDocBtn">Save Document</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Close on backdrop click
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

    document.getElementById('saveDocBtn').addEventListener('click', () => {
      const name = document.getElementById('docName').value.trim();
      if (!name) { document.getElementById('docName').style.borderColor = 'var(--danger)'; return; }
      const stepId = parseInt(document.getElementById('docStep').value) || null;
      const notes = document.getElementById('docNotes').value.trim();
      State.addDocument({ name, stepId, notes });
      overlay.remove();
      showToast('Document saved!', 'success');
      renderDocuments();
    });
  }

  function removeDoc(docId) {
    State.removeDocument(docId);
    showToast('Document removed', '');
    renderDocuments();
  }

  // ========== INFO ==========
  function renderInfo() {
    setTitle('Information');
    content().innerHTML = `
      <div class="info-card" onclick="Router.navigate('#/info/glossary')">
        <div class="info-card-icon blue">&#128214;</div>
        <div class="info-card-text">
          <div class="info-card-title">Legal Glossary</div>
          <div class="info-card-desc">Plain-language definitions of legal terms</div>
        </div>
      </div>
      <div class="info-card" onclick="UI.exportProgress()">
        <div class="info-card-icon green">&#128190;</div>
        <div class="info-card-text">
          <div class="info-card-title">Export Progress</div>
          <div class="info-card-desc">Download your data as a JSON file</div>
        </div>
      </div>
      <div class="info-card" onclick="UI.confirmReset()">
        <div class="info-card-icon red">&#128465;</div>
        <div class="info-card-text">
          <div class="info-card-title">Reset All Data</div>
          <div class="info-card-desc">Clear all progress, notes, and documents</div>
        </div>
      </div>

      <div class="disclaimer">
        <strong>&#9888;&#65039; Legal Disclaimer:</strong> ${GUIDE_DATA.disclaimer}
      </div>

      <div style="margin-top: 24px; text-align: center; color: var(--text3); font-size: 0.75rem;">
        <p>PPS Relief Guide v${GUIDE_DATA.version}</p>
        <p>Last updated: ${GUIDE_DATA.lastUpdated}</p>
        <p>Jurisdiction: ${GUIDE_DATA.jurisdiction}</p>
      </div>
    `;
  }

  function renderGlossary() {
    setTitle('Legal Glossary');
    const terms = Object.keys(GLOSSARY).sort();
    let html = `<div class="search-bar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder="Search terms..." id="glossarySearch" aria-label="Search glossary">
    </div>`;

    terms.forEach(term => {
      html += `
        <div class="glossary-item" data-search="${term.toLowerCase()}">
          <div class="glossary-term">${term}</div>
          <div class="glossary-def">${GLOSSARY[term]}</div>
        </div>
      `;
    });

    content().innerHTML = html;

    document.getElementById('glossarySearch').addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.glossary-item').forEach(item => {
        item.style.display = item.dataset.search.includes(q) ? '' : 'none';
      });
    });
  }

  function exportProgress() {
    const data = State.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pps-relief-progress-' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Progress exported!', 'success');
  }

  function confirmReset() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'resetModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-title">Reset All Data?</div>
        <p style="color: var(--text2); margin-bottom: 20px; font-size: 0.9375rem; line-height: 1.5;">This will permanently delete all your progress, notes, and document records. This cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn-secondary" onclick="document.getElementById('resetModal').remove()">Cancel</button>
          <button class="btn-primary btn-danger" id="confirmResetBtn">Reset Everything</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    document.getElementById('confirmResetBtn').addEventListener('click', () => {
      State.reset();
      overlay.remove();
      showToast('All data cleared', '');
      Router.navigate('#/dashboard');
    });
  }

  function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  return {
    renderDashboard,
    renderStepsList,
    renderStep,
    renderSubstep,
    renderDocuments,
    renderInfo,
    renderGlossary,
    showAddDocModal,
    removeDoc,
    exportProgress,
    confirmReset,
    hideTooltip,
    showToast
  };
})();
