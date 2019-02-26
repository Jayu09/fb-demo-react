import React, { Component } from "react";
//import Show from "./Show";

export default class TimeLine extends Component {
	constructor(props) {
		super(props);
		this.state = { status: this.props.post };
	}
	completed = e => {
		this.props.markCompleted(e.target.value);
	};
	seened = e => {
		this.props.markSeen(e);
	};

	isShow = () => {
		if (this.props.type === "teacher") return true;
		else return false;
	};
	componentWillMount() {
		this.props.viewPosts();
	}

	render() {
		const Items = this.props.posts.map(post => (
			<ul key={post._id} className="list-unstyled">
				<li>
					<fieldset className="row mb-3 bg-light">
						<div className=" bg-light m-4">
							<blockquote className="blockquote text-center">
								{post.image ? (
									<img
										height="100vh"
										src={"/images/" + post.image}
										alt="notification"
									/>
								) : null}
								<p className="mb-0 App-Content">{post.content}</p>
							</blockquote>
						</div>
					</fieldset>
				</li>
			</ul>
		));
		return (
			<div className="align-self-center container App-TimeLine overflow-auto">
				{Items}
			</div>
		);
	}
}
