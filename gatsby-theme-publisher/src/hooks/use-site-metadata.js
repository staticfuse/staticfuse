import { graphql, useStaticQuery } from "gatsby"
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
        }
      }
    }
  `)
  return data.site.siteMetadata
}
