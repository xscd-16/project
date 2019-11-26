import React from 'react';
import "../login.css"
export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            checkNum:"获取验证码"
        }
    }
    render() {
        return (
            <div className="header">
                <h1>欢迎来到聚橙网</h1>
                <input className="height" ref={"phone"} type="text" placeholder={"请输入手机号"}/>
                <div className="div"><input className="input" placeholder={"请输入验证码"} type="text"/><span onClick={this.getCheck.bind(this)} className="span">{this.state.checkNum}</span></div>
            </div>
        )
    }
  async  getCheck(){
        if(/^1[3456789]\d{9}$/.test(this.refs.phone.value)){
            console.log(this.refs.phone.value)
            const phoneId=this.refs.phone.value;
         const {data}=await   this.$axios.get("/p/logo",{
                params:{
                    phoneId
                }
            })
            console.log(data)
        }else{
            alert("请输入正确的手机号码")
        }
        
    }
    com
}
