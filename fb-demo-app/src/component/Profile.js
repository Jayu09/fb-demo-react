import React, { Component } from "react";
import "../css/ProfileEdit.css";
import userlogo from "../svg/user.svg";

import ProfileEdit from "./ProfileEdit";

class Profile extends Component {
	componentWillMount() {
		this.props.getProfile();
	}
	render() {
		const user = this.props.users;
		return (
			<div className="container mt-5 p-0">
				<div>
					{this.props.users ? (
						<div>
							<div className="text-center">
								<img
									src={user.image ? "/images/" + user.image : userlogo}
									className="App-profilePicture fixed-position"
									height="100vh"
									alt="notification"
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
