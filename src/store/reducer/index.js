import {combineReducers} from "redux";
import home from './home/index';
import theatre from "./theatre/index";
import mine from "./mine/index";
import logo from "./logo/index"
export default combineReducers({
    home,
    theatre,
    mine,
    logo
});