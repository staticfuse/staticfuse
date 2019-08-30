const path = require(`path`)
const config = require(`./config`)

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    twitter: config.twitter,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: config.wordPressUrl + `/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.gaTrackingId,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Merriweather", "Lato"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: config.mailChimpEndpoint,
      },
    },
  ],
}
