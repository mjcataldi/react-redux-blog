import { combineReducers } from "redux";

const firstReducer = () => {};

// this makes it so a combined reducer is returned as a unnamed component
export default combineReducers({ replaceMe: () => "Placeholder" });
