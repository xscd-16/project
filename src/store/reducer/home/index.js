import initState from "../../state/home/index"
<<<<<<< HEAD
import homeActionType from "../../actionType/home/index"
=======
import homeActionType from "../../actionType/home";
>>>>>>> cce94851672954a1bd6036f35b8f594acd9a6ae9
export default (state = initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));
<<<<<<< HEAD
    if(type===homeActionType.GET){
        state.num=payload.data.hots_show_list
=======
    if (type === homeActionType.GET) {
        state.num = payload.data.hots_show_list;
    } else if (type === homeActionType.UPRECOMMENDLIST) {
        state.recommendList = payload.data.list;
    } else if (type === homeActionType.UPPERFORMANCEDETAIL) {
        state.performanceDetail = payload;
    }else if(type===homeActionType.GET_FLOOR_SHOW){
        console.log(111111111,payload);
        state.floorShowList = payload;
        // state.floorShowContent = payload[0].list;
        console.log(state.floorShowList);
>>>>>>> cce94851672954a1bd6036f35b8f594acd9a6ae9
    }
    return state;
}