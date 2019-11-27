//首页的
import homeActionType from "../../actionType/home/index"
export const upList=data=>{
    return {
        type:homeActionType.GET,
        payload:data
    }
}

export const FloorShow=data=>{
    return {
        type:homeActionType.GET_FLOOR_SHOW,
        payload:data
    }
}

export default{
    getList(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/m/home/index/getHotsRecommendList?city_id=0&version=6.0.8&referer=2");
            dispatch(upList(data))
            // console.log(data)
    }
    },
    // 演唱会
    getFloorShow(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/m/home/index/getFloorShow?city_id=1&version=6.0.8&referer=2")
            dispatch(FloorShow(data))
        }
    }
}