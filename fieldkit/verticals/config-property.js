const FIELDKIT_CONFIG = {
  meta: { name: 'PropertyLog', tagline: 'Property and code inspection logger', vertical: 'property' },
  brand: { primary: '#0369a1', accent: '#38bdf8', logoText: 'PL' },
  auth: { roles: ['Inspector', 'Property Manager', 'Supervisor', 'Admin'], storageKey: 'propertylog' },
  contactTypes: {
    primary: {
      name: 'Full Inspection', shortName: 'Full', icon: '🏠',
      fields: [
        { id: 'property_address', label: 'Property Address', type: 'text', placeholder: '123 Main St', required: true, span: 1 },
        { id: 'unit_number', label: 'Unit Number', type: 'text', placeholder: 'Unit (if applicable)', required: false, span: 1 },
        { id: 'inspection_type', label: 'Inspection Type', type: 'select', options: ['Move-In', 'Move-Out', 'Routine', 'Code Compliance', 'Emergency'], required: true, span: 1 },
        { id: 'inspector_name', label: 'Inspector Name', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'inspection_date', label: 'Inspection Date', type: 'date', placeholder: '', required: true, span: 1 },
        { id: 'category', label: 'Category', type: 'select', options: ['Electrical', 'Plumbing', 'Structural', 'Exterior', 'Interior', 'HVAC', 'Safety', 'General'], required: true, span: 1 },
        { id: 'finding', label: 'Finding', type: 'textarea', placeholder: 'Describe what was found...', required: true, span: 2 },
        { id: 'status', label: 'Status', type: 'select', options: ['Pass', 'Fail', 'Monitor', 'Requires Repair'], required: true, span: 1 },
        { id: 'action_required', label: 'Action Required', type: 'text', placeholder: 'Describe required action', required: false, span: 1 },
        { id: 'next_inspection_date', label: 'Next Inspection Date', type: 'date', placeholder: '', required: false, span: 2 }
      ]
    },
    secondary: {
      name: 'Quick Walk', shortName: 'Walk', icon: '👁️',
      fields: [
        { id: 'property_address', label: 'Property Address', type: 'text', placeholder: '123 Main St', required: true, span: 1 },
        { id: 'inspector_name', label: 'Inspector Name', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'quick_note', label: 'Observation', type: 'textarea', placeholder: 'Quick observation note...', required: true, span: 2 }
      ]
    }
  },
  dashboard: {
    stats: [
      { label: 'Total Inspections', source: 'all' },
      { label: 'Full Inspections', source: 'primary' },
      { label: 'Properties', source: 'unique:property_address' }
    ]
  },
  table: {
    columns: [
      { label: 'Date', field: '_date' },
      { label: 'Type', field: '_type' },
      { label: 'Property', field: 'property_address' },
      { label: 'Category', field: 'category' },
      { label: 'Status', field: 'status' }
    ]
  },
  export: { filename: 'propertylog-export', fields: ['property_address', 'unit_number', 'inspection_type', 'inspector_name', 'inspection_date', 'category', 'finding', 'status', 'action_required', 'next_inspection_date'] },
  strings: { addPrimary: 'Log Full Inspection', addSecondary: 'Quick Walk', emptyState: 'No inspections logged yet. Start your first inspection above.' }
};
