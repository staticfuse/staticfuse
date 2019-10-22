import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Box, Text } from '@chakra-ui/core';
import BackgroundImage from 'gatsby-background-image'
import PostEntryTitle from './PostEntryTitle'
import PostEntryMeta from './PostEntryMeta'
import usePublisherOptions from '../hooks/use-publisher-options';
import Logo from './Logo';

const PostGrid = (props) => {
  const { blogURI } = usePublisherOptions();

  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        posts(first: 20) {
          nodes {
            id
            postId
            title
            uri
            date
            slug
            excerpt
            featuredImage {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
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
              avatar(size: 50) {
                url
              }
              slug
            }
          }
        }
      }
    }
  `);

  // remove link because it doesn't have the right url
  const filterExcerpt = (excerpt) => excerpt.replace(/<a\b[^>]*>(.*?)<\/a>/i,"");

  const width = props.width || '250px';
  const limit = props.limit || 10;

  const posts = data.wpgraphql.posts.nodes.slice(0, limit);

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(auto-fill, minmax(${width}, 1fr))`}
      gridGap="20px"
      className="post-grid"
      p={props.noPadding ? '0' : 8}
    >
      {posts && posts.length
        ? posts.map((post, index) => (
          <Box key={post.postId} gridColumn={props.featured && index === 0 ? '1 / -1' : ''}>
              { !props.noImage
              ? <Link className="post-thumbnail" to={`${blogURI}/${post.uri}/`}>
                {post.featuredImage ? (
                  <BackgroundImage
                    fluid={post.featuredImage.imageFile.childImageSharp.fluid}
                    style={{
                      height: props.featured && index === 0 ? '350px' : '200px',
                      width: props.featured && index === 0 && window.innerWidth > 768 ? '50%' : '100%',
                      marginBottom: '1.5rem',
                      backgroundColor: '#eee',
                      float: props.featured && index === 0 ? 'left' : 'none',
                      marginRight: props.featured && index === 0 ? '20px' : '0',
                    }}
                  />
                ) : (
                  <Box
                    display="flex"
                    alignItems="center"
                    bg="gray.50"
                    rounded="sm"
                    w="100%"
                    h="200px"
                    mb={4}
                  >
                    <Box m="auto" opacity=".5">
                      <Logo noLink />
                    </Box>
                  </Box>
                )}
              </Link>
              : null }
              <header className="entry-header">
                <PostEntryTitle
                  post={post}
                  location={props.featured && index === 0 ? 'blog' : 'grid'}
                  titleClass="entry-title"
                />
              </header>

              {props.excerpt || (props.featured && index === 0) ? (
                <Text
                  className="entry-content"
                  dangerouslySetInnerHTML={{
                    __html: filterExcerpt(post.excerpt),
                  }}
                />
              ) : null}

              {props.meta || (props.featured && index === 0) ? (
                <PostEntryMeta post={post} location="grid" />
              ) : null}
            </Box>
        ))
        : null}
    </Box>
  );
};

export default PostGrid;
