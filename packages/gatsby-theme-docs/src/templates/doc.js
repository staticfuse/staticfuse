import React from "react";
import { graphql } from "gatsby";
import { Global } from "@emotion/core";
import { Box } from "@chakra-ui/core";
import Toc from "../components/Toc";
import DocsLayout from "../layouts/DocLayout";
import TitleHeader from "../components/TitleHeader";

const Doc = props => {
  const post = props.data.markdownRemark;

  return (
    <DocsLayout>
      <Global
        styles={{
          code: {
            display: "inline"
          },
          "pre code": {
            display: "block"
          }
        }}
      />

      <Box display={["block","block", "flex"]} className="docs-column-wrap">
        <Box p={4} w={["100%", "100%", "30%"]} overflow="hidden">
          <TitleHeader />
          <Toc currentSlug={props.pageContext.slug} />
        </Box>

        <Box h="auto" w={["100%", "100%", "70%"]} overflow="hidden" p={4}>
          <h1>{post.frontmatter.title}</h1>
          <Box dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
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
