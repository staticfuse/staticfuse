import React from "react"
import { Link } from "gatsby"
import { Heading } from "@chakra-ui/core"

const PostEntryTitle = ({ post, location, titleClass }) => (
  <>
    {location === "single" ? (
      <Heading
        as="h1"  
        mb={2}
        className={titleClass}
        dangerouslySetInnerHTML=
        {{
          __html: post.title,
        }}
        >
      </Heading>
    ) : (
      <Heading className={titleClass} mb={4} fontWeight="500">
        <Link
          to={`/${post.uri}`}
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
        ></Link>
      </Heading>
    )}
  </>
)

export default PostEntryTitle
