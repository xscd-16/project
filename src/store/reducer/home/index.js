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
    } else if (type === homeActionType.UPABOUTRECOMMEND) {
        state.aboutRecommend = payload;
    }else if(type===homeActionType.GET_FLOOR_SHOW){
        state.floorShowList = payload;
        state.floorShowContent = payload[0];
    }
    return state;
}