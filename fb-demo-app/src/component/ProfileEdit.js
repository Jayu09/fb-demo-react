import React from "react";
import Modal from "react-responsive-modal";

export default class App extends React.Component {
	state = {
		open: false,
		name: "",
		contact: "",
		address: "",
		image: ""
	};
	addImage = e => {
		const file = e.target.files[0];
		this.setState({ image: file });
	};
	change = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleClick = () => {
		const user = new FormData();
		user.append("name", this.state.name);
		user.append("contact", this.state.contact);
		user.append("address", this.state.address);
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
		const { open } = this.state;
		return (
			<div>
				<button
					onClick={this.onOpenModal}
					className="btn btn-outline-light"
				>
					Edit Profile
				</button>
				<Modal open={open} onClose={this.onCloseModal} center>
					<div className="modal-header bg-primary">
						<h5 className="modal-title" id="exampleModalLabel">
							Update Profile
						</h5>
					</div>
					<div>
						<div>
							name :
							<input
								className="m-1 p-1"
								type="text"
								name="name"
								onChange={this.change}
							/>
						</div>
						<div>
							contact:
							<input
								className="m-1 p-1"
								type="text"
								name="contact"
								onChange={this.change}
							/>
						</div>
						<div>
							address:
							<input
								className="m-1 p-1"
								type="text"
								name="address"
								onChange={this.change}
							/>
						</div>
					</div>
					<div className="modal-footer bg-primary">
						<input
							style={{ display: "none" }}
							type="file"
							onChange={this.addImage}
							ref={fileInput => (this.fileInput = fileInput)}
						/>
						<button
							className="btn btn-primary"
							onClick={e => this.fileInput.click()}
						>
							Edit Profile Image
						</button>
						<button
							type="submit"
							className="m-1 p-1 btn btn-primary"
							onClick={this.handleClick}
						>
							Update Profile
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							onClick={this.onCloseModal}
						>
							Close
						</button>
					</div>
				</Modal>
			</div>
		);
	}
}
