export default [
  {
    name: 'units',
    label: 'Units',
    select: true,
    options: [
      { value: 'KM', label: 'KM' },
      { value: 'Miles', label: 'Miles' }
    ],
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'radius',
    type: 'number',
    label: 'Radius',
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'currency',
    label: 'Currency',
    select: true,
    options: [
      { value: 'BRL', label: 'BRL' },
      { value: 'USD', label: 'USD' },
      { value: 'EUR', label: 'EUR' },
      { value: 'RUR', label: 'RUR' },
    ],
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'dateFormat',
    label: 'Date Format',
    select: true,
    options: [
      { value: 'DD/MM/YYYY"', label: 'DD/MM/YYYY"' },
      { value: 'DD.MM.YYYY', label: 'DD.MM.YYYY' },
      { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
      { value: 'MM.DD.YYYY', label: 'MM.DD.YYYY' },
    ],
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'timeFormat',
    label: 'Time Format',
    select: true,
    options: [
      { value: 'HH:mm"', label: 'HH:mm"' },
      { value: 'HHmm"', label: 'HHmm"' },
    ],
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'locationDefaultTab',
    label: 'Location Default Tab',
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'pollingInterval',
    label: 'Polling Interval',
    type: 'number',
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'countryCode',
    label: 'Country Code',
    select: true,
    options: [
      { value: 'br', label: 'BR' },
      { value: 'ru', label: 'RU' },
    ],
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'appId',
    label: 'Application ID',
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'environment',
    label: 'Environment',
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'publishableKey',
    label: 'Publishable Key',
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'analyticsTrackingId',
    label: 'Analytics Tracking ID',
    sizes: { sm: 6, md: 4 },
  },
  {
    name: 'deleteMyAccount',
    label: 'Delete My Account',
    sizes: { sm: 6, md: 4 },
  },
  { type: 'divider' },
  {
    name: 'externalBusinessId',
    label: 'External Business ID',
    sizes: { xs: 6, sm: 6 },
    type: 'switch'
  },
  {
    name: 'showLoyaltyStatus',
    label: 'Show Loyalty Status',
    sizes: { xs: 6, sm: 6 },
    type: 'switch',
  },
  {
    name: 'translations',
    label: 'Translations',
    type: 'url',
    sizes: { xs: '12', sm: '12' },
  }
]