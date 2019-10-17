import React from 'react'
import { Box, Flex } from '@chakra-ui/core'

const ShareIcons = ({ post }) => {
  const shareServices = [
    {
      name: 'Twitter',
      url: `http://twitter.com/share?text=${post.title} —&amp;url=${post.link}`,
      icon: '',
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${
        post.link
      }&amp;title=${post.title}&amp;picture=%20${post.featuredImage &&
        post.featuredImage.sourceUrl}`,
      icon: '',
    },
  ]
  return (
    <div>
      <Box as="p" fontSize="sm" color="muted" mb={1}>
        Share
      </Box>
      <Flex justify="start">
        {shareServices &&
          shareServices.map(share => (
            <Box
              key={share.name}
              as="button"
              marginRight={2}
              rounded="md"
              p={2}
              className="share-icon"
              bg="buttonBg"
              color="buttonText"
              fontSize="xs"
              onClick={ () => window.open(share.url ) }
              target="_blank"
              rel="noopener noreferrer"
            >
              {share.name}
            </Box>
          ))}
      </Flex>
    </div>
  )
}

export default ShareIcons
