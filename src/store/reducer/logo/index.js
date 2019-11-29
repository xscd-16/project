import initState from "../../state/logo/index"
import logoActionType from "../../actionType/logo/index"
export default (state = initState, {type, payload}) => {
    state = JSON.parse(JSON.stringify(state));
    if(type===logoActionType.GETD){
        state.arr=payload
    }
    if(type===logoActionType.LOGO){
        state.brr=localStorage.userId=payload.phoneId
    }
    return state;
}