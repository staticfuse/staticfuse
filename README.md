# Gatby + WordPress Publisher Theme

This repo includes the code for the theme and a demo site which is using the theme in a very basic configuration.

## Getting Started

1.  Clone the repo
2.  Install dependencies `yarn`
3.  Install [WPGraphQL plugin](https://github.com/wp-graphql/wp-graphql)
4.  Add your `wordPressUrl` in the [Publisher theme config](https://github.com/windsorstatic/gatsby-theme-publisher/blob/master/demo/gatsby-config.js#L18)
5.  Set your WordPress `menuId` in the [Publisher theme config](https://github.com/windsorstatic/gatsby-theme-publisher/blob/master/demo/gatsby-config.js#L14)
6.  Optionally configure [other options](https://github.com/windsorstatic/gatsby-theme-publisher#publisher-theme-options)
7.  Start the demo site `yarn workspaces demo`

## Publisher Theme Options

The following options can be configured in [your sites gatsby-config.js](https://github.com/windsorstatic/gatsby-theme-publisher/blob/master/demo/gatsby-config.js#L12)

```javascript
  plugins: [
    {
      resolve: `gatsby-theme-publisher`,
      options: {
        menuId: 5, // Int - The ID of your main menu
        mailChimpEndpoint: 0, // String - "https://example.us10.list-manage.com/subscribe/post?u=b9ef2fdd3edofhec04ba9b930&id=3l948gkt1d"
        dynamicComments: 1, // Boolean
        gaTrackingId: 0, // String - GA tracking ID
        wordPressUrl: `https://scottbolinger.com`, // your WordPress URL
       },
    },
  ],
```
