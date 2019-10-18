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
      childItems: [],
    },
    {
      label: 'about',
      url: '/about',
      isExternal: false,
      childItems: [],
    },
    {
      label: 'blog',
      url: '/blog',
      isExternal: false,
      childItems: [],
    },
    {
      label: 'contact',
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
