module.exports = {
  siteMetadata: {
    title: "Scott Bolinger",
    description: "Headless WordPress with Gatsby FTW.",
    author: "Scott Bolinger",
    twitter: "@scottbolinger",
    siteUrl: `https://scottbolinger.com`,
    wordPressUrl: `http://gatsby-preview.wtf`, // TODO: don't duplicate this field
  },
  plugins: [
    {
      resolve: `gatsby-theme-publisher`,
      options: {
        menuId: 5,
        mailChimpEndpoint: "",
        dynamicComments: true,
        wordPressUrl: `http://gatsby-preview.wtf`,
      },
    },
  ],
}
