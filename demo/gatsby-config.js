module.exports = {
  siteMetadata: {
    title: "Scott Bolinger",
    description: "Headless WordPress with Gatsby FTW.",
    author: "Scott Bolinger",
    twitter: "@scottbolinger",
    siteUrl: `https://scottbolinger.com`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-publisher`,
      options: {
        menuName: `PRIMARY`,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `http://gatsby-preview.wtf`,
      },
    },
  ],
}
