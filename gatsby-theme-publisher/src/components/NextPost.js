import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { Icon, Box, Flex } from '@chakra-ui/core'
import Img from 'gatsby-image'
import useSiteMetadata from '../hooks/use-site-metadata'

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
            imageFile {
              childImageSharp {
                fixed(height: 75) {
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  originalName
                }
              }
            }
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

const NextPost = ({ post }) => {
  const { blogURI } = useSiteMetadata()
  return (
    <StaticQuery
      query={POSTS_QUERY}
      render={data => {
        const nextPost = findNextPost(post, data)

        return (
          <Flex
            align="center"
            justifyContent="flex-end"
            position="relative"
            width="73%"
            ml="2%"
          >
            {nextPost && nextPost.featuredImage && (
              <div
                className="next-postthumbnail"
                style={{
                  maxWidth: '100%',
                  overflow: 'hidden',
                  marginRight: '10px',
                  height: 'auto',
                  maxHeight: '75px',
                  width: '100px',
                }}
              >
                <Img
                  fluid={nextPost.featuredImage.imageFile.childImageSharp.fixed}
                  alt={nextPost.title}
                  className="next-post-featured-image"
                />
              </div>
            )}

            <div className="site-minibar__right-content justify-end">
              {nextPost && (
                <>
                  <Box as="p" fontSize="sm" color="muted" mb={1}>
                    Up Next
                  </Box>

                  <Link
                    to={`${blogURI}/${nextPost.uri}`}
                    rel="bookmark"
                    title={nextPost.title}
                  >
                    <h5>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: nextPost.title,
                        }}
                      />
                      <Icon name="arrow-forward" />
                    </h5>
                  </Link>
                </>
              )}
            </div>
          </Flex>
        )
      }}
    />
  )
}

export default NextPost
