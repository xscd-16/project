import initState from "../../state/home/index"
export default (state = initState, {type, payload}) => {
    // console.log(11111111)
    state = JSON.parse(JSON.stringify(state));
    if (type === "GET") {
        state.num = payload.data.hots_show_list;
    } else if (type === "UPRECOMMENDLIST") { 
        state.recommendList = payload.data.list;
    }else if (type === "UPPERFORMANCEDETAIL") { 
        state.performanceDetail = payload;
    }
    return state;
}