# Gatsby WordPress Publisher Theme

![Gatsby Theme Publisher Screenshot](https://data.staticfuse.com/wp-content/uploads/2019/10/publisher-hero.jpg)

The Gatsby Publisher Theme allows you to create a headless (or decoupled) WordPress site. This theme will display all of your pages and posts in a static front-end built on React and Gatsby.

## Getting Started

This repo includes the code for the theme and a demo site which is using the theme in a very basic configuration.

### Prequisites

- [Node and NPM](https://www.gatsbyjs.org/tutorial/part-zero/#-install-nodejs-and-npm)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Overview

1.  We recommend starting by cloning [Create Gatsby Theme Publisher](https://github.com/staticfuse/create-gatsby-theme-publisher) which has the publisher theme installed and preconfigured
2.  cd into the folder `cd my-new-site`
3.  Install dependencies `yarn`
4.  Install [WPGraphQL plugin on your WordPress site](https://github.com/wp-graphql/wp-graphql)
5.  Configure your site options in [demo/gatsby-config.js](https://github.com/staticfuse/staticfuse/blob/master/www/gatsby-config.js) Explanation of the options is [below](#publisher-theme-options)
6.  Start the demo site `yarn start`
7.  Add your logo and [customize the theme](#theme-customization)
8.  Publish to Netlify

## Adding Gatsby WordPress Theme Publisher to an existing Gatsby site

1. `yarn install @staticfuse/gatsby-theme-publisher`
2. In your `gatsby-config.js` :
```js
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        menuName: `PRIMARY`,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `http://data.gatsby.develop`, // The url of your WordPress install
        blogURI: '/blog' // Or whatever you'd prefer
      },
    },
  ],
```

## Publisher Theme Options

The following options can be configured in [your site's gatsby-config.js](https://github.com/staticfuse/staticfuse/blob/master/www/gatsby-config.js)

### Site Metadata

In demo/gatsby-config.js, edit the siteMetadata object with your site title, url, etc.

Note: `siteUrl` refers to your final website address. `wordPressUrl` in the plugin options refers to the WordPress site. For example, your WordPress site may be hosted at data.mybusiness.com, but your Gatsby site will be at mybusiness.com.

### Plugin Options

```javascript
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: 'https://data.staticfuse.com',
        blogURI: '/blog',
        // ...etc
       },
    },
  ],
```

| Option | Type | Default | Description |
| -------| ---- | ------- | ----------- |
| mailChimpEndpoint | string/boolean | 0 | [Your mailchimp endpoint](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/#mailchimp-endpoint). Set to `0` to disable.
| dynamicComments | boolean | 1 | Enable or disable dynamic comments. If enabled, anyone can post a comment. |
| gaTrackingId | string/boolean | 0 | Your google analytics UA code. Set to `0` to disable Google Analytics. |
| wordPressUrl | string | `"https://scottbolinger.com"` | The URL of your WordPress site |
| blogURI | string | '' | The path prefix on the blog and blog posts. No leading slash. `'/blog'` would result in `https://my-domain.com/blog/` |
| starterPages | boolean | true | Create a home, about, and contact page in Gatsby. |
| menuName | string/boolean | 0 | The name of the _WordPress_ menu you'd like to use or `0` if you don't want to render a menu. |
| publisherMenuConfig | array | [] | Optional array based way to configure the menu. More info [here](#publisher-menu). |

## Theme Customization

You can customize the colors, add or remove pages, and edit template files. All theme customization should happen in your theme folder, where you cloned create-gatsby-theme-publisher. If you are familiar with WordPress, this is like a "child theme."

Any changes you make in the main gatsby-theme-publisher folder will be overwritten by theme updates.

### Logo

To add your logo, add your-theme/src/images/site-logo.png.

You will need to add a folder called images to the your-theme/src directory, and add your logo file inside with the name site-logo.png. You can make further modifications in the your-theme/src/components/Logo.js file.

### Customize Theme Colors

Open your-theme/src/gatsby-theme-publisher/theme/theme.js

The theme color defaults are commented out, you can uncommment them and change the value. For example, to change the header background color, change...

`// headerBg: "#2D3748"`

to any color, such as...

`headerBg: "#bada55"`

For more options, please see [here](https://chakra-ui.com/theme)

### Publisher Menu

There are two ways to configure the publisher.

#### _1) publisherMenuConfig option (array config)_

This is the default behavior. Theme setting `starterPages` is set to true. Publisher theme will output "Home", "About" & "Contact" with zero config. In the event you wanted to override this, you can add your config to the `publisherMenuConfig` theme option. For instance, if you wanted to add a link to `/portfolio` and child item to "Contact" you'd do the following:

```javascript
  {
    resolve: '@staticfuse/gatsby-theme-publisher',
    options: {
      publisherMenuConfig: [
        {
          label: 'Home',
          url: '/',
          isExternal: false,
        },
        {
          label: 'Blog',
          url: '/blog',
          isExternal: false,
        },
        {
          label: 'Portfolio',
          url: '/portfolio',
          isExternal: false,
        },
        {
          label: 'Contact',
          url: '/contact',
          isExternal: false,
          childItems: [
            {
              label: 'I live in the dropdown',
              url: '/some-url',
              isExternal: false,
            },
          ],
        },
      ],
      // More options if so desired...
    }
  }
```

Keep in mind it's up to you to link to a valid page. If you do `url: '/some-bad-url'`, your site will 404.

*What is `isExternal: false`?*

This tells the Publisher theme and Gatsby wether to navigate to a link client site using Gatsby `<Link/>` or use a `<a>`.

_Client_

```javascript
{
  label: 'Blog',
  url: '/blog',
  isExternal: false,
},
```

_Full page reload_

```javascript
{
  label: 'StaticFuse',
  url: 'https://staticfuse.com',
  isExternal: true,
},
```

#### _2) Use a WordPress menu_

You can manage your menu within the your WordPress site as well. To do so, change Publisher theme setting to: `menuName: 'your menu name'`. For example, the setting for the example (image) below would be: `menuName: 'PRIMARY'`
![Gatsby Theme Publisher Screenshot](https://publishertheme.staticfuse.com/wp-content/uploads/2019/10/menuss.png)

*Known limitation:* For _both_ menu managment options, `childItems` are currently only supported _one_ level deep.

### Customize Templates

To change a page template layout, you can copy the file to the demo folder. For example, to edit the header, you would copy gatsby-theme-publisher/src/components/Header.js into demo/src/components/Header.js and edit the file there. Gatsby will automatically use your header file instead of the default.

This theme uses [Chakra UI](https://chakra-ui.com), which gives you a lot of easy to use components. You can use any of these components in your theme templates.

## Publishing to Netlify

Netlify is a static hosting environment that is free to start, and handles Gatsby sites really well. To publish your site on Netlify, first create a new account at [netlify.com](https://netlify.com).

Next, add your theme project files to a Github repository.

Login to Netlify and you will see a `New site from git` button at the top right corner of the screen. Click on it and authorize Netlify to use your account. Choose your website repository and it will take you to deploy settings with the below options.

- Branch to deploy: You can specify a branch to monitor. When you push to that particular branch, only then will Netlify build and deploy the site. The default is master.
- Build Command: You can specify the command you want Netlify to run when you push to the above branch. The default is `yarn build`.
- Publish directory: You can specify which folder Netlify should use to host the website. eg. public, dist, build. The default is `public`.
- Advanced build settings: If the site needs environment variables to build, you can specify them by clicking on Show advanced and then the New Variable button.

Click on the Deploy site button and Netlify will start the build and deploy process you have specified. You can go to the Deploys tab and see the process unfold in the Deploy log. After a few moments, it will give you the live site URL eg. random-name.netlify.com.

## Troubleshooting

### CORS

The search functionality makes remote requests to the source WordPress install. Depending on how your server/theme is configured, these requests could be blocked. There are a number of ways to set the [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) including in a theme or plugin.

*this needs to go in a plugin or in your theme's fuctions.php*
```php
/**
 * Add headers
 *
 * @param array $headers existing headers.
 *
 * @return array
 */
function filter_graphql_headers( $headers ) {
	$headers['Access-Control-Allow-Origin']  = '*'; // This should be the domain of your Gatsby site.
	$headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';

	return $headers;
}
add_filter( 'graphql_response_headers_to_send', 'filter_graphql_headers' );
```
