const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    content
    link
    featuredImage {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(maxWidth: 1024) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
    categories {
      nodes {
        name
        slug
        id
        children {
          nodes {
            id
            name
            categoryId
            slug
          }
        }
      }
    }
    tags {
      nodes {
        slug
        name
        id
      }
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`

const BlogPreviewFragment = `
  fragment BlogPreviewFragment on WPGraphQL_Post {
    id
    postId
    title
    uri
    date
    slug
    excerpt
    content
    featuredImage {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(maxWidth: 1024) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.BlogPreviewFragment = BlogPreviewFragment
