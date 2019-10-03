module.exports = {
  siteMetadata: {
    title: 'Scott Bolinger',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott Bolinger',
    twitter: '@scottbolinger',
    siteUrl: `https://scottbolinger.com`,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://designbyscott.wpengine.com`,
        blogURI: '/blog'
      },
    },
  ],
}
