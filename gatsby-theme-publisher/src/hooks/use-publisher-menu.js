import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          publisherMenuConfig {
            href
            isExternal
            label
          }
        }
      }
    }
  `);

  return data.site.siteMetadata.publisherMenuConfig;
};
