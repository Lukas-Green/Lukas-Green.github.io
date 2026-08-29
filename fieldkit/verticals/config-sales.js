const FIELDKIT_CONFIG = {
  meta: { name: 'SalesKit', tagline: 'Field prospect tracker for sales teams', vertical: 'sales' },
  brand: { primary: '#7c3aed', accent: '#f59e0b', logoText: 'SK' },
  auth: { roles: ['Sales Rep', 'Team Lead', 'Manager', 'Admin'], storageKey: 'saleskit' },
  contactTypes: {
    primary: {
      name: 'Full Prospect', shortName: 'Full', icon: '🎯',
      fields: [
        { id: 'prospect_name', label: 'Prospect Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'company', label: 'Company', type: 'text', placeholder: 'Company name', required: false, span: 1 },
        { id: 'phone', label: 'Phone', type: 'tel', placeholder: '(503) 555-0100', required: false, span: 1 },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'name@company.com', required: false, span: 1 },
        { id: 'pipeline_stage', label: 'Pipeline Stage', type: 'select', options: ['Cold', 'Contacted', 'Interested', 'Demo Scheduled', 'Proposal Sent', 'Closed Won', 'Closed Lost'], required: true, span: 1 },
        { id: 'territory', label: 'Territory', type: 'text', placeholder: 'Region or area', required: false, span: 1 },
        { id: 'notes', label: 'Notes', type: 'textarea', placeholder: 'Interaction details...', required: false, span: 2 }
      ]
    },
    secondary: {
      name: 'Quick Touch', shortName: 'Quick', icon: '⚡',
      fields: [
        { id: 'prospect_name', label: 'Prospect Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'staff_name', label: 'Rep Name', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'outcome', label: 'Outcome', type: 'select', options: ['Left message', 'Sent follow-up', 'Not available', 'Wrong contact'], required: false, span: 2 }
      ]
    }
  },
  dashboard: {
    stats: [
      { label: 'Total Prospects', source: 'all' },
      { label: 'Full Contacts', source: 'primary' },
      { label: 'In Pipeline', source: 'unique:prospect_name' }
    ]
  },
  table: {
    columns: [
      { label: 'Date', field: '_date' },
      { label: 'Type', field: '_type' },
      { label: 'Prospect', field: 'prospect_name' },
      { label: 'Company', field: 'company' },
      { label: 'Stage', field: 'pipeline_stage' }
    ]
  },
  export: { filename: 'saleskit-export', fields: ['prospect_name', 'company', 'phone', 'email', 'pipeline_stage', 'territory', 'notes'] },
  strings: { addPrimary: 'Log Full Prospect', addSecondary: 'Quick Touch', emptyState: 'No prospects logged yet. Start tracking your pipeline above.' }
};
