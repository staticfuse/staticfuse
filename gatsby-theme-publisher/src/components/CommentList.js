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
        children {
          nodes {
            ...CommentFields
            children {
              nodes {
                ...CommentFields
              }
            }
          }
        }
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
          <Box
            as="ol"
            className="comment-list"
            listStyleType="none"
            m="0"
            p="0"
          >
            {data.comments.nodes.map(comment => (
              <div className="comment-thread" key={comment.id}>
                <Comment
                  commentId={comment.id}
                  date={comment.date}
                  authorName={comment.author.name}
                  authorUrl={comment.author.url}
                >
                  {comment.content}
                </Comment>
                
                {comment.children.nodes &&
                  comment.children.nodes.map(reply => (
                    <Box ml={6} key={reply.id}>
                      <Comment
                        replyId={reply.id}
                        date={reply.date}
                        authorName={reply.author.name}
                        authorUrl={reply.author.url}
                      >
                        {reply.content}
                      </Comment>
                      {/* TODO: could handle this threading better */}
                      {reply.children && reply.children.nodes &&
                        reply.children.nodes.map(replyReply => (
                          <Box ml={6} key={replyReply.id}>
                            <Comment
                              replyId={replyReply.id}
                              date={replyReply.date}
                              authorName={replyReply.author.name}
                              authorUrl={replyReply.author.url}
                            >
                              {replyReply.content}
                            </Comment>
                          </Box>
                        ))}

                    </Box>
                  ))}
              </div>
            ))}
          </Box>
        )
      }}
    </Query>
  </>
)

export default CommentList
