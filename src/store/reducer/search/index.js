import initState from "../../state/search/index"
import searchActionType from "../../actionType/search/index"
export default (state = initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));
    if(type===searchActionType.GET_SEARCH){
        state.arr=payload
    }
    if(type===searchActionType.GET_SHOW){
        state.show=payload
    }
    return state;
}