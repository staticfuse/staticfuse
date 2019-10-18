import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      publisherMenu {
        nodes {
          isExternal
          label
          url
          childItems {
            nodes {
              isExternal
              label
              url
            }
          }
        }
      }
    }
  `);

  return data.publisherMenu.nodes;
};
