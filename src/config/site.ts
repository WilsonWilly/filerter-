export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "O'Jeux de Société",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "contact",
      href: "/contacts",
    },
    {
      label: "donation",
      href: "/donation",
    },
    {
      label: "A propos",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Jeux",
      href: "/projects",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    discord: "https://discord.gg/",
  },
};
