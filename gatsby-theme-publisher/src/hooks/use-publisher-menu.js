import { graphql, useStaticQuery } from "gatsby"
export default () => {
  const data = useStaticQuery(graphql`
    {
      allSitePage(filter: {context: {publisher: {eq: true}}}) {
        edges {
          node {
            id
            path
            context {
              label
            }
          }
        }
      }
    }
  `)
  return data.allSitePage.edges
}
