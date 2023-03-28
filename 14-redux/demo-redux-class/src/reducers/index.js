import { combineReducers } from "redux";
import post from './post';

export default combineReducers({
    users: {},
    posts: post,
    shoppingCart: {},
})