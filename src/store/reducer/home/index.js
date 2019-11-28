import initState from "../../state/home/index"
import homeActionType from "../../actionType/home";
export default (state = initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));
    if (type === homeActionType.GET) {
        state.num = payload.data.hots_show_list;
    } else if (type === homeActionType.UPRECOMMENDLIST) {
        state.recommendList = payload.data.list;
    } else if (type === homeActionType.UPPERFORMANCEDETAIL) {
        state.performanceDetail = payload;
    }else if(type===homeActionType.GET_FLOOR_SHOW){
        // console.log(payload.data[0])
        state.floorShowList = payload.data
        state.floorShowContent = payload.data[0].list
        console.log(state.floorShowList)
    }
    return state;
}