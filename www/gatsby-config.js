module.exports = {
  siteMetadata: {
    title: 'Static Fuse',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott and Justin',
    twitter: '@staticfuse',
    siteUrl: 'https://staticfuse.com',
  },
  plugins: [
    {
      resolve: '@staticfuse/gatsby-theme-docs',
      options: {
        dirPath: `${__dirname}/content`,
      },
    },
    {
      resolve: '@staticfuse/gatsby-theme-publisher',
      options: {
        starterPages: true,
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
            label: 'docs',
            url: '/docs/getting-started',
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
        wpPages: 0,
        menuName: 0,
        wordPressUrl: 'https://data.staticfuse.com',
        blogURI: '/blog',
      },
    },
  ],
};
