import React from 'react';
import moment from 'moment/moment';
import { Link } from 'gatsby';
import {
  Avatar, Tag, Box, Text,
} from '@chakra-ui/core';
import usePublisherOptions from '../hooks/use-publisher-options';

const PostEntryMeta = ({ post, location = '' }) => {
  const { blogURI } = usePublisherOptions();

  return (
    <Box
      className="entry-meta"
      overflow="hidden"
      marginBottom="25px"
      marginTop="25px"
    >
      <div className="tags" style={{ float: 'right' }}>
        {post.categories && location === 'blog'
          ? post.categories.nodes.map((category) => (
            <Tag
              key={category.id}
              className="taxonomy"
              marginLeft="5px"
              float="right"
              color="muted"
              fontSize="sm"
            >
              {category.name}
            </Tag>
          ))
          : null}
      </div>

      <Box as="div" color="gray.600" fontSize="sm" pt={1} className="author-meta">
        {post.author ? (
          <Avatar
            src={post.author.avatar ? post.author.avatar.url : ''}
            alt="Author avatar"
            style={{
              float: 'left',
              marginRight: '10px',
            }}
          />
        ) : null}

        {post.author ? (
          <Text className="author-name" mb="0">
            <Link
              to={`/author/${post.author.slug}`}
              style={{
                color: '#999',
              }}
            >
              {`  ${post.author.name}`}
            </Link>
          </Text>
        ) : null}

        <p className="post-date">
          <Link
            to={`${blogURI}/${post.uri}`}
            style={{
              color: '#999',
            }}
          >
            <time className="entry-date" dateTime={post.date}>
              {moment(post.date).format('MMMM D, YYYY')}
            </time>
          </Link>
        </p>
      </Box>
    </Box>
  );
};

export default PostEntryMeta;
