/**
 * Sets defaults for all theme options.
 */
const THEME_OPTIONS = {
  menuName: 0,
  publisherMenuConfig: [
    {
      label: 'home',
      url: '/',
      isExternal: false,
    },
    {
      label: 'about',
      url: '/about',
      isExternal: false,
    },
    {
      label: 'blog',
      url: '/blog',
      isExternal: false,
    },
    {
      label: 'contact',
      url: '/contact',
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
