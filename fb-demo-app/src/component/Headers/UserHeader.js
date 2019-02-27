import React, { Component } from "react";

//importing images
import logo from "../../svg/facebook.svg";
import userlogo from "../../svg/user.svg";
import notification1 from "../../svg/notification1.svg";
//importing designe css
import "../../css/Header.css";

class UserHeader extends Component {
	state = {
		name: ""
	};
	componentWillMount() {
		this.getNotification();
	}
	change = e => {
		this.setState({ [e.target.name]: e.target.value });
		this.searchPerson();
	};
	searchPerson = async () => {
		await this.props.searchUser(this.state.name);
	};
	signout = async e => {
		await this.props.signOut();
	};
	getNotification = async () => {
		await this.props.getNotification();
	};
	isNewNotification = () => {
		if (this.props.notification && this.props.notification.length > 0)
			return true;
		else return false;
	};
	acceptRequest = async e => {
		const responce = {
			name: e.target.name,
			email: e.target.value
		};
		await this.props.acceptRequest(responce);
	};
	showAlert = () => {
		alert("you have read all notification");
	};
	render() {
		const Notification =
			this.props.notification &&
			this.props.notification.map(notification => (
				<ul key={notification._id} className="list-unstyled">
					<li className="text-center">
						<div className="col-sm-3 m-1">{notification.name}</div>
						<button
							className="btn btn-secondary"
							onClick={this.acceptRequest}
							value={notification.profileId}
							name={notification.name}
						>
							Accept
						</button>
					</li>
				</ul>
			));
		const Items =
			this.props.list &&
			this.props.list.map(user => (
				<ul key={user._id} className="list-unstyled ">
					<li>
						<div className="bg-light">
							<div className="row  p-0">
								<img
									height="30vh"
									width="30vh"
									src={user.image ? "/images/" + user.image : userlogo}
									className="m-auto rounded-circle col-sm-3"
									alt={userlogo}
								/>
								<div className="m-1 col-sm-4">{user.name}</div>
								{/* <button
									className="col-sm-4 p-0 m-0 btn btn-secondary"
									type="submit"
									onClick={this.sendRequest}
									id={user.email}
									name={user.name}
									value={user.email}
								>
									Request
								</button> */}
							</div>
						</div>
					</li>
				</ul>
			));
		return (
			<nav className="nav navbar-expand-lg fixed-top App-header">
				<nav className="nav navbar-nav mr-auto">
					<img
						src={logo}
						className="App-logo navbar-brand rounded-circle"
						alt="logo"
					/>
				</nav>
				<nav className="nav navbar-nav ml-auto ">
					<div className="form-inline">
						<div
							className="btn-group"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<input
								type="text"
								onChange={this.change}
								className="form-control"
								id="inlineFormInputName2"
								placeholder="Name"
								name="name"
								autoComplete="on"
							/>
							{/* <button className="btn btn-primary">
								Search
							</button> */}
							<div className="dropdown-menu overflow-auto" height="20px">
								{Items}
							</div>
						</div>
						{this.isNewNotification() ? (
							<div className="btn-group">
								<button
									type="button"
									className="App-notification m-2 badge bg-danger rounded-circle"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									{this.props.notification.length}
								</button>
								<div className="dropdown-menu">{Notification}</div>
							</div>
						) : (
							<div className="m-2 rounded-circle">
								<img
									src={notification1}
									className="App-notification m-2 rounded-circle"
									alt="notification"
									onClick={this.showAlert}
								/>
							</div>
						)}
						<button
							className="btn btn-primary mb-2"
							onClick={this.signout}
						>
							Sign Out
						</button>
					</div>
				</nav>
			</nav>
		);
	}
}
export default UserHeader;
