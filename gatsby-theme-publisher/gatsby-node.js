const fs = require('fs')
const createPosts = require(`./create/createPosts`)
const createPages = require(`./create/createPages`)
const createCategories = require(`./create/createCategories`)
const createTags = require(`./create/createTags`)
const createUsers = require(`./create/createUsers`)
const themeOptions = require(`./src/utils/ThemeOptions`)

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  /**
   * Merged default theme settings and user settings.
   */
  const mergedOptions = {
    ...themeOptions,
    ...options,
  }

  await createPosts({ actions, graphql }, mergedOptions)
  await createCategories({ actions, graphql })
  await createTags({ actions, graphql })
  await createUsers({ actions, graphql })
  await createPages({ actions, graphql, reporter }, mergedOptions)
}

// Pull featured images into the project statically to serve them with gatsby-image
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}


exports.onPreBootstrap = async ({ reporter }, options) => {
  if (fs.existsSync('src/images')) return

  fs.mkdir('src/images', { recursive: true }, err => {
    if (err) reporter.warn('Directory creation failed. Please create "./src/images" and restart Gatsby.')
  });
}
