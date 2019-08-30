import React, { Component } from 'react';
import moment from 'moment/moment'

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
			<li key={this.state.commentId} id={'comment-' + this.state.commentId} className="comment bg-gray-100 rounded border p-4 mb-6">
				<article id="div-comment-{this.state.commentId}" className="comment-body">
					<footer className="comment-meta">
						<div className="comment-author vcard">
							<a href={this.state.authorUrl} className="comment-author block mb-0 font-bold" rel="nofollow external">{this.state.authorName}{' '}
								<span className="screen-reader-text says">says:</span>
							</a>
						</div>
						<div className="comment-date block mb-2 text-gray-500 text-xs">{moment(this.state.date).format(`MMMM D, YYYY`)}</div>
						<div
							className="comment-content"
							dangerouslySetInnerHTML={{ __html: this.state.commentContent }}
						></div>
					</footer>
				</article>
			</li>
		);
	}
}

export default Comment;