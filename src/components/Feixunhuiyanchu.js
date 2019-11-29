//这里是巡回演出组件模块


import React from "react"
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import homeAction from "../store/actionCreator/home/index";
import Swiper from 'swiper/js/swiper.js'
import 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'
//import "../assets/css/feixunhuiyanchu.css"
class Feixunhuiyanchu extends React.Component {
    render() {
        return (
            <>
                <div id="hotPerformance" style={{
                    position:"relative"
                }}>
                    <div className="hotPerformance_title" style={{marginBottom:"8px",marginTop:"8px"}}>
                        <h3 style={{
                            fontWeight: "800",
                            fontSize: "24px",
                            marginTop: "25px",
                            paddingLeft:"10px",
                            color:"#232323"
                            }}>巡回演出
                            <a href="https://m.juooo.com/Tour/moreTourShowList">
                                <i style={{
                                    color: "#232323",
                                    fontSize: "19px",
                                    float: "right",
                                    paddingRight:"10px",
                                    fontWeight:"300"
                                }}>></i>
                            </a>
                        </h3>
                    </div>
                    <div className="hotPerformance_content" style={{
                        borderRadius: "0.10667rem",
                        border: "1px solid #ebebeb",
                        display: "flex",
                        overflowX:"auto"
                    }} >
                                {
                                    this.props.getTourRecommendList.map(v => (
                                        
                                            <a key={v.pic}>
                                            
                                            <div  style={{marginLeft:"8px"}}>
                                                <div style={{
                                                                        width:"320px",
                                                                        height: "190px",
                                                                        overflow:"hidden",
                                                                        borderRadius:"8px",
                                                                        marginBottom:"10px",
                                                                        }}>
                                                    <img src={v.pic} alt="" style={{width: "100%",height: "100%"}} />
                                                </div>
                                                <h2 className="swiper-container-text" style={{textAlign:"center",
                                                                                            overflow: "hidden",
                                                                                            textOverflow:"ellipsis",
                                                                                            whiteSpace: "nowrap",
                                                                                            width:"320px",
                                                                                            color:"#232323",
                                                                                            fontWeight:"800",
                                                                                            fontSize:"18px",
                                                                                            marginBottom:"10px"
                                                                                        }}>{v.show_name}</h2>
                                                <p className="yanchucishu" style={{textAlign:"center",width:"350px",}}>{v.schedular_num+"场巡演"}</p>
                                            </div>
                                            
                                            </a>
                                        
                                    ))
                                }
                    </div>
                    <div style={{
                        width: "100%",
                        bottom: "0",
                        height: "8px",
                        position: "absolute",
                        background:"#fff"
                    }}></div>
                </div>
            </>
        )
    }
    componentDidMount() {
        this.props.tourRecommendList.call(this)
    }
}

function mapStateToProps(state) {
        return {
                getTourRecommendList: state.home.getTourRecommendList
        }
    }
    function mapDispatchToProps(dispatch) {
        return {
            async tourRecommendList() {
               await dispatch(homeAction.tourRecommendList.call(this));
                //console.log(888888888,this.props.getTourRecommendList);
            }
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Feixunhuiyanchu));