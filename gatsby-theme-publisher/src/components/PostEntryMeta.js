import React from "react"
import moment from "moment/moment"
import { Link } from "gatsby"
import { Avatar, Tag, Box } from "@chakra-ui/core"

const PostEntryMeta = ({ post, location = "" }) => (
  <Box
    className="entry-meta"
    overflow="hidden"
    marginBottom="25px"
    marginTop="25px"
  >
    <div className="tags" style={{ float:'right' }}>
      {post.categories && location === "blog"
        ? post.categories.nodes.map(category => (
            <Tag
              key={category.id}
              className="taxonomy"
              marginLeft="5px"
              float="right"
              color="muted"
              fontSize="sm"
            >
              {category.name}
            </Tag>
          ))
        : null}
    </div>

    <Box as="div" color="gray.600" fontSize="sm" pt={1} className="author-meta">
      <Avatar
        src={post.author.avatar ? post.author.avatar.url : ""}
        alt="Author avatar"
        style={{
          float: 'left',
          marginRight: '10px'
        }}
      />
      <p className="author-name" style={{marginBottom:"0"}}>
        <Link
          to={`/author/${post.author.slug}`}
          style={{
            color: "#999",
          }}
        >
          {`  ${post.author.name}`}
        </Link>
      </p>
      <p className="post-date">
        <Link
          to={`/${post.uri}`}
          style={{
            color: "#999",
          }}
        >
          <time className="entry-date" dateTime={post.date}>
            {moment(post.date).format(`MMMM D, YYYY`)}
          </time>
        </Link>
      </p>
    </Box>
  </Box>
)

export default PostEntryMeta
