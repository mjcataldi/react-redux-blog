import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const firstReducer = () => {};

// this makes it so a combined reducer is returned as a unnamed component
export default combineReducers({
  posts: postsReducer
});

const postsReducer = () => {};
