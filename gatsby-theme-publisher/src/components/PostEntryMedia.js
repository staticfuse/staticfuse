import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Box } from '@chakra-ui/core';
import usePublisherOptions from '../hooks/use-publisher-options';

const WithLink = ({
 post, location, uri, children 
}) => (location === "single" ? (
    children
  ) : (
    <Link className="post-thumbnail" to={uri} aria-hidden="true">
      {children}
    </Link>
  ));

const PostEntryMedia = ({ post, location, classes = '' }) => {
  const { blogURI } = usePublisherOptions();
  return (
    <Box
    className={'entry-media ' + classes}
    m="auto"
    mb={4}
    width="100%"
    maxW="5xl"
    maxH="500px"
    overflow="hidden"
  >
    <WithLink location={location} post={post} uri={`${blogURI}/${post.uri}/`}>
      <div
        className="entry-media__figure-wrapper"
        style={{ maxWidth: 1736 }}
      >
        {/* {JSON.stringify(post, null, 2)} */}
        <Img
          fluid={post.featuredImage.imageFile.childImageSharp.fluid}
          alt={post.title}
        />
      </div>
    </WithLink>
  </Box>
  )
 ;};

export default PostEntryMedia;
