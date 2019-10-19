import React from 'react'
import Layout from '../../components/Layout'
import PostEntryMeta from '../../components/PostEntryMeta'
import PostEntryTitle from '../../components/PostEntryTitle'
import PostEntryMedia from '../../components/PostEntryMedia'
import BelowPost from '../../components/BelowPost'
import SEO from '../../components/SEO'
import { Box } from '@chakra-ui/core'

const syntaxHighlighter = content => {
  var regex = /\[javascript\]|\[php\]|\[html\]|\[css\]/g

  var regex2 = /\[\/javascript\]|\[\/php\]|\[\/html\]|\[\/css\]/gi

  return {
    __html: content
      .replace(
        regex,
        '<code>'
      )
      .replace(regex2, '</code>'),
  }
}

const Post = ({ pageContext: post }) => {

  return (
    <Layout>
      <SEO title={`${post.title}`} />
      <div className="post-wrapper single-post">
        <Box
          as="header"
          maxW="2xl"
          m="auto"
          mb={6}
          mt={6}
          className="entry-header"
        >
          <PostEntryTitle
            location="single"
            post={post}
            titleClass="entry-title"
          />

          <PostEntryMeta post={post} />
        </Box>

        {post.featuredImage && <PostEntryMedia post={post} location="single" />}

        <Box
          maxW="2xl"
          m="auto"
          className="entry-content"
          overflow="hidden"
          dangerouslySetInnerHTML={syntaxHighlighter(post.content)}
        />

        <BelowPost post={post} />

      </div>
    </Layout>
  )
}

export default Post
