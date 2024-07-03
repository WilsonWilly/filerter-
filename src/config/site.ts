export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: ' O JeuxDeSociété',
  description: ' Découvrez, partagez et jouez ! ',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'donnation',
      href: '/donation',
    },
    {
      label: 'contact',
      href: '/contacts',
    },
    {
      label: 'A Propos',
      href: '/about',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
