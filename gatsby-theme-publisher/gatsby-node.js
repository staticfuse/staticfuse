const fs = require('fs');
const { createRemoteFileNode } = require('gatsby-source-filesystem');
const createPosts = require('./create/createPosts');
const createPages = require('./create/createPages');
const createCategories = require('./create/createCategories');
const createTags = require('./create/createTags');
const createUsers = require('./create/createUsers');
const themeOptions = require('./src/utils/ThemeOptions');

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  /**
   * Merged default theme settings and user settings.
   */
  const mergedOptions = {
    ...themeOptions,
    ...options,
  };

  await createPosts({ actions, graphql }, mergedOptions);
  await createCategories({ actions, graphql });
  await createTags({ actions, graphql });
  await createUsers({ actions, graphql });
  await createPages({ actions, graphql, reporter }, mergedOptions);
};

// Pull featured images into the project statically to serve them with gatsby-image
exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;
  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: 'File',
        resolve(source) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
    Query: {
      publisherMenu: {
        type: 'PublisherMenu',
        resolve(source, args, context, info) {
          const site = context.nodeModel.getAllNodes({
            type: 'Site',
          });
          const menu = site[0].siteMetadata.publisherMenuConfig;

          /**
           * Normalize object shape to match that of the WP menu.
           */
          const newMenu = menu.map((menuItem) => {
            const newMenuItem = { ...menuItem };
            const childItems = menuItem.childItems ? menuItem.childItems : [];
            newMenuItem.childItems = { nodes: childItems };
            return newMenuItem;
          });

          return {
            nodes: newMenu,
          };
        },
      },
    },
  });
};

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions;
  createTypes([
    schema.buildObjectType({
      name: 'PublisherMenuItem',
      fields: {
        url: 'String!',
        label: 'String!',
        isExternal: 'Boolean!',
        childItems: 'PublisherMenu',
      },
    }),
    schema.buildObjectType({
      name: 'PublisherMenu',
      fields: {
        nodes: '[PublisherMenuItem]',
      },
    }),
  ]);
};

exports.onPreBootstrap = async ({ reporter }) => {
  if (fs.existsSync('src/images')) return;

  fs.mkdir('src/images', { recursive: true }, (err) => {
    if (err) reporter.warn('Directory creation failed. Please create "./src/images" and restart Gatsby.');
  });
};
