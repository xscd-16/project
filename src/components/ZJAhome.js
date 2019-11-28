import React from 'react';
import {connect} from "react-redux";
import homeAction from "../store/actionCreator/home/index"
import "../zja-App.css"
 class ZJAhome extends React.Component{
    render() {
        return (
            <div>
              我是一个模块组件
              {
                // this.props.floorShowList.map(v=>(
                //   <div>111</div>
                // ))
              }
              <div className="Z_ych">
                <div className="Z_ych_title">
                  <h3>演唱会
                   <i>></i>
                  </h3>                  
                </div>
                <div className="Z_banner">
                  <a href="#">
                    <div className="Z_banner_1">
                        <img src="#"/>
                        <div className="Z_banner_2">
                          <p className="Z_banner_3">2019.11.27<i>周日 20:20</i></p>
                          <h3>【万有音乐系】《梁欣怡-心之所归演唱会》-深圳</h3>
                          <p className="Z_banner_4">深圳 | 深圳HOU Live</p>
                        </div>
                    </div>
                  </a>
                </div>

                <div className="Z_jczb_list1">
                    <div className="Z_jczb_list2">
                      
                      <div className="Z_jczb_list">
                          <img src="#"/>
                          <h4>
                          w-inds. 2019“未来/过去”上海演唱会
                        </h4>
                        <p>￥999<i>起</i></p>
                        </div> 
                      
                        
                    
                    
            
                    </div>
                </div>
              </div>
              
            </div>
        )
    }
    componentDidMount(){
        this.props.getList.call(this)
        this.props.getFloorShow.call(this)
    }
}
function mapStateToProps(state){
  console.log(333333333,state.home)
    return {
      num:state.home.num,
      floorShowList:state.home.floorShowList,
      floorShowContent:state.home.floorShowContent
    }
  }
  function mapDispatchToProps(dispatch){
    return {
        getList(){
             dispatch(homeAction.getList.call(this))                        
        },
        getFloorShow(){
            dispatch(homeAction.getFloorShow.call(this))
        }

    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ZJAhome)