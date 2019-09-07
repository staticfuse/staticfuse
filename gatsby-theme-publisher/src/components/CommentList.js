import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Comment from "./Comment"
import { Box } from "@chakra-ui/core"

const commentQuery = gql`
  query($postId: ID!) {
    comments(where: { contentId: $postId }) {
      nodes {
        ...CommentFields
      }
    }
  }

  fragment CommentFields on Comment {
    id
    date
    approved
    content
    author {
      ...AuthorFields
    }
  }

  fragment AuthorFields on CommentAuthor {
    name
    url
  }
`

const CommentList = ({ postId, comments }) => (
  <>
    <Query query={commentQuery} variables={{ postId }}>
      {({ loading, error, data }) => {
        if (loading) return `Loading comments...`
        if (error) return `Error loading comments...`

        return (
          <Box as="ol" className="comment-list" listStyleType="none" m="0" p="0">
            {data.comments.nodes.map(comment => (
              <Comment
                key={comment.id}
                commentId={comment.id}
                date={comment.date}
                authorName={comment.author.name}
                authorUrl={comment.author.url}
              >
                {comment.content}
              </Comment>
            ))}
          </Box>
        )
      }}
    </Query>
  </>
)

export default CommentList
