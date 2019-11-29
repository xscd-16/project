import {combineReducers} from "redux";
import home from './home/index';
import theatre from "./theatre/index";
import mine from "./mine/index";
import city from "./city/index"
export default combineReducers({
    home,
    theatre,
    mine,
    city
});