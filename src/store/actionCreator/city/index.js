import cityActionType from "../../actionType/city/index"
export const hotCityList = data => {
    return{
        type:cityActionType.GET_HOT_CITY,
        payload:data.data
    }
}
export const shortCityList = data => {
    return{
        type:cityActionType.GET_SHORT_CITY,
        payload:data.data
    }
}
export default{
    getHotCity() {
        return async (dispatch) => {
            const data = await this.$axios.get("/m/city/city/getHotCityList");
            //console.log(data)
            dispatch(hotCityList(data));
        }
    },
    getShortCity(){
        return async (dispatch) => {
            const data = await this.$axios.get("/m/city/city/getSortedCityList");
            dispatch(shortCityList(data))
        }
    }

}