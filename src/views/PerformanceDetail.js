import React from "react";
import { connect } from "react-redux";
import homeAction from "../store/actionCreator/home/index";
class PerformanceDetail extends React.Component {
    render() {
        return (
            <div className="PerformanceDetail">
                <div className="header">
                    <div style={{ width: "100 %",height:"100%",background: " url("+this.props.performanceDetail.static_data.pic+") no-repeat" }}></div>
                    <p className="head">
                        <span className="iconfont icon-fanhui"></span>
                        <span className="titleCon">你好</span>
                        <span className="iconfont icon-fenxiang"></span>
                        <span className="iconfont icon-zhuye"></span>
                    </p>
                    <div>
                        <div>
                            <h3></h3>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getPerformanceDetail.call(this, this.props.location.state.schedular_id);
    }
}
function mapStateToProps(state) {
    return {
        performanceDetail: state.home.performanceDetail
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async getPerformanceDetail(schedular_id) {
            await dispatch(homeAction.getPerformanceDetail.call(this, schedular_id));
            console.log(this.props.performanceDetail);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PerformanceDetail);
