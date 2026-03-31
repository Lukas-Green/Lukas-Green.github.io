const FIELDKIT_CONFIG = {
  meta: { name: 'VolunteerTrack', tagline: 'Volunteer hour and event check-in tracker', vertical: 'volunteer' },
  brand: { primary: '#9333ea', accent: '#86efac', logoText: 'VT' },
  auth: { roles: ['Volunteer', 'Team Lead', 'Event Coordinator', 'Admin'], storageKey: 'volunteertrack' },
  contactTypes: {
    primary: {
      name: 'Full Shift', shortName: 'Shift', icon: '🙋',
      fields: [
        { id: 'volunteer_name', label: 'Volunteer Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'email', label: 'Email', type: 'email', placeholder: 'volunteer@email.com', required: false, span: 1 },
        { id: 'event_name', label: 'Event Name', type: 'text', placeholder: 'Event or program name', required: true, span: 1 },
        { id: 'role', label: 'Role', type: 'select', options: ['General Volunteer', 'Team Lead', 'Setup', 'Breakdown', 'Registration', 'Safety', 'Outreach'], required: true, span: 1 },
        { id: 'check_in_time', label: 'Check-In Time', type: 'text', placeholder: 'HH:MM', required: false, span: 1 },
        { id: 'check_out_time', label: 'Check-Out Time', type: 'text', placeholder: 'HH:MM', required: false, span: 1 },
        { id: 'hours', label: 'Hours', type: 'number', placeholder: '0', required: false, span: 1 },
        { id: 'notes', label: 'Notes', type: 'textarea', placeholder: 'Any notes about this shift...', required: false, span: 2 }
      ]
    },
    secondary: {
      name: 'Quick Check-In', shortName: 'Check-In', icon: '✅',
      fields: [
        { id: 'volunteer_name', label: 'Volunteer Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'event_name', label: 'Event Name', type: 'text', placeholder: 'Event name', required: true, span: 1 }
      ]
    }
  },
  dashboard: {
    stats: [
      { label: 'Total Check-Ins', source: 'all' },
      { label: 'Full Shifts', source: 'primary' },
      { label: 'Volunteers', source: 'unique:volunteer_name' }
    ]
  },
  table: {
    columns: [
      { label: 'Date', field: '_date' },
      { label: 'Type', field: '_type' },
      { label: 'Volunteer', field: 'volunteer_name' },
      { label: 'Event', field: 'event_name' },
      { label: 'Role', field: 'role' }
    ]
  },
  export: { filename: 'volunteertrack-export', fields: ['volunteer_name', 'email', 'event_name', 'role', 'check_in_time', 'check_out_time', 'hours', 'notes'] },
  strings: { addPrimary: 'Log Full Shift', addSecondary: 'Quick Check-In', emptyState: 'No check-ins yet. Start logging volunteer activity above.' }
};
