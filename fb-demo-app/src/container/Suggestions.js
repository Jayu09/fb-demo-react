import { connect } from "react-redux";
import Suggestions from "../component/Suggestions";

const mapStateToProps = state => ({
  users: state.users.items
});

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch({ type: "USER" }),
    request : (user)=> dispatch({ type :"REQUEST" , user :user} )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggestions);
