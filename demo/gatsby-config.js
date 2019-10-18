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
      resolve: '@staticfuse/gatsby-theme-publisher',
      options: {
        starterPages: true,
        // publisherMenuConfig: [
        //   {
        //     label: 'home',
        //     url: '/',
        //     isExternal: false,
        //   },
        //   {
        //     label: 'blog',
        //     url: '/blog',
        //     isExternal: false,
        //   },
        //   {
        //     label: 'justinwhall.com',
        //     url: 'https://justinwhall.com',
        //     isExternal: true,
        //   },
        //   {
        //     label: 'top menu',
        //     url: '/contact',
        //     isExternal: false,
        //     childItems: [
        //       {
        //         label: 'sub menu that links to blog',
        //         url: '/blog',
        //         isExternal: false,
        //       },
        //       {
        //         label: 'Another sub item menu',
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
        // menuName: 'PRIMARY',
        wordPressUrl: 'https://sandbox.staticfuse.com',
        blogURI: '/blog',
      },
    },
  ],
};
