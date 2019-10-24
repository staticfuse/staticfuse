import React from 'react';
import { graphql } from 'gatsby';
import { Global } from '@emotion/core';
import { Box, Grid } from '@chakra-ui/core';
import Toc from '../components/Toc';
import DocsLayout from '../layouts/DocLayout';

const Doc = (props) => {
  const post = props.data.markdownRemark;

  return (
    <DocsLayout>
      <Global
        styles={{
          code: {
            display: 'inline',
          },
          'pre code': {
            display: 'block',
          },
        }}
      />
      <Box>
        <Grid templateColumns="300px auto" gap={6}>
          <Box w="100%" h="100%">
            <Toc />
          </Box>
          <Box w="100%" h="auto">
            <h1>{post.frontmatter.title}</h1>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </Box>
        </Grid>
      </Box>
    </DocsLayout>
  );
};

export default Doc;

export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
