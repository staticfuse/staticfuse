import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {
  Textarea, Input, Button, Box,
} from '@chakra-ui/core';

const commentSubmitQuery = gql`
  mutation(
    $author: String
    $commentOn: Int
    $content: String
    $authorEmail: String
  ) {
    createComment(
      input: {
        clientMutationId: "CreateComment"
        author: $author
        commentOn: $commentOn
        content: $content
        authorEmail: $authorEmail
      }
    ) {
      success
    }
  }
`;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentStatus: false,
      post: props.postID,
      comment: '',
      author: '',
      email: '',
      url: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  renderCommentNotes() {
    return (
      <Box as="p" className="comment-notes" color="gray.600" fontSize="sm">
        <span id="email-notes">Your email address will not be published.</span>
        {' '}
        Required fields are marked
        {' '}
        <span className="required">*</span>
      </Box>
    );
  }

  renderCommentBodyField() {
    return (
      <div className="comment-textarea">
        <Box
          as="label"
          mt={2}
          mb={2}
          fontSize="sm"
          color="muted"
          htmlFor="comment"
          className="form-label"
        >
          Comment
        </Box>
        <Textarea
          id="comment"
          name="comment"
          cols="45"
          rows="5"
          maxLength="65525"
          required="required"
          value={this.state.comment}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }

  renderCommentAuthorField() {
    return (
      <div className="comment-author">
        <Box
          as="label"
          mt={2}
          mb={2}
          fontSize="sm"
          color="muted"
          htmlFor="author"
          className="form-label"
        >
          Name
          {' '}
          <span className="required">*</span>
        </Box>
        <Input
          id="author"
          name="author"
          type="text"
          py={2}
          px={3}
          color="gray.700"
          required="required"
          value={this.state.author}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }

  renderCommentEmailField() {
    return (
      <div className="comment-form-email">
        <Box
          as="label"
          mt={2}
          mb={2}
          fontSize="sm"
          color="muted"
          htmlFor="email"
          className="form-label"
        >
          Email
          {' '}
          <span className="required">*</span>
        </Box>
        <Input
          id="email"
          name="email"
          type="email"
          py={2}
          px={3}
          color="gray.700"
          aria-describedby="email-notes"
          required="required"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }

  renderCommentWebsiteField() {
    return (
      <div className="comment-form-url">
        <Box
          as="label"
          mt={2}
          mb={2}
          fontSize="sm"
          color="muted"
          htmlFor="url"
          className="form-label"
        >
          Website
        </Box>
        <Input
          id="url"
          py={2}
          px={3}
          color="gray.700"
          name="url"
          type="url"
          value={this.state.url}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }

  renderCommentSubmitButton() {
    return (
      <Box as="p" mt={4} className="form-submit">
        <Button
          variantColor="blue"
          name="submit"
          type="submit"
          id="submit"
          className="comment-form-submit"
        >
          Post Comment
        </Button>
      </Box>
    );
  }

  render() {
    switch (this.state.commentStatus) {
      case 'success':
        return <p>Your comment has been successfully submitted.</p>;
      case 'loading':
        return <p>Please wait. Your comment is being submitted.</p>;
      case 'error':
        return (
          <p>There was an error in your submission. Please try again later.</p>
        );
      default:
        return (
          <div className="comment-form-flex">
            <div id="respond" className="comment-respond">
              <h3 id="reply-title" className="comment-reply-title">
                <small>
                  <a
                    rel="nofollow"
                    id="cancel-comment-reply-link"
                    href="#respond"
                    style={{ display: 'none' }}
                  >
                    Cancel reply
                  </a>
                </small>
              </h3>
              <Mutation
                mutation={commentSubmitQuery}
                onCompleted={() => {
                  this.setState({ commentStatus: 'success' });
                }}
                onError={() => {
                  this.setState({ commentStatus: 'error' });
                }}
              >
                {(addComment) => (
                  <div>
                    <h4>Leave a comment</h4>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        this.setState({ commentStatus: 'loading' });
                        addComment({
                          variables: {
                            author: this.state.author,
                            commentOn: this.state.post,
                            content: this.state.comment,
                            authorEmail: this.state.email,
                          },
                        });
                      }}
                      id="commentform"
                      className="comment-form"
                      noValidate
                    >
                      {this.renderCommentNotes()}

                      {this.renderCommentBodyField()}
                      {this.renderCommentAuthorField()}
                      {this.renderCommentEmailField()}
                      {this.renderCommentWebsiteField()}
                      {this.renderCommentSubmitButton()}
                    </form>
                  </div>
                )}
              </Mutation>
            </div>
          </div>
        );
    }
  }
}

export default CommentForm;
