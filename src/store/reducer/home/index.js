import initState from "../../state/home/index"
import actionType from "../../actionType/home"
export default (state = initState, {type, payload}) => {
    // console.log(11111111)
    state = JSON.parse(JSON.stringify(state));
<<<<<<< HEAD
    if (type === "GET") {
        state.num = payload.data.hots_show_list;
    } else if (type === "UPRECOMMENDLIST") { 
        state.recommendList = payload.data.list;
    }else if (type === "UPPERFORMANCEDETAIL") { 
        state.performanceDetail = payload;
=======
    if(type===actionType.GET){
        state.num=payload.data.hots_show_list
>>>>>>> e07421dc48c3595d9f4a364f138b563d0a3a6720
    }
    if(type===actionType.GET_FLOOR_SHOW){
        // console.log(payload.data[0])
        state.floorShowList = payload.data
        state.floorShowContent = payload.data[0].list
        console.log(state.floorShowList)
    }

    return state;
}