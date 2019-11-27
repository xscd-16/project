import React from 'react';
import {connect} from "react-redux";
import TabBar from "../../components/TabBar";
import homeAction from "../../store/actionCreator/home/index"

import "../../zja-App.css"
 class Home extends React.Component{
    render() {
        return (
          <div>
              <div data-v-8c510d6a="" className="hot-block">
              <div data-v-8c510d6a="" className="hot-block__lab"><h3 data-v-8c510d6a="" className="hot-block__lab__title">热门演出</h3> <a data-v-8c510d6a="" href="https://m.juooo.com/show/showsLibrary" className="hot-block__lab__arrow"></a></div>
              </div>

              <div>
                <div data-v-8c510d6a="" className="hot-block__list hot-list">
                    <div data-v-8c510d6a="" className="swiper-container swiper-container-horizontal">
                        <div data-v-8c510d6a="" className="swiper-wrapper">
                            <div data-v-8c510d6a="" className="swiper-slide swiper-slide-active">
                              <div data-v-8c510d6a="" className="hot-block__list__wrap__item"></div> <h3 data-v-8c510d6a="" className="hot-block__list__wrap__title text-double">弗洛朗·莫特 Florent Mothe 2019演唱会 -深圳站</h3>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Home)