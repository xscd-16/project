import searchActionType from "../../actionType/search/index"

export const upSearch=(data)=>{
    return {
        type:searchActionType.GET_SEARCH,
        payload:data
    }
}

export const getSearch=(data)=>{
    return{
        type:searchActionType.GET_SHOW,
        payload:data
    }
}

export default{
    //热门搜索
    getHot(){
        return async (dispatch)=>{
            const data=await this.$axios.get("/m/Show/Search/getHotWord?version=6.0.8&referer=2")
            console.log(data,2323)
            dispatch(upSearch(data.data))
        }
    },
    //输入搜索
    getShowList(value,id){
        return async (dispatch)=>{
            if(value){
                const data=await this.$axios.get("/m/Show/Search/getShowList?keywords="+value+"&page=1&sort_type=1&version=6.0.8&referer=2")
            }
            if(id){
                const data=await this.$axios.get("/m/Show/Search/getShowList?venue_id="+id+"&page=1&sort_type=1&version=6.0.8&referer=2")
            }
            dispatch(getSearch(data.data.list))
        }
    }
}