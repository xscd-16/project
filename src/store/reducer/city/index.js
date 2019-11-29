import initState from "../../state/city/index"
import cityActionType from "../../actionType/city/index"
export default (state = initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));
    if(type === cityActionType.GET_HOT_CITY){
        //console.log(payload)
        state.hotCityList = payload.hot_city_List
    }else if(type === cityActionType.GET_SHORT_CITY){
        state.shortCityList = payload
    }
    return state
}