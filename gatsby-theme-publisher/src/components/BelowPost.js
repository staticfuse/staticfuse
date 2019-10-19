import React from 'react'
import ShareIcons from './ShareIcons'
import NextPost from './NextPost'
import { Box, Flex, Tag } from '@chakra-ui/core'
import BlogOptin from './BlogOptin'
import useSiteMetadata from '../hooks/use-site-metadata'
import { Link } from 'gatsby'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const renderTermNodes = (nodes, termType) => (
  <>
    {nodes.map(term => (
      <Tag mr={2} color="gray.500" key={term.id} mb={1}>
        <Link key={term.id} to={`/${termType}/${term.slug}`}>
          {term.name}
        </Link>
      </Tag>
    ))}
  </>
)

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <div className="taxonomy-links">
    {categoryNodes ? renderTermNodes(categoryNodes, 'category') : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, 'tag') : null}
  </div>
)

const BelowPost = ({ post }) => {
  const { mailChimpEndpoint } = useSiteMetadata()

  return (
    <Box as="footer" className="entry-footer" maxW="2xl" m="auto">
      <Box px={4} py={6} rounded="lg" bg="optinBg">
        {!!mailChimpEndpoint && <BlogOptin />}
      </Box>

      <Flex
        className="entry-footer__taxonomy"
        justify="end"
        align="center"
        mt={4}
      >
        {post.categories.nodes.length || post.tags.nodes.length
          ? renderTerms(post.categories.nodes, post.tags.nodes)
          : null}
      </Flex>

      <Box id="post-footer-meta" mt={8} borderTop="1px solid #eee" py={4}>
        <Flex justify="space-between" w="100%">
          <ShareIcons post={post} />
          <NextPost post={post} />
        </Flex>
      </Box>

      <CommentList postId={post.postId} />

      <CommentForm postID={post.postId} />
    </Box>
  )
}

export default BelowPost
