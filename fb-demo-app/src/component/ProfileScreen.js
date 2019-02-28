import React, { Component } from "react";
//importing component
import Profile from "../container/Profile";
import Suggestions from "../container/Suggestions";
import UserHeader from "../container/UserHeader";
import PostForm from "../container/PostForm";
import Timeline from "../container/Timeline";
//importing designe css
import "../css/App-Content.css";
import "../css/App.css";

class  ProfileScreen extends Component {
	render() {
		return (
			<div>
				<UserHeader className="mb-3" />
				<div className="mt-5 bg-transparent ">
					<div
						className="row justify-content-md-center bg-primary m-0 w-100 position-fixed"
						style={{ backgroundImage: "linear-gradient(blue,indigo)" }}
					>
						<div className="fixed-position col-2 m-0 p-0">
							<Profile />
						</div>
						<div className="col-8 App-middle">
							<PostForm className="row fixed-position" />
							<Timeline className="row fixed-position" />
						</div>
						<div className="col-2 m-0 p-0">
							<Suggestions className="row" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default  ProfileScreen;
