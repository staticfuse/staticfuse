import React from 'react';
import PostEntryTitle from './PostEntryTitle';
import PostEntryMeta from './PostEntryMeta';
import PostEntryMedia from './PostEntryMedia';
import useSiteMetadata from "../hooks/use-site-metadata"
import { Box, Text } from '@chakra-ui/core';

const PostEntry = ({ post, classes = '' }) => {

  const { wordPressUrl } = useSiteMetadata()

  const excerpt = post.excerpt
    ? post.excerpt.replace(wordPressUrl, '')
    : `${post.content &&
        post.content
          .split(' ')
          .slice(0, 30)
          .join(' ')} ...`;

  return (
    <Box my={4} overflow='hidden'>
      <div className="post-wrapper">
        <div className="post-inner">
          <header className="entry-header">
            <PostEntryTitle
              post={post}
              location="blog"
              titleClass="entry-title"
            />
          </header>

          {post.featuredImage && <PostEntryMedia post={post} location="blog" />}

          <Text
            className="entry-content"
            overflow="hidden"
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
        </div>
        <PostEntryMeta post={post} location="blog" />
      </div>
      </Box>
  );
};

export default PostEntry;
