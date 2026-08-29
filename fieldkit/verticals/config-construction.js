const FIELDKIT_CONFIG = {
  meta: { name: 'SiteLog', tagline: 'Daily construction log for field superintendents', vertical: 'construction' },
  brand: { primary: '#b45309', accent: '#fbbf24', logoText: 'SL' },
  auth: { roles: ['Field Super', 'Project Manager', 'Safety Officer', 'Admin'], storageKey: 'sitelog' },
  contactTypes: {
    primary: {
      name: 'Full Day Log', shortName: 'Full', icon: '🏗️',
      fields: [
        { id: 'project_name', label: 'Project Name', type: 'text', placeholder: 'Project name or number', required: true, span: 1 },
        { id: 'superintendent', label: 'Superintendent', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'log_date', label: 'Log Date', type: 'date', placeholder: '', required: true, span: 1 },
        { id: 'crew_count', label: 'Crew Count', type: 'number', placeholder: '0', required: false, span: 1 },
        { id: 'work_zone', label: 'Work Zone / Area', type: 'text', placeholder: 'Zone or section', required: false, span: 2 },
        { id: 'work_completed', label: 'Work Completed', type: 'textarea', placeholder: 'Describe work completed today...', required: true, span: 2 },
        { id: 'materials_delivered', label: 'Materials Delivered', type: 'text', placeholder: 'List any deliveries', required: false, span: 1 },
        { id: 'weather', label: 'Weather', type: 'select', options: ['Clear', 'Cloudy', 'Rain', 'Wind', 'Extreme'], required: false, span: 1 },
        { id: 'incident_flag', label: 'Incident', type: 'select', options: ['None', 'Near Miss', 'Minor Injury', 'Major Injury', 'Property Damage'], required: true, span: 2 },
        { id: 'notes', label: 'Additional Notes', type: 'textarea', placeholder: 'Delays, issues, instructions...', required: false, span: 2 }
      ]
    },
    secondary: {
      name: 'Quick Note', shortName: 'Note', icon: '📝',
      fields: [
        { id: 'project_name', label: 'Project Name', type: 'text', placeholder: 'Project name', required: true, span: 1 },
        { id: 'superintendent', label: 'Superintendent', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'quick_note', label: 'Note', type: 'textarea', placeholder: 'Quick site note...', required: true, span: 2 }
      ]
    }
  },
  dashboard: {
    stats: [
      { label: 'Total Logs', source: 'all' },
      { label: 'Full Day Logs', source: 'primary' },
      { label: 'Active Projects', source: 'unique:project_name' }
    ]
  },
  table: {
    columns: [
      { label: 'Date', field: '_date' },
      { label: 'Type', field: '_type' },
      { label: 'Project', field: 'project_name' },
      { label: 'Super', field: 'superintendent' },
      { label: 'Incident', field: 'incident_flag' }
    ]
  },
  export: { filename: 'sitelog-export', fields: ['project_name', 'superintendent', 'log_date', 'crew_count', 'work_zone', 'work_completed', 'materials_delivered', 'weather', 'incident_flag', 'notes'] },
  strings: { addPrimary: 'New Day Log', addSecondary: 'Quick Note', emptyState: 'No logs yet. Start your first daily log above.' }
};
