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
    }else if(type === homeActionType.GET_CAROUSEL_LIST){
        state.carouselList = payload.slide_list
    }else if(type === homeActionType.GET_NAV_LIST){
        //console.log(777777,payload)
        state.navList = payload.classify_list
    } else if (type === homeActionType.UPABOUTRECOMMEND) {
        state.aboutRecommend = payload;
    }else if(type===homeActionType.GET_FLOOR_SHOW){
        //console.log(111111111,payload);
        state.floorShowList = payload;
        // state.floorShowContent = payload[0].list;
        //console.log(state.floorShowList);
    }else if(type===homeActionType.UPGETTOURRECOMMENDLIST){
        state.getTourRecommendList = payload.data.tour_show_list
        console.log(1213131)
        state.floorShowList = payload;
        state.floorShowContent = payload[0];
    }
    return state;
}