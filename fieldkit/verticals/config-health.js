const FIELDKIT_CONFIG = {
  meta: { name: 'CHW Suite', tagline: 'Community health worker visit tracker', vertical: 'health' },
  brand: { primary: '#0f766e', accent: '#67e8f9', logoText: 'CW' },
  auth: { roles: ['Community Health Worker', 'Program Coordinator', 'Supervisor', 'Grant Manager'], storageKey: 'chwsuite' },
  contactTypes: {
    primary: {
      name: 'Full Visit', shortName: 'Visit', icon: '🏥',
      fields: [
        { id: 'client_id', label: 'Client ID', type: 'text', placeholder: 'De-identified ID', required: true, span: 1 },
        { id: 'chw_name', label: 'CHW Name', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'visit_date', label: 'Visit Date', type: 'date', placeholder: '', required: true, span: 1 },
        { id: 'visit_type', label: 'Visit Type', type: 'select', options: ['Home Visit', 'Phone Check-In', 'Clinic Escort', 'Resource Referral', 'Crisis Response'], required: true, span: 1 },
        { id: 'presenting_concern', label: 'Presenting Concern', type: 'textarea', placeholder: 'Describe the concern or reason for visit...', required: false, span: 2 },
        { id: 'referrals_made', label: 'Referrals Made', type: 'text', placeholder: 'List any referrals', required: false, span: 1 },
        { id: 'follow_up_needed', label: 'Follow-Up Needed', type: 'select', options: ['Yes - Urgent', 'Yes - Routine', 'No'], required: true, span: 1 },
        { id: 'notes', label: 'Notes', type: 'textarea', placeholder: 'Additional observations...', required: false, span: 2 }
      ]
    },
    secondary: {
      name: 'Check-In', shortName: 'Check-In', icon: '📞',
      fields: [
        { id: 'client_id', label: 'Client ID', type: 'text', placeholder: 'De-identified ID', required: true, span: 1 },
        { id: 'chw_name', label: 'CHW Name', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'check_in_note', label: 'Check-In Note', type: 'textarea', placeholder: 'Brief check-in summary...', required: false, span: 2 }
      ]
    }
  },
  dashboard: {
    stats: [
      { label: 'Total Visits', source: 'all' },
      { label: 'Full Visits', source: 'primary' },
      { label: 'Active CHWs', source: 'unique:chw_name' }
    ]
  },
  table: {
    columns: [
      { label: 'Date', field: '_date' },
      { label: 'Type', field: '_type' },
      { label: 'Client ID', field: 'client_id' },
      { label: 'CHW', field: 'chw_name' },
      { label: 'Follow-Up', field: 'follow_up_needed' }
    ]
  },
  export: { filename: 'chwsuite-export', fields: ['client_id', 'chw_name', 'visit_date', 'visit_type', 'presenting_concern', 'referrals_made', 'follow_up_needed', 'notes'] },
  strings: { addPrimary: 'Log Full Visit', addSecondary: 'Quick Check-In', emptyState: 'No visits logged yet. Start tracking your outreach above.' }
};
