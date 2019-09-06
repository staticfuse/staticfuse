import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Textarea, Input } from '@chakra-ui/core';

const commentSubmitQuery = gql`
	mutation($author: String, $commentOn: Int, $content: String, $authorEmail: String) {
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
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	renderCommentNotes() {
		return (
			<p className="comment-notes text-sm text-gray-600">
				<span id="email-notes">Your email address will not be published.</span> Required fields are marked{' '}
				<span className="required">*</span>
			</p>
		);
	}

	renderCommentBodyField() {
		return (
            <div className="comment-textarea">
                <label htmlFor="comment" className="block text-gray-600 mt-2 text-sm mb-2">Comment</label>
                <Textarea
                    id="comment"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <label htmlFor="author" className="block text-gray-600 mt-2 text-sm mb-2">
                    Name <span className="required">*</span>
                </label>
                <Input
                    id="author"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="author"
                    type="text"
                    size="30"
                    maxLength="245"
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
				<label htmlFor="email" className="block text-gray-600 mt-2 text-sm mb-2">
					Email <span className="required">*</span>
				</label>
				<Input
                    id="email"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					name="email"
					type="email"
					size="30"
					maxLength="100"
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
				<label htmlFor="url" className="block text-gray-600 mt-2 text-sm mb-2">Website</label>
				<Input
                    id="url"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					name="url"
					type="url"
					size="30"
					maxLength="200"
					value={this.state.url}
					onChange={this.handleInputChange}
				/>
			</div>
		);
	}

	renderCommentSubmitButton() {
		return (
			<p className="form-submit mt-4">
				<Input name="submit" type="submit" id="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Post Comment" />
			</p>
		);
	}

	render() {
		switch (this.state.commentStatus) {
			case 'success':
				return <p>Your comment has been successfully submitted.</p>;
			case 'loading':
				return <p>Please wait. Your comment is being submitted.</p>;
			case 'error':
				return <p>There was an error in your submission. Please try again later.</p>;
			default:
				return (
					<div className="comment-form-flex">
						<span className="screen-reader-text">Leave a comment</span>
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
                                    <h4 className="mb-2">Leave a comment</h4>
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
										className="comment-form mb-4"
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