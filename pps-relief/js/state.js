/* ============================================================
   State Manager — localStorage persistence
   ============================================================ */
const State = (() => {
  const KEY = 'pps_relief_state';
  const VERSION = 1;

  function defaults() {
    return {
      version: VERSION,
      onboardingComplete: false,
      userProfile: { startingPoint: null, hasAttorney: null, createdAt: null },
      steps: {},
      actionItems: {},
      documents: [],
      notes: {}
    };
  }

  function get() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      const s = JSON.parse(raw);
      if (s.version !== VERSION) return migrate(s);
      return s;
    } catch { return defaults(); }
  }

  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }

  function migrate(old) {
    const s = defaults();
    Object.keys(s).forEach(k => { if (old[k] !== undefined && k !== 'version') s[k] = old[k]; });
    save(s);
    return s;
  }

  function update(fn) {
    const s = get();
    fn(s);
    save(s);
    return s;
  }

  return {
    get,
    save,
    update,

    completeOnboarding(profile) {
      return update(s => {
        s.onboardingComplete = true;
        s.userProfile = { ...profile, createdAt: new Date().toISOString() };
      });
    },

    getStepStatus(stepId) {
      const s = get();
      return s.steps[stepId] || { started: false, completed: false };
    },

    startStep(stepId) {
      return update(s => {
        if (!s.steps[stepId]) s.steps[stepId] = {};
        s.steps[stepId].started = true;
        s.steps[stepId].startedAt = s.steps[stepId].startedAt || new Date().toISOString();
      });
    },

    markStepComplete(stepId) {
      return update(s => {
        if (!s.steps[stepId]) s.steps[stepId] = {};
        s.steps[stepId].started = true;
        s.steps[stepId].completed = true;
        s.steps[stepId].completedAt = new Date().toISOString();
      });
    },

    unmarkStepComplete(stepId) {
      return update(s => {
        if (s.steps[stepId]) {
          s.steps[stepId].completed = false;
          s.steps[stepId].completedAt = null;
        }
      });
    },

    toggleAction(actionId) {
      return update(s => {
        const current = s.actionItems[actionId] || { checked: false };
        s.actionItems[actionId] = {
          checked: !current.checked,
          checkedAt: !current.checked ? new Date().toISOString() : null
        };
      });
    },

    isActionChecked(actionId) {
      const s = get();
      return !!(s.actionItems[actionId] && s.actionItems[actionId].checked);
    },

    addDocument(doc) {
      return update(s => {
        s.documents.push({
          ...doc,
          id: 'doc_' + Date.now(),
          addedAt: new Date().toISOString()
        });
      });
    },

    removeDocument(docId) {
      return update(s => {
        s.documents = s.documents.filter(d => d.id !== docId);
      });
    },

    getDocuments() {
      return get().documents;
    },

    setNote(stepId, text) {
      return update(s => { s.notes[stepId] = text; });
    },

    getNote(stepId) {
      return get().notes[stepId] || '';
    },

    getProgress(totalSteps) {
      const s = get();
      const completed = Object.values(s.steps).filter(st => st.completed).length;
      return {
        completed,
        total: totalSteps || 10,
        percentage: Math.round((completed / (totalSteps || 10)) * 100)
      };
    },

    getActionProgress(actionIds) {
      const s = get();
      const checked = actionIds.filter(id => s.actionItems[id] && s.actionItems[id].checked).length;
      return { checked, total: actionIds.length, percentage: actionIds.length ? Math.round((checked / actionIds.length) * 100) : 0 };
    },

    exportData() {
      return JSON.stringify(get(), null, 2);
    },

    reset() {
      localStorage.removeItem(KEY);
      return defaults();
    }
  };
})();
