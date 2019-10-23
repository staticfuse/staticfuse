import React from 'react';
import { graphql } from 'gatsby';
import Toc from '../components/Toc';

const Doc = (props) => {
  const post = props.data.markdownRemark;

  return (
    <article>
      <h3>Documentation</h3>
      <Toc />
      <h1>
        {post.frontmatter.title}
      </h1>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
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
