const FIELDKIT_CONFIG = {
  meta: { name: 'EventKit', tagline: 'Trade show and event lead capture', vertical: 'events' },
  brand: { primary: '#c2410c', accent: '#fb923c', logoText: 'EK' },
  auth: { roles: ['Booth Staff', 'Team Lead', 'Event Manager', 'Admin'], storageKey: 'eventkit' },
  contactTypes: {
    primary: {
      name: 'Full Lead', shortName: 'Lead', icon: '🤝',
      fields: [
        { id: 'attendee_name', label: 'Attendee Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'company', label: 'Company', type: 'text', placeholder: 'Company name', required: false, span: 1 },
        { id: 'title', label: 'Title / Role', type: 'text', placeholder: 'Job title', required: false, span: 1 },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'name@company.com', required: false, span: 1 },
        { id: 'phone', label: 'Phone', type: 'tel', placeholder: '(503) 555-0100', required: false, span: 1 },
        { id: 'interest_level', label: 'Interest Level', type: 'select', options: ['Hot', 'Warm', 'Cold', 'Just Browsing'], required: true, span: 1 },
        { id: 'product_interest', label: 'Product Interest', type: 'text', placeholder: 'What are they interested in?', required: false, span: 2 },
        { id: 'source', label: 'How They Found Us', type: 'select', options: ['Booth Visit', 'Demo', 'Speaking Session', 'Referral', 'Networking'], required: false, span: 1 },
        { id: 'notes', label: 'Notes', type: 'textarea', placeholder: 'Conversation details, follow-up needed...', required: false, span: 2 }
      ]
    },
    secondary: {
      name: 'Quick Scan', shortName: 'Scan', icon: '⚡',
      fields: [
        { id: 'attendee_name', label: 'Attendee Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'company', label: 'Company', type: 'text', placeholder: 'Company name', required: false, span: 1 },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'name@company.com', required: false, span: 2 }
      ]
    }
  },
  dashboard: {
    stats: [
      { label: 'Total Leads', source: 'all' },
      { label: 'Full Leads', source: 'primary' },
      { label: 'Companies', source: 'unique:company' }
    ]
  },
  table: {
    columns: [
      { label: 'Date', field: '_date' },
      { label: 'Type', field: '_type' },
      { label: 'Attendee', field: 'attendee_name' },
      { label: 'Company', field: 'company' },
      { label: 'Interest', field: 'interest_level' }
    ]
  },
  export: { filename: 'eventkit-export', fields: ['attendee_name', 'company', 'title', 'email', 'phone', 'interest_level', 'product_interest', 'source', 'notes'] },
  strings: { addPrimary: 'Capture Full Lead', addSecondary: 'Quick Scan', emptyState: 'No leads captured yet. Start logging above.' }
};
