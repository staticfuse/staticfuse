import React from "react"
import { Link } from "gatsby"

import useSiteMetadata from "../../hooks/use-site-metadata"
import Layout from "../../components/Layout"
import PostEntryMeta from "../../components/PostEntryMeta"
import PostEntryTitle from "../../components/PostEntryTitle"
import PostEntryMedia from "../../components/PostEntryMedia"
import EngagementBar from "../../components/EngagementBar"
import SEO from "../../components/SEO"
import BlogOptin from "../../components/BlogOptin"
import CommentList from "../../components/CommentList"
import CommentForm from "../../components/CommentForm"
import { Box, Tag, Flex } from "@chakra-ui/core"

const renderTermNodes = (nodes, termType) => (
  <div className="taxonomy-links">
    {nodes.map(term => (
      <Tag mr={2} color="gray.500" key={term.id}>
        <Link key={term.id} to={`/${termType}/${term.slug}`}>
          {term.name}
        </Link>
      </Tag>
    ))}
  </div>
)

const syntaxHighlighter = content => {
  var regex = /\[javascript\]|\[php\]|\[html\]|\[css\]/g

  var regex2 = /\[\/javascript\]|\[\/php\]|\[\/html\]|\[\/css\]/gi

  return {
    __html: content
      .replace(
        regex,
        '<pre class="bg-gray-900 text-gray-100 text-wrap overflow-scroll rounded p-4 font-mono">'
      )
      .replace(regex2, "</pre>"),
  }
}

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <>
    {categoryNodes ? renderTermNodes(categoryNodes, "category") : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, "tag") : null}
  </>
)

const Post = ({ pageContext: post }) => {
  const { mailChimpEndpoint } = useSiteMetadata()
  console.log(typeof mailChimpEndpoint)

  return (
    <Layout>
      <SEO title={`${post.title}`} />
      <div className="post-wrapper single-post">
        <Box
          as="header"
          maxW="2xl"
          m="auto"
          mb={6}
          mt={10}
          className="entry-header"
        >
          <PostEntryTitle
            location="single"
            post={post}
            titleClass="entry-title"
          />

          <PostEntryMeta post={post} />
        </Box>

        {post.featuredImage && (
          <PostEntryMedia post={post} location="single" />
        )}

        <Box
          maxW="2xl"
          m="auto"
          className="entry-content"
          dangerouslySetInnerHTML={syntaxHighlighter(post.content)}
        />
        <Box as="footer" className="entry-footer" maxW="2xl" m="auto">
          {!!mailChimpEndpoint && <BlogOptin />}

          <Flex className="entry-footer__taxonomy" justify="end" align="center">
            {post.categories.nodes.length || post.tags.nodes.length
              ? renderTerms(post.categories.nodes, post.tags.nodes)
              : null}
          </Flex>

          <EngagementBar post={post} />

          <CommentList postId={post.postId} />

          <CommentForm postID={post.postId} />
        </Box>
      </div>
    </Layout>
  )
}

export default Post
