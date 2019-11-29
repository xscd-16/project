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
// 演唱会
export const FloorShow = data => {
    return {
        type: homeActionType.GET_FLOOR_SHOW,
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
    // 演唱会     https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.8&referer=2
    getFloorShow() {
        return async (dispatch) => {
            const { data } = await this.$axios.get("/m/home/index/getFloorShow?");
            console.log(4444444444,data)
            dispatch(FloorShow(data));
        }
    }
}