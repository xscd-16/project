import initState from "../../state/home/index"
import homeActionType from "../../actionType/home";
export default (state = initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));
    if (type === homeActionType.UPREMENJINGXUAN) {
        state.num = payload.data.hots_show_list;
    }else if(type===homeActionType.UPGETTOURRECOMMENDLIST){
        //这里是巡回演出组件
        state.getTourRecommendList = payload.data.tour_show_list
        //console.log(1213131,payload.data)
    }else if(type===homeActionType.UPGETMOREXUNHUIYANCHULIST){
        //这里是巡回演出页面级跳转页面加载更多列表
        state.getMoreXunHuiYanChuList = payload.data
        //console.log(676767676,payload.data)
    }else if(type === homeActionType.GET){
        state.getHostRecommendList = payload.data.hots_show_list;
    }else if (type === homeActionType.UPRECOMMENDLIST) {
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
        state.floorShowContent = payload[0].list;
        //console.log(state.floorShowList);
    }else if(type === homeActionType.GET_YANCHU_LIST){
        state.YanChuContent = payload
        // console.log(88888888888,state.YanChuContent)
    }else if(type === homeActionType.GET_YANCHU_NAV){
        state.YanChuNav = payload
        // console.log(88888888888,payload)
    }
    return state;
}