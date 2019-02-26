import { connect } from "react-redux";
import PostForm from "../component/PostForm";
//import {addPost} from '../actions/actionFunc';

const mapDispatchToProps = dispatch => {
  return {
    addPost: post => dispatch({ type: "NEW_POST", payload: post })
  };
};
const mapStateToProps = state => {
  return {
    valid: state.users.valid,
    userid: state.users.id
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
