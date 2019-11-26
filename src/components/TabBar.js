import React from "react";
import {
    NavLink
} from "react-router-dom";
export default class TabBar extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <footer>
                {
                    this.props.location.pathname === "/" ?
                        <NavLink className={"App-link"} activeClassName={"App-active"} exact to={"/"}>
                            <span className="item-icon iconfont icon-chengzi-danse-"></span>
                        </NavLink> :
                        <NavLink className={"App-link"} exact to={"/"}>
                            <span className="item-icon iconfont icon-iconfont13"></span>
                            <span className="item-desc">首页</span>
                        </NavLink>
                }
                <NavLink className={"App-link"} activeClassName={"App-active"} to={"/theatre"}>
                    <span className="item-icon iconfont icon-yingyuan"></span>
                    <span className="item-desc">剧院</span>
                </NavLink>
                <NavLink className={"App-link"} activeClassName={"App-active"} to={"/tickets"}>
                    <span className="item-icon iconfont icon-piaojia_"></span>
                    <span className="item-desc">票夹</span>
                </NavLink>
                <NavLink className={"App-link"} activeClassName={"App-active"} to={"/mine"}>
                    <span className="item-icon iconfont icon-home_my"></span>
                    <span className="item-desc">我的</span>
                </NavLink>
            </footer>
        )
    }
}
