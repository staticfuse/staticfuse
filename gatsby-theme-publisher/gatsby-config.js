const path = require(`path`)
const themeOptions = require("./src/utils/ThemeOptions")

module.exports = options => {
  const mergedOptions = {
    ...themeOptions,
    ...options,
  }

  const config = {
    siteMetadata: {
      ...mergedOptions,
    },
    plugins: [
      {
        resolve: `gatsby-source-graphql`,
        options: {
          // This type will contain remote schema Query type
          typeName: `WPGraphQL`,
          // This is field under which it's accessible
          fieldName: `wpgraphql`,
          // Url to query from
          url: mergedOptions.wordPressUrl + `/graphql`,
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
    ],
  }

  /**
   * Conditionally add plugins based on theme config
   * to avoid errors while Gatsby boots.
   */
  if (mergedOptions.mailChimpEndpoint) {
    config.plugins.push({
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: mergedOptions.mailChimpEndpoint,
      },
    })
  }

  if (mergedOptions.gaTrackingId) {
    config.plugins.push({
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: mergedOptions.gaTrackingId,
      },
    })
  }

  return config
}
