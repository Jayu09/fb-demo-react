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
					<fieldset className="row mb-3 bg-light rounded">
						<div className=" bg-light mx-4 mt-2">
							<div className="row border rounded my-1 pl-1">
								<img
									height="30vh"
									width="30vh"
									src={"/images/" + post.authorImage}
									alt="notification"
									className="rounded-circle overflow-hidden"
								/>
								<p className="mx-2" >{post.authorName}</p>
							</div>
							<blockquote className="blockquote text-center m-2 p-2 border rounded">
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
			<div className="align-self-center container mt-3 App-TimeLine overflow-auto">
				{Items}
			</div>
		);
	}
}
