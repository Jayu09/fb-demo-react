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
								<button
									className="col-sm-4 p-0 m-0 btn btn-secondary"
									type="submit"
									onClick={this.sendRequest}
									id={user.email}
									name={user.name}
									value={user._id}
								>
									Request
								</button>
							</div>
						</div>
					</li>
				</ul>
			));
		return (
			<div
				className="align-self-center bg-transparent container mt-5 overflow-auto  App-Suggestions"
				opacity="0.5"
			>
				{Items}
			</div>
		);
	}
}
export default Suggestions;
