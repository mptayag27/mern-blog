// reducers/index.js
import { combineReducers } from "redux";
import blogPosts from "./blogPosts";

export const reducers = combineReducers({ blogPosts });