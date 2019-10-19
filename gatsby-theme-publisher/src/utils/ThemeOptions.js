/**
 * Sets defaults for all theme options.
 */
const THEME_OPTIONS = {
  menuName: 0,
  publisherMenuConfig: [
    {
      label: 'Home',
      url: '/',
      isExternal: false,
      childItems: [],
    },
    {
      label: 'About',
      url: '/about',
      isExternal: false,
      childItems: [],
    },
    {
      label: 'Blog',
      url: '/blog',
      isExternal: false,
      childItems: [],
    },
    {
      label: 'Contact',
      url: '/contact',
      isExternal: false,
      childItems: [],
    },
  ],
  mailChimpEndpoint: 0,
  dynamicComments: 1,
  gaTrackingId: 0,
  blogURI: '',
  wpPages: 0,
};

module.exports = THEME_OPTIONS;
