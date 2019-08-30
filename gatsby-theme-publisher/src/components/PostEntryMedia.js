import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const WithLink = ({ post, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link
      className="post-thumbnail"
      to={`/${post.uri}`}
      aria-hidden="true"
    >
      {children}
    </Link>
  )

const PostEntryMedia = ({ post, location, classes = '' }) => (
  <div className={ 'entry-media m-auto mb-4 w-full max-w-5xl ' + classes}>
    <WithLink location={location} post={post}>
      <div
        className="entry-media__figure-wrapper mt-6 mb-10"
        style={{ maxWidth: 1736 }}
      >
      {/* {JSON.stringify(post, null, 2)} */}
        <Img fluid={post.featuredImage.imageFile.childImageSharp.fluid} className="shadow-2xl" alt={post.title} />

      </div>
    </WithLink>
  </div>
)

export default PostEntryMedia
