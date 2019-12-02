//这里是热门演出组件模块





import React from "react"
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import homeAction from "../store/actionCreator/home/index";
import "../assets/css/feiremenyanchu.css"
class Feiremenyanchu extends React.Component {
    render() {
        return (
            <>
                <div id="hotPerformance" style={{
                    position:"relative"
                }}>
                    <div className="hotPerformance_title" style={{marginBottom:"8px",marginTop:"8px"}}>
                        <h3 style={{
                            fontWeight: "800",
                            fontSize: "19px",
                            marginTop: "25px",
                            paddingLeft:"10px",
                            color:"#232323"
                            }}>热门演出
                            <a href="https://m.juooo.com/show/showsLibrary">
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
                        display: "flex",
                        overflowX:"auto"
                    }} >
                        {
                            this.props.getHostRecommendList.map(v => (
                                <a key={v.pic} href="https://m.juooo.com/ticket/110304">
                                <div  style={{marginLeft:"8px"}}>
                                    <div style={{
                                                            width:"140px",
                                                            height: "180px",
                                                            overflow:"hidden",
                                                            borderRadius:"8px",
                                                            marginBottom:"5px",
                                                            }}>
                                        <img src={v.pic} alt="" style={{width: "100%",height: "100%"}} />
                                    </div>
                                    <h3 id="swiper-container-text" style={{fontSize: "16px",color:"#232323",fontWeight: "800",marginBottom:"8px"}}
                                    /* ,由于溢出文字问题，将部分样式引导外部了style={{
                                        width: "107px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        fontWeight: "700",
                                        fontSize: "15px",
                                        marginBottom: "5px",
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: "2",
                                        overflow: "hidden",
                                    }} */>{v.show_name}</h3>
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
        this.props.getList.call(this)
    }
}

function mapStateToProps(state){
    return {
        getHostRecommendList:state.home.getHostRecommendList
    }
  }
  function mapDispatchToProps(dispatch){
    return {
        getList(){
            dispatch(homeAction.getList.call(this))
            
        }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Feiremenyanchu))

// 下面是最初自己写的，有小问题没解决，后来改用上面的代码
/* import React from 'react';
import {connect} from "react-redux";
import homeAction from "../store/actionCreator/home/index"
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import "../assets/css/feiremenyanchu.css"

 class Feiremenyanchu extends React.Component{
    render() {
        return (
            <>
            <div id="feiremenyanchu" style={{overflow:"hidden",width:"100%",height:"234px",marginBottom:"10px",marginLeft:"15px"}}>
                <div id="feiremenyanchu-h" style={{width:"100%",height:"24px",verticalAlign:"middle",background:"yellow",marginBottom:"10px",marginTop:"15px"}}>
                            <h2 style={{float:"left",height:"24px",lineHeight:"24px"}}>热门演出</h2>
                            <a href="https://m.juooo.com/show/showsLibrary">
                                    <p style={{float:"right",font:"22px",width:"30px",height:"30px",lineHeight:"30px"}}>></p>
                            </a>
                </div>
                <div style={{overflow:"scroll",width:"100%",height:"210px"}}>
                    <div style={{height:"210px",width:"2520px",background:"blue"}}>
                    {
                        this.props.num.map((v,i)=>(
                            <a href="https://m.juooo.com/ticket/110304">
                            <div className="swiper-slide" slidesperview="2" key={i} style={{height:"210px",width:"115px", marginRight:"5px",float:"left"}}>
                                <div style={{width:"100%",height:"140px",borderRadius: "10px",overflow:"hidden"}}><img style={{width:"100%",height:"100%"}} src={v.pic} alt=""/></div>
                                <h3 className="swiper-container-text" style={{width:"115px",height:"33px",background:"orange",paddingTop:"3px",overflow:"hidden",fontWeight:"700",lineHeight:"14px",font:"14px",marginTop:"10px"}}>{v.show_name}</h3>
                            </div>
                            </a>
                        ))
                    }
                    </div>
                </div>
            </div>
            </>
        )
    }
    componentDidMount(){
        this.props.getList.call(this)
    }
}

function mapStateToProps(state){
    return {
      num:state.home.num
    }
  }
  function mapDispatchToProps(dispatch){
    return {
        getList(){
            dispatch(homeAction.getList.call(this))
            
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Feiremenyanchu) */