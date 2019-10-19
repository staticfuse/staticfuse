const { log } = require('./utils');
const { BlogPreviewFragment } = require('../src/templates/posts/data.js');

const categoryTemplate = require.resolve(
  '../src/templates/categories/archive.js',
);

module.exports = async ({ actions, graphql }) => {
  const GET_CATEGORIES = `
    query GET_CATEGORIES($first: Int) {
      wpgraphql {
        categories(first: $first) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            name
            categoryId
            slug
            posts {
              nodes {
                ...BlogPreviewFragment
              }
            }
          }
        }
      }
    }
    ${BlogPreviewFragment}
  `;
  const { createPage } = actions;
  const allCategories = [];
  const fetchCategories = async (variables) => graphql(GET_CATEGORIES, variables).then(({ data }) => {
    const {
      wpgraphql: {
        categories: {
          nodes,
          pageInfo: { hasNextPage, endCursor },
        },
      },
    } = data;
    nodes.map((category) => {
      allCategories.push(category);
    });
    if (hasNextPage) {
      return fetchCategories({ first: 100, after: endCursor });
    }
    return allCategories;
  });

  await fetchCategories({ first: 100, after: null }).then((categories) => {
    categories.map((category) => {
      createPage({
        path: `/category/${category.slug}`,
        component: categoryTemplate,
        context: {
          ...category,
        },
      });
      log('created category', '#02f56b', `$${category.slug}`);
    });
    log('CATEGORY TOTAL', '#d200d9', `${categories.length}`, true);
    return true;
  });
};
