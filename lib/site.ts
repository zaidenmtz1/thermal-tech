export const site = {
  name: 'Thermal Tech Inc.',
  tagline: 'Pipe and vessel insulators',
  phone: '(509) 555-0100',
  phoneHref: 'tel:+15095550100',
  email: 'info@thermaltechinc.com',
  location: 'Tri-Cities, Washington',
}

export type NavLink = { label: string; href: string }
export type NavGroup = { heading: string; links: NavLink[] }
export type NavItem = {
  label: string
  href: string
  description?: string
  groups?: NavGroup[]
}

export const navItems: NavItem[] = [
  {
    label: 'About',
    href: '/about',
    description: 'A local insulation crew built on clean work and clear communication.',
    groups: [
      {
        heading: 'Company',
        links: [
          { label: 'About us', href: '/about' },
          { label: 'Our crew', href: '/about#crew' },
          { label: 'Why Thermal Tech', href: '/about#why' },
        ],
      },
      {
        heading: 'Get in touch',
        links: [
          { label: 'Request a quote', href: '/request-a-quote' },
          { label: 'Contact', href: '/contact' },
          { label: 'Service area', href: '/about#service-area' },
        ],
      },
    ],
  },
  {
    label: 'Industrial',
    href: '/industrial',
    description: 'Insulation and jacketing for process piping, vessels, and equipment.',
    groups: [
      {
        heading: 'Systems',
        links: [
          { label: 'Pipe installation', href: '/industrial/pipe-installation' },
          { label: 'Vessels and tanks', href: '/industrial#vessels' },
          { label: 'Equipment and skids', href: '/industrial#skids' },
        ],
      },
      {
        heading: 'Finishes',
        links: [
          { label: 'Metal jacketing', href: '/industrial#jacketing' },
          { label: 'Refrigeration lines', href: '/industrial#refrigeration' },
          { label: 'Request a quote', href: '/request-a-quote' },
        ],
      },
    ],
  },
  {
    label: 'Commercial',
    href: '/commercial',
    description: 'Mechanical insulation for new construction and building retrofits.',
    groups: [
      {
        heading: 'Systems',
        links: [
          { label: 'Ductwork', href: '/commercial#ductwork' },
          { label: 'Hydronic piping', href: '/commercial#piping' },
          { label: 'Mechanical rooms', href: '/commercial#mechanical-rooms' },
        ],
      },
      {
        heading: 'Work with us',
        links: [
          { label: 'General contractors', href: '/commercial#contractors' },
          { label: 'Request a quote', href: '/request-a-quote' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    description: 'Guides and answers for engineers, contractors, and plant managers.',
    groups: [
      {
        heading: 'Learn',
        links: [
          { label: 'Insulation guides', href: '/resources' },
          { label: 'Company videos', href: '/#videos' },
          { label: 'Projects', href: '/projects' },
          { label: 'Gallery', href: '/gallery' },
        ],
      },
      {
        heading: 'Support',
        links: [
          { label: 'FAQ', href: '/faq' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
]
