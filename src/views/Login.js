import React from 'react';
import {connect} from "react-redux"
import "../login.css"
import  logoAction from "../store/actionCreator/logo/index"
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            checkNum:"获取验证码",
            num:5
        }
    }
    render() {
        return (
            <div className="header">
                <h1>欢迎来到聚橙网</h1>
                <input className="height" ref={"phone"} type="text" placeholder={"请输入手机号"}/>
                <div className="div"><input className="input" ref="it" placeholder={"请输入验证码"} type="text"/><input type="button" ref="bt" onClick={this.getCheck.bind(this)} defaultValue={this.state.checkNum} className="span"/></div>
                <div className="div1" onClick={this.logoIn.bind(this)}>登录</div>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.mess)
    }
    logoIn(){
      this.props.logoIn.call(this)
    //   this.props.history.push("/mine")
    //   const {data}=await  this.$axios.post("/p/logoin",{
    //       phoneId:this.refs.phone.value,
    //       code:this.refs.it.value
    //   });
    //   if(data.ok===1){
    //       alert(data.msg)
    //   }else if(data.ok===-2){
    //         alert(data.msg)
    //   }else{
    //       alert(data.msg)
    //   }
    }
    getCheck(){
        if(/^1[3456789]\d{9}$/.test(this.refs.phone.value)){
            console.log(this.refs.phone.value)
            const phoneId=this.refs.phone.value;
            this.props.getCode.call(this,phoneId)
        //  const {data}=await   this.$axios.get("/p/logo",{
        //         params:{
        //             phoneId
        //         }
        //     })
            // console.log(data)
            // this.refs.bt.disabled=true;
            // this.setState({
            //     checkNum:this.state.num
            // })
            // if(data.ok===1){
            //     this.refs.it.value=data.code;
            //   let t= setInterval(()=>{
            //         this.setState({
            //             checkNum:this.state.checkNum-1
            //         })
            //     if(this.state.checkNum<1){
            //         this.setState({
            //             checkNum:"获取验证码"
            //         })
            //         this.refs.bt.disabled=false;
            //         clearInterval(t)
            //     }
            //     // console.log(this.state.checkNum)
            //    },1000) 
            // }
        }else{
            alert("请输入正确的手机号码")
        }
        
    }
    componentWillUnmount(){
        // 卸载异步操作设置状态
        this.setState = (state, callback) => {
            return;
        }
    }
    
}
function mapStateToProps(state){
    return{
        mess:state.logo
    }
}

function mapDispatch(dispatch){
    return{
        getCode(phoneId){
            // console.log(111111)
            dispatch(logoAction.sendCode.call(this,phoneId))
        },
        logoIn(){
            dispatch(logoAction.logoIn.call(this))
        }
    }
}

export default connect(mapStateToProps,mapDispatch)(Login)
