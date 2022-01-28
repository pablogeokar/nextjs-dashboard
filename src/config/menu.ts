interface optionsData {
  icon?: string,
  label?: string,
  link?: string,
  badge?: string
}

const options: optionsData[] = [
  {
    icon: 'grid_view',
    label: 'Dashboard',
    link: '#'
  },
  {
    icon: 'person_outline',
    label: 'Customers',
    link: '#'
  },
  {
    icon: 'receipt_long',
    label: 'Orders',
    link: '#'
  },
  {
    icon: 'insights',
    label: 'Analytics',
    link: '#'
  },
  {
    icon: 'mail_outline',
    label: 'Messages',
    link: '#',
    badge: '26'
  },
  {
    icon: 'inventory',
    label: 'Products',
    link: '#'
  },
  {
    icon: 'report_gmailerrorred',
    label: 'reports',
    link: '#'
  },
  {
    icon: 'settings',
    label: 'Settings',
    link: '#'
  },
  {
    icon: 'add',
    label: 'Add Product',
    link: '#'
  },
  {
    icon: 'logout',
    label: 'Logout',
    link: '#'
  }
]

export default options