//这里是巡回演出组件模块


import React from "react"
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import homeAction from "../store/actionCreator/home/index";
import Swiper from 'swiper/js/swiper.js'
// import 'swiper/js/swiper.min.js'
// import 'swiper/css/swiper.min.css'
//import "../assets/css/feixunhuiyanchu.css"
class Feixunhuiyanchu extends React.Component {
    render() {
        return (
            <>
                <div id="hotPerformance" style={{position:"relative"}}>
                    <div className="hotPerformance_title" style={{marginBottom:"8px",marginTop:"8px"}}>
                        <h3 style={{
                            fontWeight: "800",
                            fontSize: "19px",
                            marginTop: "25px",
                            paddingLeft:"10px",
                            color:"#232323"
                            }}>巡回演出
                            <a href="http://localhost:3000/tour/ShowList">
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
                                            
                                            <div  style={{marginLeft:"3px",width:"245px"}}>
                                                <div style={{
                                                                        width:"245px",
                                                                        height: "140px",
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
                                                                                            width:"245px",
                                                                                            color:"#232323",
                                                                                            fontWeight:"800",
                                                                                            fontSize:"16px",
                                                                                            marginBottom:"10px"
                                                                                        }}>{v.show_name}</h2>
                                                <p className="yanchucishu" style={{textAlign:"center",width:"245px",marginBottom:"10px"}}>{v.schedular_num+"场巡演"}</p>
                                            </div>
                                            
                                            </a>
                                        
                                    ))
                                }
                    </div>
                    <div style={{
                        width: "100%",
                        bottom: "0PX",
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
                //console.log(888888888,this.props);
            }
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Feixunhuiyanchu));




// 下面是拖拽抢先版，暂时不用，只调试了一半

// import React from "react"
// import { Carousel, WingBlank } from 'antd-mobile';
// import {connect} from "react-redux";
// import { withRouter } from "react-router-dom";
//  import homeAction from "../store/actionCreator/home/index";


// class Feixunhuiyanchu extends React.Component {
//   state = {
//     data: ['1', '2', '3'],
//     imgHeight: 176,
//   }
// //   componentDidMount() {
// //     // simulate img loading
// //     // setTimeout(() => {
// //     //   this.setState({
// //     //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
// //     //   });
// //     // }, 100);
// //   }
//   render() {
//     return (
//       <WingBlank>
//         <Carousel className="space-carousel"
//           frameOverflow="visible"
//           cellSpacing={10}
//           slideWidth={0.8}
//           infinite={false}
//           dots={false}
//         //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//           afterChange={index => this.setState({ slideIndex: index })}
//           style={{padding: "16px",
//                background: "#DEF1E5",
//                overflow: "hidden",
//             }}
//         >


//           {
//             this.props.getTourRecommendList.map((v, index) => (
//             <a
//               key={v}
//               href="http://www.alipay.com"
//               style={{
//                 display: 'block',
//                 position: 'relative',
//                 top: this.state.slideIndex === index ? -10 : 0,
//                 height: this.state.imgHeight,
//                 boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
//               }}
//             >
//               <img
//                 src={v.pic}
//                 style={{width: "100%",height: "100%"}}
//                 onLoad={() => {
//                   // fire window resize event to change height
//                   window.dispatchEvent(new Event('resize'));
//                   this.setState({ imgHeight: 'auto' });
//                 }}
//               />
//             </a>
//           ))}
//         </Carousel>
//       </WingBlank>
//     );
//   }
//   componentDidMount(){
//       this.props.tourRecommendList.call(this)
//   }
// }

// function mapStateToProps(state) {
//     console.log(state.home.getTourRecommendList,1515656)
//         return {
//                 getTourRecommendList: state.home.getTourRecommendList
//         }
//     }
// function mapDispatchToProps(dispatch) {
//     return {
//         async tourRecommendList() {
//             await dispatch(homeAction.tourRecommendList.call(this));
//             //console.log(888888888,this.props);
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Feixunhuiyanchu));

// //ReactDOM.render(<App />, mountNode);
// // .space-carousel {
// //   padding: 16px;
// //   background: #DEF1E5;
// //   overflow: hidden;
// // }