//首页的
import homeActionType from "../../actionType/home/index";
// 案例
export const upList = data => {
    return {
        type: homeActionType.GET,
        payload: data
    }
}
// 为你推荐
export const upRecommendList = data => {
    return {
        type: homeActionType.UPRECOMMENDLIST,
        payload: data
    }
}
// 演出详情
export const upPerformanceDetail = data => {
    return {
        type: homeActionType.UPPERFORMANCEDETAIL,
        payload: data.data
    }
}

//演出页面列表
export const FloorShow = data => {
    return {
        type: homeActionType.GET_FLOOR_SHOW,
        payload: data
    }
}

// 演出页面
export const YanchuList = data => {
    return {
        type: homeActionType.GET_YANCHU_LIST,
        payload: data
    }
}
//演出页面 导航
export const YanchuNav = data => {
    return {
        type: homeActionType.GET_YANCHU_NAV,
        payload: data
    }
}



export default {
    // 案例
    getList() {
        return async (dispatch) => {
            const data = await this.$axios.get("/m/home/index/getHotsRecommendList?city_id=0&version=6.0.8&referer=2");
            dispatch(upList(data));
        }
    },
    // 为你推荐
    getRecommendList() {
        return async (dispatch) => {
            const data = await this.$axios.get("/m/Show/Search/getShowList?city_id=0&page=1&version=6.0.8&referer=2");
            // console.log("为你推荐返回数据",data);
            dispatch(upRecommendList(data));
        }
    },
    // 演出详情
    getPerformanceDetail(schedular_id) {
        return async (dispatch) => {
            const data = await this.$axios.get("/m/Schedule/Schedule/getScheduleInfo?schedular_id=" + schedular_id + "&version=6.0.8&referer=2");
            // console.log("演出详情返回数据",data);
            dispatch(upPerformanceDetail(data));
        }
    },
    //张建安  首页演唱会     https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.8&referer=2
    getFloorShow() {
        return async (dispatch) => {
            const { data } = await this.$axios.get("/m/home/index/getFloorShow?");
            dispatch(FloorShow(data));
        }
    },

    //张建安  演出页面  列表、导航
    //列表 https://api.juooo.com/Show/Search/getShowList?category=35&city_id=0&page=1&keywords=&version=6.0.8&referer=2
    //导航 https://m.juooo.com/Search/getShowCategory?version=6.0.8&referer=2
    getYanchuList() {
        return async (dispatch) => {
            const { data } = await this.$axios.get("/m/Show/Search/getShowList?category=35&city_id=0&page=1&keywords=&version=6.0.8&referer=2");
            dispatch(YanchuList(data));
        }
    },
    getYanchuNav() {
        return async (dispatch) => {
            const { data } = await this.$axios.get("/m/Search/getShowCategory?version=6.0.8&referer=2");
            dispatch(YanchuNav(data));
        }
    },
}
