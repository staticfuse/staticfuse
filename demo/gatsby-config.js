module.exports = {
  siteMetadata: {
    title: 'Static Fuse',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott and Justin',
    twitter: '@staticfuse',
    siteUrl: 'https://scottbolinger.com',
  },
  plugins: [
    {
      resolve: '@staticfuse/gatsby-theme-publisher',
      options: {
        starterPages: true,
        // publisherMenuConfig: [
        //   {
        //     label: 'custom',
        //     href: '/about',
        //     isExternal: false,
        //   },
        //   {
        //     label: 'justinwhall.com',
        //     href: 'https://justinwhall.com',
        //     isExternal: true,
        //   },
        // ],
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        // wpPages: 1,
        // menuName: 'PRIMARY',
        wordPressUrl: 'https://sandbox.staticfuse.com',
        blogURI: '/blog',
      },
    },
  ],
};
