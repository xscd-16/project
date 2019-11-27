import initState from "../../state/home/index"
import actionType from "../../actionType/home"
export default (state = initState, {type, payload}) => {
    // console.log(11111111)
    state = JSON.parse(JSON.stringify(state));
    if(type===actionType.GET){
        state.num=payload.data.hots_show_list
    }
    if(type===actionType.GET_FLOOR_SHOW){
        // console.log(payload.data[0])
        state.floorShowList = payload.data
        state.floorShowContent = payload.data[0].list
        console.log(state.floorShowList)
    }

    return state;
}