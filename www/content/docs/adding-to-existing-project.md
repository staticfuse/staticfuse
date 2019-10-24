---
title: Adding to an existing project
---

1. `yarn add @staticfuse/gatsby-theme-publisher` or `npm install @staticfuse/gatsby-theme-publisher`
2. In your `gatsby-config.js` :

```javascript
module.exports = {
  siteMetadata: {
    title: 'Static Fuse',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott and Justin',
    twitter: '@staticfuse',
    siteUrl: `https://staticfuse.com`,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://staticfuse.wpengine.com`, // The url of your WordPress install
        blogURI: '/blog' // Or whatever you'd prefer
      },
    },
  ],
}
```