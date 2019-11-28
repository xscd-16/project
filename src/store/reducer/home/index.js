import initState from "../../state/home/index"
import homeActionType from "../../actionType/home/index"
export default (state = initState, {type, payload}) => {
    // console.log(11111111)
    state = JSON.parse(JSON.stringify(state));
    if(type===homeActionType.GET){
        state.num=payload.data.hots_show_list
    }
    return state;
}