import { connect } from "react-redux";
import LoginHeader from "../component/Headers/LoginHeader";
//import { loginUser } from "../actions/actionFunc";

const mapStateToProps = state => {
  return {
    error: state.users.error,
    users: state.users.valid
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch({ type: "LOGIN_USER", payload: user })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginHeader);
