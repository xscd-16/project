import React from "react"
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import "../assets/css/carousel.css"
import axios from 'axios'
class CarouselList extends React.Component {
    constructor() {
        super()
        this.state = {
            carouselList: []
        }
    }
    render() {
        return (
            <>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.carouselList.map(v => (
                                <div className="swiper-slide" key={v.title}>
                                    <a href={v.url}>
                                        <img src={v.image_url} alt="" style={{ width: "100%" }} />
                                    </a>
                                </div>

                            ))
                        }
                        
                        <div className='swiper-pagination'></div>
                    </div>
                </div>

            </>

        )

    }

    componentDidMount() {
        this.getCarouselList()
    }
    getCarouselList() {
        axios.get("/m/home/index/getClassifyHome").then(data => {
            this.carouselList = data.data.slide_list
            console.log(22222222222,data.data.slide_list)
            this.setState({
                carouselList:this.carouselList
                
            }, ()=>{
                new Swiper ('.swiper-container', {
                    loop: true,
                    autoplay: {
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    }
                })  
            })
        })
    }
}

export default CarouselList