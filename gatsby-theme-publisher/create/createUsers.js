const { log } = require('./utils');
const { BlogPreviewFragment } = require('../src/templates/posts/data.js');

const userTemplate = require.resolve('../src/templates/users/archive.js');

module.exports = async ({ actions, graphql }) => {
  const GET_USERS = `
    query GET_USERS($first: Int) {
      wpgraphql {
        users(first: $first) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            id
            name
            userId
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
  const allUsers = [];
  const fetchUsers = async (variables) => await graphql(GET_USERS, variables).then(({ data }) => {
    const {
      wpgraphql: {
        users: {
          nodes,
          pageInfo: { hasNextPage, endCursor },
        },
      },
    } = data;
    nodes.map((user) => {
      allUsers.push(user);
    });
    if (hasNextPage) {
      return fetchUsers({ first: 100, after: endCursor });
    }
    return allUsers;
  });

  await fetchUsers({ first: 100, after: null }).then((allUsers) => {
    allUsers.map((user) => {
      createPage({
        path: `/author/${user.slug}`,
        component: userTemplate,
        context: user,
      });
      log('created user', '#02f56b', `${user.slug}`);
    });
    log('USER TOTAL', '#7300d1', `${allUsers.length}`, true);
  });
};
