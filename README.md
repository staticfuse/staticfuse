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
        menuName: `Primary`
        // etc..
       },
    },
  ],
```

| Option | Type | Default | Description |
| -------- | -------------- | ------- | ------------------------------------------------------------------------------------------ |
| menuName | string/boolean | 0 | The name of the _WordPress_ menu you'd like to use or `0` if you don't want render a menu. |
| mailChimpEndpoint | string/boolean | 0 | Your mailchimp endpoint. Example: `"https://example.us10.list-manage.com/subscribe/post?u=b9ef2fdd3edofhec04ba9b930&id=3l948gkt1d"`. Set to `0` to disable.
| dynamicComments | boolean | 1 | Enable or disable dynamic comments |
| gaTrackingId | string/boolean | 0 | Your google annalytics UA code. Set to `0` to disable Google Analytics. |
| wordPressUrl | string | `"https://scottbolinger.com"` | The URL of your WordPress site |
