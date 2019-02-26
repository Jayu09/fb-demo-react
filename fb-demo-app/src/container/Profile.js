import { connect } from "react-redux";
import Profile from "../component/Profile";

const mapStateToProps = state => ({
	users: state.users.profile,
	usersid: state.users.id
});

const mapDispatchToProps = dispatch => {
	return {
		getProfile: () => dispatch({ type: "DETAILS_USER" }),
		updateUser: user => dispatch({ type: "UPDATE_USER", payload: user })
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
