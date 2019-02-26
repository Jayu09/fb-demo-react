import { connect } from "react-redux";
import UserHeader from "../component/Headers/UserHeader";

const mapStateToProps = state => {
	return {
		valid: state.users.valid,
		notification: state.users.notification,
		list: state.users.list
	};
};
const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch({ type: "LOG_OUT" }),
		searchUser: name => dispatch({ type: "SEARCH_USER", name: name }),
		getNotification: () => dispatch({ type: "NOTIFICATION" }),
		acceptRequest: (data) => dispatch({ type: "RESPONCE" ,data})
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserHeader);
