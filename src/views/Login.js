import React from 'react';
import { connect } from "react-redux"
import "../login.css"
import logoAction from "../store/actionCreator/logo/index"
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            checkNum: "获取验证码",
            num: 5
        }
    }
    render() {
        return (
            <div id="logo">
            <div className="header">
            <h1 className="logo-h1">欢迎来到聚橙网</h1>
            <input className="height" ref={"phone"} type="text" placeholder={"请输入手机号"} />
            <div className="div"><input className="input" ref="it" placeholder={"请输入验证码"} type="text" /><input type="button" ref="bt" onClick={this.getCheck.bind(this)} defaultValue={this.state.checkNum} className="span" /></div>
            <div className="div1" onClick={this.logoIn.bind(this)}>登录</div>
        </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.mess)
    }
    logoIn() {
        this.props.logoIn.call(this)
    }
    getCheck() {
        if (/^1[3456789]\d{9}$/.test(this.refs.phone.value)) {
            console.log(this.refs.phone.value)
            const phoneId = this.refs.phone.value;
            this.props.getCode.call(this, phoneId)
        } else {
            alert("请输入正确的手机号")
        }
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        }
    }

}

function mapStateToProps(state) {
    return {
        mess: state.logo
    }
}

function mapDispatch(dispatch) {
    return {
        getCode(phoneId) {
            // console.log(111111)
            dispatch(logoAction.sendCode.call(this, phoneId))
        },
        logoIn() {
            dispatch(logoAction.logoIn.call(this))
        }
    }
}

export default connect(mapStateToProps, mapDispatch)(Login)
