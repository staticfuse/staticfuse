import React from 'react';
import { Link } from 'gatsby';
import { Heading } from '@chakra-ui/core';
import usePublisherOptions from '../hooks/use-publisher-options';

const PostEntryTitle = ({ post, location, titleClass }) => {
  const { blogURI } = usePublisherOptions();
  return (
    <>
      {location === 'single' ? (
        <Heading
          as="h1"
          mb={2}
          fontWeight="500"
          className={titleClass}
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
         />
      ) : (
        <Heading className={titleClass} mb={4} fontWeight="500" fontSize={location === 'grid' ? 'lg' : ''}>
          <Link
            to={`${blogURI}/${post.uri}/`}
            dangerouslySetInnerHTML={{
              __html: post.title,
            }}
           />
        </Heading>
      )}
    </>
  );
};

export default PostEntryTitle;
