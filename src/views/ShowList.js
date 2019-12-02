import React from 'react';
import {connect} from "react-redux";
import homeAction from "../store/actionCreator/home/index"
import "../zja-App.css"
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import { Popover, NavBar, Icon } from 'antd-mobile';
import {
  Link
} from "react-router-dom"
const Item = Popover.Item;


 class ShowList extends React.Component{
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
          this.setState({
            visible: false,
            selected: opt.props.value,
          });
        };
        handleVisibleChange = (visible) => {
          this.setState({
            visible,
          });
        };  
       render(){
        
         return(
           <div>
                <NavBar
                  mode="light"
                  rightContent={
                    <Popover mask
                      overlayClassName="fortest"
                      overlayStyle={{ color: 'currentColor' }}
                      visible={this.state.visible}
                      overlay={[
                        (<Item  style={{width:"100px"}} data-seed="logId"><a href="/" style={{color:"black"}}><i className="icon-zjazhuye iconfont"></i>主页</a></Item>),
                        (<Item  style={{ whiteSpace: 'nowrap'}}><a href="/login" style={{color:"black"}}><i className="icon-zjahome_my iconfont"></i>我的聚橙</a></Item>),
                        
                      ]}
                      align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                      }}
                      onVisibleChange={this.handleVisibleChange}
                      onSelect={this.onSelect}
                    >
                      
                      <div style={{
                        height: '100%',
                        padding: '0 15px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                      }}  
                      > 
                        
                        <Icon type="ellipsis" style={{color:"black"}}/>
                      </div>
                    </Popover>
                  }
                >
                <Link to="/">
                <i className="icon-zjafanhui iconfont"></i>
                </Link> 演出
                </NavBar>

                <div className="gundongtiao">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">全部</div>
                            <div className="swiper-slide">演唱会</div>
                            <div className="swiper-slide">音乐会</div>
                            <div className="swiper-slide">话剧歌剧</div>
                            <div className="swiper-slide">儿童亲自</div>
                            <div className="swiper-slide">音乐剧</div>
                            <div className="swiper-slide">戏曲综艺</div>
                            <div className="swiper-slide">展览</div>
                            <div className="swiper-slide">舞蹈芭蕾</div>
    
                        </div>
                    </div>
                    <div className="quanguo">
                    <i className="shuxian"></i><b>全国<i className="icon-dingwei iconfont"></i></b>
                    </div>
                </div>

                <div>

               
                
               {
                 this.props.YanChuContent.list.map((v,i)=>(
                    <div className="yanchanghui_list" key={i}>
                    <a href={v.url}>
                      <div className="yanchanghui_list1">
                        <img src={v.pic} />
                        <div className="yanchanghui_list2">
                          <p className="yanchanghui_list3">{v.start_show_time}<i>{v.show_time_bottom}</i></p>
                          <h3>{v.name}</h3>
                          <p className="yanchanghui_list4">{v.city_name} | {v.venue_name}</p>
                          <p className="yanchanghui_list5">￥{v.min_price} <i> 起</i></p>
                        </div>
                      </div>
                    </a>
                  </div>
                 ))
               }
              
              </div>
               





        </div>
        
        )
       }

       componentDidMount(){
        this.props.getYanchuNav.call(this); 
        this.props.getYanchuList.call(this);
        new Swiper('.swiper-container', {
           slidesPerView: 4,
           freeMode: false,
           pagination: {
             el: '.swiper-pagination',
             clickable: true,
           },
         });

         
   };

}

function mapStateToProps(state){
  return {
    YanChuContent:state.home.YanChuContent,
    YanChuNav:state.home.YanChuNav
  }
}
function mapDispatchToProps(dispatch){
  return {
      async getYanchuList(){
          await dispatch(homeAction.getYanchuList.call(this))
          // console.log(555555555555555,this.props.YanChuContent.list)
      },
      async getYanchuNav(){
        await dispatch(homeAction.getYanchuNav.call(this))
        // console.log(555555555555555,this.props.YanChuNav)
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowList)