//首页的
import homeActionType from "../../actionType/home/index";
import Swiper from 'swiper/js/swiper.js'
// 案例
export const upList = data => {
    return {
        type: homeActionType.GET,
        payload: data
    }
}
//巡回演出
export const upGetTourRecommendList = data => {
    return {
        type: homeActionType.UPGETTOURRECOMMENDLIST,
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
// 相关推荐
export const upAboutRecommend = data => {
    return {
        type: homeActionType.UPABOUTRECOMMEND,
        payload: data
    }
}
// 演唱会
export const FloorShow = data => {
    return {
        type: homeActionType.GET_FLOOR_SHOW,
        payload: data
    }
}
//热门演出
export const hotsShowList = data => {
    return{
        type:homeActionType.GET_HOTS_SHOW_LIST,
        payload:data.data
    }
}
//轮播图
export const carouselList = data => {
    return{
        type:homeActionType.GET_CAROUSEL_LIST,
        payload:data.data
    }
}
export const navList = data => {
    return{
        type:homeActionType.GET_NAV_LIST,
        payload:data.data
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

    //巡回演出
    tourRecommendList() {
        return async (dispatch) => {
            const data = await this.$axios.get("/m/home/index/getTourRecommendList?city_id=0&version=6.0.8&referer=2");
             //console.log("巡回演出返回数据",data);
            dispatch(upGetTourRecommendList(data));
        }
    },

    // 为你推荐
    getRecommendList() {
        return async (dispatch) => {
            const data = await this.$axios.get("/m/Show/Search/getShowList?city_id=0&page=1&version=6.0.8&referer=2");
             //console.log("为你推荐返回数据",data);
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
    // 演唱会
    // getFloorShow() {
    //     return async (dispatch) => {
    //         const { data } = await this.$axios.get("/m/home/index/getFloorShow?city_id=1&version=6.0.8&referer=2");
    //         //console.log(4444444444,data)
    //         dispatch(FloorShow(data));
    //     }
    // },
    //轮播图
    getCarouselList(){
        return async (dispatch) => {
            const data = await this.$axios.get("/m/home/index/getClassifyHome")
            //console.log(54656655,data)
            dispatch(carouselList(data))
            new Swiper ('.swiper-container', {
                loop: true,
                autoplay: {
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            })  
        }
    },
    //nav
    getNavList(){
        return async (dispatch) => {
           const data = await this.$axios.get("/m/home/index/getClassifyHome")
           //console.log(data,5555555)
           dispatch(navList(data))
        }
    }, 
    getAboutRecommend(cate_parent_id) {
        return async (dispatch) => {
            const data = await this.$axios.get("/m/Show/Search/getShowList?category=" + cate_parent_id + "&city_id=0&version=6.0.8&referer=2");
            // console.log("相关推荐返回数据",data);
            dispatch(upAboutRecommend(data.data.list));
        }
    },
    // 演唱会     https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.8&referer=2
    getFloorShow() {
        return async (dispatch) => {
            const { data } = await this.$axios.get("/m/home/index/getFloorShow?");
            //console.log(4444444444, data)
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
