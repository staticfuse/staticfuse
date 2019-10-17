import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          twitter
          siteUrl
          wordPressUrl
          menuName
          mailChimpEndpoint
          blogURI
          publisherMenuConfig {
            href
            isExternal
            label
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
