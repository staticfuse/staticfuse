const path = require(`path`)
const themeOptions = require("./src/utils/ThemeOptions")

module.exports = options => {
  const mergedOptions = {
    ...options,
    ...themeOptions,
  }

  return {
    siteMetadata: {
      ...mergedOptions,
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
          url: options.wordPressUrl + `/graphql`,
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
          url: options.wordPressUrl + `/graphql`,
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: options.gaTrackingId,
        },
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
      `gatsby-plugin-sitemap`,
      {
        resolve: "gatsby-plugin-mailchimp",
        options: {
          endpoint: options.mailChimpEndpoint,
        },
      }`gatsby-plugin-sass`,
      {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          google: {
            families: ["Merriweather", "Lato"],
          },
        },
      },
    ],
  }
}
