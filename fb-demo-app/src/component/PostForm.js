import React, { Component } from "react";
import "../css/App-Content.css";

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "content",
			image: "",
			private: false
		};

		this.change = this.change.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	addImage = e => {
		const file = e.target.files[0];
		this.setState({ image: file });
	};
	change(e) {
		this.setState({ content: e.target.value });
	}
	handleClick() {
		const post = new FormData();
		post.append("content", this.state.content);
		post.append("private", this.state.private);
		post.append("image", this.state.image, this.state.image.name);
		this.props.addPost(post);
		window.location.reload();
	}
	changePrivacy = () => {
		this.setState({ private: !this.state.private });
	};
	render() {
		return (
			<div className="App-Add-Post">
				<textarea
					className="App-Text-Area"
					placeholder="click to add post....."
					onChange={this.change}
					name="content"
				/>
				<div className="App-Button-Group ">
					<input
						style={{ display: "none" }}
						type="file"
						onChange={this.addImage}
						ref={fileInput => (this.fileInput = fileInput)}
					/>
					<button
						className="ml-3 btn btn-primary"
						onClick={e => this.fileInput.click()}
					>
						Add Image
					</button>
					<div className="ml-3 mb-1 mt-1 mr-5 btn btn-sm bg-light custom-control custom-switch">
						<input
							type="checkbox"
							name="privacy"
							onChange={this.changePrivacy}
							className="custom-control-input m-0 p-0"
							id="customSwitch1"
						/>
						<label
							className="custom-control-label font-light m-0 p-0"
							htmlFor="customSwitch1"
						>
							Private
						</label>
					</div>
					<button
						className="ml-3 btn btn-primary"
						type="submit"
						onClick={this.handleClick}
					>
						Upload
					</button>
				</div>
			</div>
		);
	}
}
export default PostForm;
