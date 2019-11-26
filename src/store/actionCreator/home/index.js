//首页的
import homeActionType from "../../actionType/home/index"
export const upList=data=>{
    return {
        type:homeActionType.GET,
        payload:data
    }
}


export default{
    getList(){
        return async (dispatch)=>{
            const {data}=await this.$axios.get("/m/home/index/getHotsRecommendList?city_id=0&version=6.0.8&referer=2");
            dispatch(upList(data))
    }
    }
}