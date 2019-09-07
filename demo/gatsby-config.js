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
        menuId: 5, // Int - The ID of your main menu
        mailChimpEndpoint: 0, // String - "https://example.us10.list-manage.com/subscribe/post?u=b9ef2fdd3edofhec04ba9b930&id=3l948gkt1d"
        dynamicComments: 1, // Boolean - 1 or 2
        gaTrackingId: 0, // String - GA tracking ID
        wordPressUrl: `http://gatsby-preview.wtf`,
      },
    },
  ],
}
