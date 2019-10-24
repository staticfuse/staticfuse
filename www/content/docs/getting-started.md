---
title: Getting Started
order: 1
---
This is the repository for theme development, if you want to create a site with this theme, *you should clone the [Create Gatsby Publisher repo here.](https://github.com/staticfuse/create-gatsby-theme-publisher)*

You can also add this theme as a dependency to an existing project.

If you do not do the steps above but instead clone this repository, you will need to use yarn workspaces to develop your theme.

### Prequisites

- [Node and NPM](https://www.gatsbyjs.org/tutorial/part-zero/#-install-nodejs-and-npm)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Overview

1.  We recommend starting by cloning [Create Gatsby Theme Publisher](https://github.com/staticfuse/create-gatsby-theme-publisher) which has the publisher theme installed and preconfigured:
```
git clone https://github.com/staticfuse/create-gatsby-theme-publisher.git
```
2.  cd into the folder `cd create-gatsby-theme-publisher`
3.  Install dependencies `yarn`
4.  Install [WPGraphQL plugin on your WordPress site](https://github.com/wp-graphql/wp-graphql)
5.  Configure your site options in [gatsby-config.js](https://github.com/staticfuse/create-gatsby-theme-publisher/blob/master/gatsby-config.js) Explanation of the options is [below](https://github.com/staticfuse/gatsby-theme-publisher#publisher-theme-options)
6.  Start the demo site `yarn start`
7.  Add your logo and [customize the theme](https://github.com/staticfuse/gatsby-theme-publisher#theme-customization)
8.  [Publish to Netlify](https://github.com/staticfuse/gatsby-theme-publisher#publishing-to-netlify) or any static host.