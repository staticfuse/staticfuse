import React from "react"
import { Link } from "gatsby"
import { Heading } from "@chakra-ui/core"
import useSiteMetadata from "../hooks/use-site-metadata"

const PostEntryTitle = ({ post, location, titleClass }) => {
  const { blogURI } = useSiteMetadata()
  return (
    <>
      {location === "single" ? (
        <Heading
          as="h1"
          mb={2}
          fontWeight="500"
          className={titleClass}
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
        ></Heading>
      ) : (
        <Heading className={titleClass} mb={4} fontWeight="500" fontSize={ location === "grid" ? "lg" : "" }>
          <Link
            to={`${blogURI}/${post.uri}/`}
            dangerouslySetInnerHTML={{
              __html: post.title,
            }}
          ></Link>
        </Heading>
      )}
    </>
  )
}

export default PostEntryTitle
