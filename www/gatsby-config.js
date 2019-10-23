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
        // publisherMenuConfig: [
        //   {
        //     label: 'Home',
        //     url: '/',
        //     isExternal: false,
        //   },
        //   {
        //     label: 'Blog',
        //     url: '/blog',
        //     isExternal: false,
        //   },
        //   {
        //     label: 'External Site',
        //     url: 'https://justinwhall.com',
        //     isExternal: true,
        //   },
        //   {
        //     label: 'Dropdown Menu',
        //     url: '/contact',
        //     isExternal: false,
        //     childItems: [
        //       {
        //         label: 'Item 1',
        //         url: '/blog',
        //         isExternal: false,
        //       },
        //       {
        //         label: 'Item 2',
        //         url: '/blog',
        //         isExternal: false,
        //       },
        //     ],
        //   },
        // ],
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
