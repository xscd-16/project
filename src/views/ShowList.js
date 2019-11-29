import React from 'react';
import "../zja-App.css"
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
export default class ShowList extends React.Component{
    render() {
        return (
            <div className="yanchu">
                <div className="yanchu_hander">
                   <i className="icon-fanhui iconfont"></i>
                   <h4>演出</h4> 
                   <i className="icon-shenglvehao iconfont"></i>
                </div>
                
              
                <div className="gundongtiao">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">全部</div>
                            <div class="swiper-slide">演唱会</div>
                            <div class="swiper-slide">音乐会</div>
                            <div class="swiper-slide">话剧歌剧</div>
                            <div class="swiper-slide">儿童亲自</div>
                            <div class="swiper-slide">音乐剧</div>
                            <div class="swiper-slide">戏曲综艺</div>
                            <div class="swiper-slide">展览</div>
                            <div class="swiper-slide">舞蹈芭蕾</div>
    
                        </div>
                    </div>
                    <div className="quanguo">
                    <i className="shuxian"></i><b>全国<i className="icon-dingwei iconfont"></i></b>
                    </div>
                </div>

                <div>

                <div className="yanchanghui_list">
                <a href="#">
                  <div className="yanchanghui_list1">
                    <img src="#" />
                    <div className="yanchanghui_list2">
                      <p className="yanchanghui_list3">2019.11.28<i>周日</i></p>
                      <h3>【万有音乐系】《小城故事》——陈佳2019个人演唱会</h3>
                      <p className="yanchanghui_list4">asdasd | sadasdasd</p>
                    </div>
                  </div>
                </a>
              </div>

                </div>

            </div>
        )
    }


    componentDidMount(){
         new Swiper('.swiper-container', {
            slidesPerView: 4,
            freeMode: false,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
    }
}
