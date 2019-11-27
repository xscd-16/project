//首页的
import homeActionType from "../../actionType/home/index"
export const upList = data => {
    return {
        type: homeActionType.GET,
        payload: data
    }
}
export const upRecommendList = data => {
    return {
        type: homeActionType.UPRECOMMENDLIST,
        payload: data
    }
}
export const upPerformanceDetail = data => {
    return {
        type: homeActionType.UPPERFORMANCEDETAIL,
        payload: data.data
    }
}

export default {
    getList() {
        return async (dispatch) => {
            const data = await this.$axios.get("/m/home/index/getHotsRecommendList?city_id=0&version=6.0.8&referer=2");
            dispatch(upList(data));
        }
    },
    getRecommendList() {
        return async (dispatch) => {
            const data  = await this.$axios.get("/m/Show/Search/getShowList?city_id=0&page=1&version=6.0.8&referer=2");
            // console.log("为你推荐返回数据",data);
            dispatch(upRecommendList(data));
        }
    },
    getPerformanceDetail(schedular_id) { 
        return async (dispatch) => {
            const data  = await this.$axios.get("/m/Schedule/Schedule/getScheduleInfo?schedular_id="+schedular_id+"&version=6.0.8&referer=2");
            // console.log("演出详情返回数据",data);
            dispatch(upPerformanceDetail(data));
        }
    }
}