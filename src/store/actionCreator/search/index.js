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
    getHot(){
        return async (dispatch)=>{
            const data=await this.$axios.get("/m/Show/Search/getHotWord?version=6.0.8&referer=2")
            console.log(data,2323)
            dispatch(upSearch(data.data))
        }
    },
    getShowList(value){
        return async (dispatch)=>{
            const data=await this.$axios.get("/m/Show/Search/getShowList?keywords="+value+"&page=1&sort_type=1&version=6.0.8&referer=2")
            console.log(data,888)
            dispatch(getSearch(data.data.list))
        }
    }
}