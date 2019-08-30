import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { FaLongArrowAltRight } from "react-icons/fa"

const POSTS_QUERY = graphql`
  query GET_POSTS {
    wpgraphql {
      posts(first: 10000000) {
        nodes {
          title
          id
          uri
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`

const findNextPost = (post, data) => {
  const posts = data.wpgraphql.posts.nodes
  const currentPostIndex = posts.findIndex(item => item.id === post.id)
  return posts[currentPostIndex + 1]
}

const NextPost = ({ post }) => (
  <StaticQuery
    query={POSTS_QUERY}
    render={data => {
      const nextPost = findNextPost(post, data)

      return (
        <div className="flex items-center justify-end relative w-3/4">
          {nextPost && nextPost.featuredImage && (
            <div className="thumbnail mr-2">
              <img
                src={nextPost.featuredImage.sourceUrl}
                alt={nextPost.title}
                className="next-post-featured-image block w-12 mr-2"
              />
            </div>
          )}

          <div className="site-minibar__right-content justify-end">
            {nextPost && (
              <>
                <p className="mb-1 text-sm text-gray-600">
                  Up Next
                </p>

                <Link
                  to={`/${nextPost.uri}`}
                  rel="bookmark"
                  title={nextPost.title}
                >
                  <h5><span dangerouslySetInnerHTML={{
            __html: nextPost.title,
          }} /><FaLongArrowAltRight className="inline-block" /></h5>
                </Link>
              </>
            )}
          </div>
        </div>
      )
    }}
  />
)

export default NextPost
