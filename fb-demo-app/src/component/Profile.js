import React, { Component } from "react";
import Modal from "react-responsive-modal";

import "../css/ProfileEdit.css";

import ProfileEdit from "./ProfileEdit";

class Profile extends Component {
	state = {
		open: false,
		image: ""
	};
	componentWillMount() {
		this.props.getProfile();
	}
	addImage = e => {
		const file = e.target.files[0];
		this.setState({ image: file });
	};
	handleClick = () => {
		const user = new FormData();
		user.append("image", this.state.image, this.state.image.name);
		this.props.updateUser(user);
		window.location.reload();
	};
	onOpenModal = () => {
		this.setState({ open: true });
	};
	onCloseModal = () => {
		this.setState({ open: false });
	};
	render() {
		const user = this.props.users;
		const { open } = this.state;
		return (
			<div className="container mt-5 p-auto">
				<div>
					{this.props.users ? (
						<div>
							<div className="text-center">
								<Modal open={open} onClose={this.onCloseModal} center>
									<h5 className="modal-title" id="exampleModalLabel">
										Update Profile
									</h5>
									<input
										style={{ display: "none" }}
										type="file"
										onChange={this.addImage}
										ref={fileInput => (this.fileInput = fileInput)}
									/>
									<button
										className="btn btn-link"
										onClick={e => this.fileInput.click()}
									>
										Choose Image from Local Storage....
									</button>
									<button
										type="submit"
										className="m-1 p-1 btn btn-primary"
										onClick={this.handleClick}
									>
										Update Image
									</button>
								</Modal>
								<img
									src={"/images/" + user.image}
									className="App-profilePicture fixed-position mb-3 rounded-circle"
									height="130vh"
									width="130vh"
									alt="notification"
									style={{overflow :" hidden"}}
									onClick={this.onOpenModal}
								/>
							</div>
							<blockquote className="blockquote text-center">
								<p className="mb-0 App-Content">Name : {user.name}</p>
							</blockquote>
							<blockquote className="blockquote text-center">
								<p className="mb-0 App-Content">Email : {user.email}</p>
							</blockquote>
							<blockquote className="blockquote text-center">
								<p className="mb-0 App-Content">
									Contact : {user.contact}
								</p>
							</blockquote>
							<blockquote className="blockquote text-center">
								<p className="mb-0 App-Content">
									Address : {user.address}
								</p>
							</blockquote>
						</div>
					) : null}
					<div className="m-auto text-center">
						<ProfileEdit {...this.props} />
					</div>
				</div>
			</div>
		);
	}
}
export default Profile;
