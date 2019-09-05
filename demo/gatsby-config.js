module.exports = {
  siteMetadata: {
    title: "Scott Bolinger",
    description: "Headless WordPress with Gatsby FTW.",
    author: "Scott Bolinger",
    twitter: "@scottbolinger",
    siteUrl: `https://scottbolinger.com`,
    wordPressUrl: `https://designbyscott.wpengine.com` // TODO: don't duplicate this field
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-theme-publisher`,
      options: {
        mailChimpEndpoint: '',
        dynamicComments: true,
        wordPressUrl: `https://designbyscott.wpengine.com`
      },
    },
  ],
}
