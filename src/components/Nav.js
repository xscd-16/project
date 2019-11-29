import React from "react"
import "../assets/css/nav.css"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import homeAction from "../store/actionCreator/home/index";
class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="nav1">
                    <ul>
                        {
                            this.props.navList.map(v => (
                                <li key={v.id}>
                                    <a href={v.url}>
                                        <img src={v.pic} alt="" />
                                        <p>{v.name}</p>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getNavList.call(this)
    }
}
function mapStateToProps(state) {
    return {
        navList: state.home.navList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async getNavList() {
            await dispatch(homeAction.getNavList.call(this))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav))