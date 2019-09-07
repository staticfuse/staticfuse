import React from 'react';
import { Box, Flex, Icon } from '@chakra-ui/core';

const ShareIcons = ({ post }) => (
  <div>
  <Box as="p" fontSize='sm' color='muted' mb={1}>
      Share
  </Box>
  <Flex justify='start'>
    
    <a
      className="share-icon mr-4 text-xl"
      style={{ marginRight:'8px' }}
      href={`http://twitter.com/share?text=${post.title} —&amp;url=${
        post.link
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </a>

    <a
      className="share-icon text-xl"
      href={`https://www.facebook.com/sharer/sharer.php?u=${
        post.link
      }&amp;title=${post.title}&amp;picture=%20${post.featuredImage &&
        post.featuredImage.sourceUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>
  </Flex>
  </div>
);

export default ShareIcons;
