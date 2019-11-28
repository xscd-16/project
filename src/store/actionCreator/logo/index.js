import logoActionType from "../../actionType/logo/index"
export const upList=data=>{
    return {
        type:logoActionType.GETD,
        payload:data
    }
}
export const upL=data=>{
    return {
        type:logoActionType.LOGO,
        payload:data
    }
}

export default{
    //发送验证码
    sendCode(phoneId){
        return async (dispatch)=>{
            const {data}=await   this.$axios.get("/p/logo",{
                params:{
                    phoneId
                }
            })
            console.log(data)
            this.refs.bt.disabled=true;
            this.setState({
                checkNum:this.state.num
            })
            if(data.ok===1){
                this.refs.it.value=data.code;
              let t= setInterval(()=>{
                    this.setState({
                        checkNum:this.state.checkNum-1
                    })
                if(this.state.checkNum<1){
                    this.setState({
                        checkNum:"获取验证码"
                    })
                    this.refs.bt.disabled=false;
                    clearInterval(t)
                }
                // console.log(this.state.checkNum)
               },1000) 
            }
            dispatch(upList(data))
        }
    },
    logoIn(){
        return async dispatch=>{
            const {data}=await  this.$axios.post("/p/logoin",{
                phoneId:this.refs.phone.value,
                code:this.refs.it.value
            });
            console.log(data.ok)
            if(data.ok===1){
                dispatch(upL(data))
                this.props.history.push("/mine")
            }else if(data.ok===-2){
                // this.props.history.push("/mine")
                  alert(data.msg)
            }else{
                alert(data.msg)
            }
        }
    }
}