import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import HeaderArchive from "../../components/HeaderArchive"
import SEO from "../../components/SEO"
import { Box } from "@chakra-ui/core"

const AuthorArchive = props => {
  const {
    pageContext: { name, posts },
  } = props
  return (
    <Layout>
      <SEO
        title={`Author - ${name}`}
        description={`A collection of posts written by ${name}.`}
      />
      <Box maxW="2xl" m="auto">
        <HeaderArchive name={name} />

        {posts.nodes &&
          posts.nodes.map(post => {
            return <PostEntry key={post.id} post={post} />
          })}
      </Box>
    </Layout>
  )
}

export default AuthorArchive
