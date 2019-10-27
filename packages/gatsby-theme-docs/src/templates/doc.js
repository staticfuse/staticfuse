import React from 'react';
import { graphql } from 'gatsby';
import { Global } from '@emotion/core';
import { Box, Grid } from '@chakra-ui/core';
import Toc from '../components/Toc';
import DocsLayout from '../layouts/DocLayout';
import TitleHeader from '../components/TitleHeader';

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

      <Grid templateColumns="270px auto" gap={6}>
        <Box>
          <TitleHeader />
          <Toc currentSlug={props.pageContext.slug} />
        </Box>

        <Box h="auto" overflow="hidden">
          <h1>{post.frontmatter.title}</h1>
          <Box dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </Grid>

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
