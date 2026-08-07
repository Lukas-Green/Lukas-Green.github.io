const FIELDKIT_CONFIG = {
  meta: { name: 'CanvassKit', tagline: 'Field contact tracker for outreach teams', vertical: 'outreach' },
  brand: { primary: '#1d4ed8', accent: '#34d399', logoText: 'CK' },
  auth: { roles: ['Field Staff', 'Team Lead', 'Supervisor', 'Admin'], storageKey: 'canvasskit' },
  contactTypes: {
    primary: {
      name: 'Hard Contact', shortName: 'Hard', icon: '📋',
      fields: [
        { id: 'contact_name', label: 'Contact Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'staff_name', label: 'Staff Member', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'location', label: 'Location / Address', type: 'text', placeholder: 'Street or area', required: false, span: 2 },
        { id: 'outcome', label: 'Outcome', type: 'select', options: ['Interested', 'Not Interested', 'Follow-Up', 'Referred', 'Other'], required: false, span: 1 },
        { id: 'follow_up_date', label: 'Follow-Up Date', type: 'date', placeholder: '', required: false, span: 1 },
        { id: 'notes', label: 'Notes', type: 'textarea', placeholder: 'Conversation details...', required: false, span: 2 }
      ]
    },
    secondary: {
      name: 'Quick Contact', shortName: 'Quick', icon: '⚡',
      fields: [
        { id: 'staff_name', label: 'Staff Member', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'location', label: 'Location', type: 'text', placeholder: 'Street or area', required: false, span: 1 }
      ]
    }
  },
  dashboard: {
    stats: [
      { label: 'Total Contacts', source: 'all' },
      { label: 'Hard Contacts', source: 'primary' },
      { label: 'Active Staff', source: 'unique:staff_name' }
    ]
  },
  table: {
    columns: [
      { label: 'Date', field: '_date' },
      { label: 'Type', field: '_type' },
      { label: 'Contact', field: 'contact_name' },
      { label: 'Staff', field: 'staff_name' },
      { label: 'Outcome', field: 'outcome' }
    ]
  },
  export: { filename: 'canvasskit-export', fields: ['contact_name', 'staff_name', 'location', 'outcome', 'follow_up_date', 'notes'] },
  strings: { addPrimary: 'Log Hard Contact', addSecondary: 'Quick Contact', emptyState: 'No contacts logged yet. Start tracking your outreach above.' }
};
