import React from "react"
import Swiper from 'swiper/js/swiper.js'
//import 'swiper/css/swiper.min.css'
import "../assets/css/carousel.css"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import homeAction from "../store/actionCreator/home/index";
class CarouselList extends React.Component {
    render() {
        return (
            <div id="carousel">
                <div className="swiper-container" style={{
                     width:"100%",
                     height:"196px"
                }}>
                    <div className="swiper-wrapper">
                        {
                            this.props.carouselList.map(v => (
                                <div className="swiper-slide" key={v.title}>
                                    <a href={v.url}>
                                        <img src={v.image_url} alt="" style={{ width: "100%",height:"196px",overflow:"hidden" }} />
                                    </a>
                                </div>
                            ))
                        }    
                        <div className='swiper-pagination'></div>
                    </div>
                </div>
            </div>

        )

    }

    componentDidMount() {
        this.props.getCarouselList.call(this)   
    }
}
function mapStateToProps(state){
    return{
        carouselList:state.home.carouselList
    }
}
function mapDispatchToProps(dispatch){
    return{
        async getCarouselList(){
            await dispatch(homeAction.getCarouselList.call(this))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CarouselList))
