import initState from "../../state/theatre/index";
export default (state = initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));
    if(type==="UP_THERTRE"){
        state=payload
    }
    return state;
}