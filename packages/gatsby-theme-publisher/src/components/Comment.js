import React, { Component } from 'react';
import moment from 'moment/moment'
import { Box } from '@chakra-ui/core'

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.commentId,
			date: props.date,
			authorName: props.authorName,
			authorUrl: props.authorUrl,
			commentContent: props.children,
		};
	}

	render() {
		return (
			<Box as="li" key={this.state.commentId} id={'comment-' + this.state.commentId} bg="gray.50" border="1px solid" borderColor="gray.100" borderRadius="5px" p={4} mb={6} className="comment">
				<article id="div-comment-{this.state.commentId}" className="comment-body">
					<footer className="comment-meta">
						<div className="comment-author vcard">
							<a style={{ display: 'block', marginBottom: '0', fontWeight: '600'}} href={this.state.authorUrl} className="comment-author" rel="nofollow external">{this.state.authorName}{' '}
								<span className="screen-reader-text says">says:</span>
							</a>
						</div>
						<Box mb={2} color="muted" fontSize="sm" className="comment-date">{moment(this.state.date).format(`MMMM D, YYYY`)}</Box>
						<div
							className="comment-content"
							dangerouslySetInnerHTML={{ __html: this.state.commentContent }}
						></div>
					</footer>
				</article>
			</Box>
		);
	}
}

export default Comment;