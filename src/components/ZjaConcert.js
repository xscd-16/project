import React from 'react';
import { connect } from "react-redux";
import homeAction from "../store/actionCreator/home/index"
import "../zja-App.css"
import "../assets/iconfont/iconfont.css"
class ZjaConcert extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.floorShowList.map((v, i) => (
            <div className="Z_ych" key={i}>
              <div className="Z_ych_title">
                <h3>{v.title}
                  <i className="iconfont icon-icon1"></i>
                </h3>
              </div>
              <div className="Z_banner">
                <a href={v.list[0].url}>
                  <div className="Z_banner_1">
                    <img src={v.list[0].pic} />
                    <div className="Z_banner_2">
                      <p className="Z_banner_3">{v.list[0].display_show_time}<i>{v.list[0].week}</i></p>
                      <h3>{v.list[0].schedular_name}</h3>
                      <p className="Z_banner_4">{v.list[0].city_name} | {v.list[0].venue_name}</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="Z_jczb_list1">
                <div className="Z_jczb_list2">
                  <a href={v.list[1].url}>
                    <div className="Z_jczb_list">
                      <img src={v.list[1].pic} />
                      <h4>
                        {v.list[1].schedular_name}
                      </h4>
                      <p>￥{v.list[1].low_price}<i>起</i></p>
                    </div>
                  </a>

                  <a href={v.list[2].url}>
                    <div className="Z_jczb_list">
                      <img src={v.list[2].pic} />
                      <h4>
                        {v.list[2].schedular_name}
                      </h4>
                      <p>￥{v.list[2].low_price}<i>起</i></p>
                    </div>
                  </a>

                  <a href={v.list[3].url}>
                    <div className="Z_jczb_list">
                      <img src={v.list[3].pic} />
                      <h4>
                        {v.list[3].schedular_name}
                      </h4>
                      <p>￥{v.list[3].low_price}<i>起</i></p>
                    </div>
                  </a>

                  <a href={v.list[4].url}>
                    <div className="Z_jczb_list">
                      <img src={v.list[4].pic} />
                      <h4>
                        {v.list[4].schedular_name}
                      </h4>
                      <p>￥{v.list[4].low_price}<i>起</i></p>
                    </div>
                  </a>

                  <a href={v.list[5].url}>
                    <div className="Z_jczb_list">
                      <img src={v.list[5].pic} />
                      <h4>
                        {v.list[5].schedular_name}
                      </h4>
                      <p>￥{v.list[5].low_price}<i>起</i></p>
                    </div>
                  </a>

                  <a href={v.list[6].url}>
                    <div className="Z_jczb_list">
                      <img src={v.list[6].pic} />
                      <h4>
                        {v.list[6].schedular_name}
                      </h4>
                      <p>￥{v.list[6].low_price}<i>起</i></p>
                    </div>
                  </a>

                  <a href={v.list[7].url}>
                    <div className="Z_jczb_list">
                      <img src={v.list[7].pic} />
                      <h4>
                        {v.list[7].schedular_name}
                      </h4>
                      <p>￥{v.list[7].low_price}<i>起</i></p>
                    </div>
                  </a>

                  <a href={v.list[8].url}>
                    <div className="Z_jczb_list">
                      <img src={v.list[8].pic} />
                      <h4>
                        {v.list[8].schedular_name}
                      </h4>
                      <p>￥{v.list[8].low_price}<i>起</i></p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
  componentDidMount() {
    this.props.getFloorShow.call(this)
  }
}
function mapStateToProps(state){
  // console.log(state.home.floorShowContent)
    return {
      floorShowList:state.home.floorShowList,
      floorShowContent:state.home.floorShowContent
    }
  }
  function mapDispatchToProps(dispatch){
    return {
         getFloorShow(){
             dispatch(homeAction.getFloorShow.call(this))
        }
      }      

    }
export default connect(mapStateToProps, mapDispatchToProps)(ZjaConcert)