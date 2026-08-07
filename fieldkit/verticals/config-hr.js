const FIELDKIT_CONFIG = {
  meta: { name: 'OnboardKit', tagline: 'New hire onboarding milestone tracker', vertical: 'hr' },
  brand: { primary: '#be185d', accent: '#f9a8d4', logoText: 'OK' },
  auth: { roles: ['HR Staff', 'Manager', 'HR Director', 'Admin'], storageKey: 'onboardkit' },
  contactTypes: {
    primary: {
      name: 'Full Milestone', shortName: 'Milestone', icon: '🎯',
      fields: [
        { id: 'employee_name', label: 'Employee Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'department', label: 'Department', type: 'text', placeholder: 'Department name', required: false, span: 1 },
        { id: 'start_date', label: 'Start Date', type: 'date', placeholder: '', required: false, span: 1 },
        { id: 'milestone_type', label: 'Milestone Type', type: 'select', options: ['Equipment Issued', 'System Access', 'Training Complete', 'Manager Check-In', 'Benefits Enrollment', 'Policy Sign-Off', '30-Day Review', '60-Day Review', '90-Day Review'], required: true, span: 1 },
        { id: 'milestone_date', label: 'Milestone Date', type: 'date', placeholder: '', required: true, span: 1 },
        { id: 'assigned_to', label: 'Assigned To', type: 'text', placeholder: 'Responsible party', required: false, span: 1 },
        { id: 'status', label: 'Status', type: 'select', options: ['Complete', 'Pending', 'Blocked', 'Not Started'], required: true, span: 1 },
        { id: 'notes', label: 'Notes', type: 'textarea', placeholder: 'Additional details...', required: false, span: 2 }
      ]
    },
    secondary: {
      name: 'Quick Check-In', shortName: 'Check-In', icon: '✅',
      fields: [
        { id: 'employee_name', label: 'Employee Name', type: 'text', placeholder: 'Full name', required: true, span: 1 },
        { id: 'assigned_to', label: 'Checked By', type: 'text', placeholder: 'Your name', required: true, span: 1 },
        { id: 'check_in_note', label: 'Check-In Note', type: 'textarea', placeholder: 'Brief check-in summary...', required: false, span: 2 }
      ]
    }
  },
  dashboard: {
    stats: [
      { label: 'Total Milestones', source: 'all' },
      { label: 'Full Milestones', source: 'primary' },
      { label: 'Active Employees', source: 'unique:employee_name' }
    ]
  },
  table: {
    columns: [
      { label: 'Date', field: '_date' },
      { label: 'Type', field: '_type' },
      { label: 'Employee', field: 'employee_name' },
      { label: 'Milestone', field: 'milestone_type' },
      { label: 'Status', field: 'status' }
    ]
  },
  export: { filename: 'onboardkit-export', fields: ['employee_name', 'department', 'start_date', 'milestone_type', 'milestone_date', 'assigned_to', 'status', 'notes'] },
  strings: { addPrimary: 'Log Milestone', addSecondary: 'Quick Check-In', emptyState: 'No milestones logged yet. Start tracking onboarding above.' }
};
