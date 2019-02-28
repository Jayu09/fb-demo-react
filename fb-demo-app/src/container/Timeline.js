import { connect } from "react-redux";
import Post from "../component/Timeline";

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = dispatch => {
  return {
    viewPosts: () => dispatch({ type: "POST" }),
    markCompleted: id => dispatch({ type: "POST_COMPLETED", id: id }),
    markSeen: id => dispatch({ type: "POST_SEENED", id: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
