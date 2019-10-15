import React from 'react';
import ShareIcons from './ShareIcons';
import NextPost from './NextPost';
import { Box, Flex } from '@chakra-ui/core';

const BelowPost = ({ post }) => {

  return (
      <Box
        id="below-post"
        mt={8}
        borderTop='1px solid #eee'
        py={4}
      >
        <Flex justify='space-between' w='100%'>
          <ShareIcons post={post} />
          <NextPost post={post} />
        </Flex>
      </Box>
  );
};

export default BelowPost;
