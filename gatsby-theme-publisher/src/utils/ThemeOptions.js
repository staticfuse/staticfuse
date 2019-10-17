/**
 * Sets defaults for all theme options.
 */
const THEME_OPTIONS = {
  menuName: 0,
  publisherMenuConfig: [
    {
      label: 'home',
      href: '/',
      isExternal: false,
    },
    {
      label: 'about',
      href: '/about',
      isExternal: false,
    },
    {
      label: 'blog',
      href: '/blog',
      isExternal: false,
    },
    {
      label: 'contact',
      href: '/contact',
      isExternal: false,
    },
  ],
  mailChimpEndpoint: 0,
  dynamicComments: 1,
  gaTrackingId: 0,
  blogURI: '',
  wpPages: 0,
};

module.exports = THEME_OPTIONS;
