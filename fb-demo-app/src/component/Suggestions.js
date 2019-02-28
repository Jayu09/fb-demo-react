import React, { Component } from "react";
import "../css/Suggestions.css";
import userlogo from "../svg/user.svg";
class Suggestions extends Component {
	componentWillMount() {
		this.props.getUsers();
	}
	sendRequest = e => {
		const req = {
			email: e.target.id,
			name: e.target.name,
			_id: e.target.value
		};
		this.props.request(req);
	};
	render() {
		const Items =
			this.props.users &&
			this.props.users.map(user => (
				<ul key={user._id} className="list-unstyled p-0 m-1 bg-primary rounded">
					<li>
						<div className="bg-transparent">
							<div className="row p-0 ml-0 my-2">
								<img
									height="30vh"
									width="30vh"
									src={user.image ? "/images/" + user.image : userlogo}
									className="ml-0 rounded-circle col-sm-4"
									alt={userlogo}
								/>
								<div className="mr-1 col-sm-5">{user.name}</div>
							</div>
							<button
								className="row p-0 mx-5 btn btn-secondary"
								type="submit"
								onClick={this.sendRequest}
								id={user.email}
								name={user.name}
								value={user._id}
							>
								Request
							</button>
						</div>
					</li>
				</ul>
			));
		return (
			<div
				className="align-self-center bg-transparent container mt-5 overflow-auto pl-0 ml-0"
				opacity="0.5"
			>
				{Items}
			</div>
		);
	}
}
export default Suggestions;
