import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import homeAction from "../store/actionCreator/home/index";
class Recommend extends React.Component {
    render() {
        return (
            <div className="Recommend">
                <h3>为你推荐</h3>
                <div className="recommendList">
                    {
                        this.props.recommendList.map(item => (
                            <div className="recommendItem" key={item.schedular_id}
                            onClick={() => this.props.history.push({ pathname: "/performanceDetail", state: {schedular_id:item.schedular_id} })}>
                                <img src={item.pic} alt="演出图片"/>
                                <div className="item-info">
                                    {
                                        item.show_time_bottom.length < 1 ?
                                            (
                                                <div style={{ position: "relative", height: "100%", width: "100%" }}>
                                                    <h5 style={{ fontSize: "1rem", position: "absolute", top: ".4rem" }}>
                                                        {item.start_show_time.substr(0, 4) + "." + item.show_time_top}
                                                    </h5>
                                                    <h5 style={{ fontSize: "1rem", position: "absolute", top: "2rem" }}>{item.name}</h5>
                                                    <p style={{ fontSize: ".8rem", position: "absolute", bottom: "2rem" }}>{item.city_name}{" | "}{item.venue_name}</p>
                                                    <div style={{ position: "absolute", bottom: ".4rem" }}>
                                                        <span style={{ fontSize: "1rem", color: "orange" }}>
                                                            ￥{item.min_price}元
                                                        </span>
                                                        <span style={{ fontSize: ".8rem" }}>{" 起"}</span>
                                                    </div>
                                                </div>
                                            ) :
                                            (
                                                <div style={{ position: "relative", height: "100%", width: "100%" }}>
                                                    <h5 style={{ fontSize: "1rem", position: "absolute", top: ".4rem" }}>
                                                        {item.start_show_time.substr(0, 10)}
                                                        <span style={{ fontSize: ".8rem", fontWeight: "normal" }}>
                                                            {" "}
                                                            {item.show_time_bottom + " " + item.start_show_time.substr(12, 5)}
                                                        </span>
                                                    </h5>
                                                    <h5 style={{ fontSize: "1rem", position: "absolute", top: "2rem" }}>{item.name}</h5>
                                                    <p style={{ fontSize: ".8rem", position: "absolute", bottom: "2rem" }}>{item.city_name}{" | "}{item.venue_name}</p>
                                                    <div style={{ position: "absolute", bottom: ".4rem" }}>
                                                        <span style={{ fontSize: "1rem", color: "orange" }}>
                                                            ￥{item.min_price}元
                                                        </span>
                                                        <span style={{ fontSize: ".8rem" }}>{" 起"}</span>
                                                    </div>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getRecommendList.call(this);
    }
}
function mapStateToProps(state) {
    return {
        recommendList: state.home.recommendList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        async getRecommendList() {
            await dispatch(homeAction.getRecommendList.call(this));
            //console.log(this.props.recommendList);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Recommend));
