// Single source of truth for the main navigation.
// Edit this array once and every page's navbar updates automatically.

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/',               label: 'Home' },
  { href: '/about',          label: 'About' },
  { href: '/programs',       label: 'Programs' },
  { href: '/curriculum',     label: 'Curriculum' },
  { href: '/e-toolkit',      label: 'E-Toolkit' },
  { href: '/team',           label: 'Team' },
  { href: '/gallery',        label: 'Gallery' },
  { href: '/pricing',        label: 'Pricing' },
  { href: '/faq',            label: 'FAQ' },
  { href: '/blog',           label: 'Blog' },
  { href: '/contact',        label: 'Contact' },
];

// App store / Play store buttons shown in the header.
export const APP_LINKS = {
  playStore:
    'https://play.google.com/store/apps/details?id=co.varys.lipnp&pcampaignid=web_share',
  appStore:
    'https://apps.apple.com/in/app/myinstitute/id1472483563',
};
