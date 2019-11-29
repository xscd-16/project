import initState from "../../state/mine/index"
export default (state = initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));
    return state;
}