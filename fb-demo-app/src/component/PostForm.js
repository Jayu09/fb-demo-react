import React, { Component } from "react";
import "../css/App-Content.css";

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
			image: "",
			privacy: "public"
		};

		this.change = this.change.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	addImage = e => {
		const file = e.target.files[0];
		this.setState({ image: file });
	};
	change(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleClick() {
		if(this.state.content || this.state.image)
{		const post = new FormData();
		post.append("content", this.state.content);
		post.append("privacy", this.state.privacy);
		post.append("image", this.state.image, this.state.image.name);
		this.props.addPost(post);
			window.location.reload();
		}
		else {
			alert("Post Can not be null")
		}
	}
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
					<div className="input-group ">
						<select
							className="custom-select ml-3 mb-1 mt-1 mr-5  btn"
							name="privacy"
							id="inputGroup"
							onChange={this.change}
						>
							<option defaultValue>Public</option>
							<option value="friends">Friends</option>
							<option value="private">Private</option>
						</select>
					</div>
					<input
						style={{ display: "none" }}
						type="file"
						onChange={this.addImage}
						ref={fileInput => (this.fileInput = fileInput)}
					/>
					<button
						className="ml-3 mb-1 mt-1 mr-5  btn btn-primary"
						onClick={e => this.fileInput.click()}
					>
						Add Image
					</button>
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
