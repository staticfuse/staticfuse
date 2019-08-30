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
    {
      resolve: `gatsby-theme-publisher`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
        mailChimpEndpoint: '',
        dynamicComments: true,
        wordPressUrl: `https://designbyscott.wpengine.com`
      },
    },
  ],
}
