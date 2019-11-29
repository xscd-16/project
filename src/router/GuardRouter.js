import React from "react";
import {withRouter} from "react-router-dom"
class GuardRouter extends React.Component{
    render(){
        return (
            <this.props.component></this.props.component>
        )
    }
    UNSAFE_componentWillMount(){
        // console.log(11111)
        if(this.props.location.pathname==="/mine"){
            console.log(2222)
            if(!localStorage.userId)
                this.props.history.push({
                    pathname:"/login",
                    state:{
                        goUrl:this.props.location.pathname
                    }
                })
        }
    }
}
export default withRouter(GuardRouter);