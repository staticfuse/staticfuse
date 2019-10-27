const fs = require('fs');
const crypto = require('crypto');

const markdown = require.resolve(`${__dirname}/bootstrap/getting-started.md`);
const toc = require.resolve(`${__dirname}/bootstrap/TOC.yml`);
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = require.resolve('./src/templates/doc.js');
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `docs${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({
  node, actions, getNode, createNodeId,
}) => {
  const { createNodeField, createNode } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }

  if (node.internal.type !== 'TocYaml') {
    return;
  }

  const fieldData = {
    label: node.label,
    isHeader: node.isHeader,
    path: node.path,
    childItems: node.childItems || null,
  };

  createNode({
    id: createNodeId(`${node.id} >>> StaticFuseDocToc`),
    ...fieldData,
    parent: node.id,
    children: [],
    internal: {
      type: 'StaticFuseDocToc',
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(fieldData))
        .digest('hex'),
      content: JSON.stringify(fieldData), // optional
      description: 'StaticFuseDocToc: "implements the DocAsideItem interface for Docs Menu"', // optional
    },
  });
};

const mkdir = (dir) => new Promise(((resolve, reject) => {
  if (fs.existsSync(dir)) {
    return resolve();
  }

  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });

  return true;
}));

const copy = (file, dest) => new Promise(((resolve, reject) => {
  if (fs.existsSync(dest)) {
    return resolve();
  }

  fs.copyFile(file, dest, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });

  return true;
}));

/**
 * Create directories needed for docs theme.
 */
exports.onPreBootstrap = async () => {
  await mkdir('content/docs');
  await mkdir('content/assets');
  await mkdir('config');
  await copy(markdown, 'content/docs/getting-started.md');
  await copy(toc, 'config/TOC.yml');
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  interface DocAsideItem @nodeInterface {
    id: ID!
    label: String!
    isHeader: Boolean!
    path: String!
  }
  type StaticFuseDocToc implements Node & DocAsideItem
    @childOf(types: ["allTocYaml"]) {
    id: ID!
    label: String!
    isHeader: Boolean!
    path: String!
    childItems: [StaticFuseDocToc]
  }
  `;

  createTypes(typeDefs);
};
