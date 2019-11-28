import axios from "axios"
export default{
    getTheatreList(){
        return (async (dispatch)=>{
            const {data}=await axios.get("/m/theatre/index/getTheatreList?page=1&version=6.0.8&referer=2")
            console.log(data.data.theatre_list)
            dispatch({
                type:"UP_THERTRE",
                payload:{
                    theatreList:data.data.theatre_list
                }
            })
        })
    }
}