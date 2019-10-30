# Gatsby Theme Static Fuse Docs

A simple markdown documentation Gatsby Theme. Optimized for simple integration with the Static Fuse Publisher Gatsby Theme.

# Getting Started

Add the following to your `gatsby-config.js`
```javascript
  plugins: [
     '@staticfuse/gatsby-theme-docs',
     // more plugins...
  ]
```

The plugin will create the following directories & files the next time you bootstrap Gatsby:

```javascript
./config/TOC.yml // Docs menu config
./content/assets/ // Optionally use to store assets when writing markdown
./content/docs/getting-started.md // Starter markdown doc. Place additional docs as siblings here.
```

# Configuring the "aside" docs menu

Menu configuration is administered by editing the `./config/TOC.yml` file.
```yaml
- label: Getting Started # link text
  path: /docs/getting-started # link href value
  isHeader: false # Am I a header? (not a link at all)

  # Example of a header with child links
- label: Section Three (just a header)
  path: /docs/getting-started
  isHeader: true
  childItems: #child link items.
    - label: child link one
      path: /docs/section-three-article-one
      isHeader: false
    - label: child link two
      path: /docs/section-three-article-two
      isHeader: false
```
