//这里是巡回演出页面级跳转列表页

import React from 'react';
import {connect} from "react-redux";
import homeAction from "../store/actionCreator/home/index"
import "../assets/css/feixunhuiyanchulist.css"
import { Popover, NavBar, Icon } from 'antd-mobile';
import {
  Link,
  NavLink
  
} from "react-router-dom"
const Item = Popover.Item;


 class Xunhuiyanchulist extends React.Component{
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
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
           <div id="xunhuiyanchulist">
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
                      }}> 
                        
                        <Icon type="ellipsis" style={{color:"black"}}/>
                      </div>
                    </Popover>
                  }
                >
                <Link to="/">
                <i className="icon-zjafanhui iconfont"></i>
                </Link> 巡回演出
                </NavBar>
                <div>
                  {
                    this.props.getMoreXunHuiYanChuList.map((v,i)=>(
                      <div className="xunhuiyanchu_list" key={v.show_id}>
                      <a href={v._show_url}>
                        <div className="xunhuiyanchu_list1">
                          <img src={v.pic} />
                          <div className="xunhuiyanchu_list2">
                              <h3>{v.show_name}</h3>
                              <p className="xunhuiyanchu_list3">{v.display_show_time}</p>
                              <div className="xunhuiyanchu_list4">
                                {
                                  v.cityItems.map((val,i)=>(
					<div key={val.city_id}>
						<span className="xunhuiyanchu_list5" style={{
						display:(i>4) ? "none":"block"}}>{val.city_name}</span>
						<Link to={"/"}><button className="xunhuiyanchu_list6" style={{display:(i>5) ? "block":"none"}}>查看更多</button></Link>
					</div>
                                 ))
                                }
                              </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    ))
                  }
                </div>
               

            </div>
        
        )}

       componentDidMount(){
        this.props.moreXunHuiYanChuList.call(this)
   };

}

function mapStateToProps(state){
  return {
    getMoreXunHuiYanChuList: state.home.getMoreXunHuiYanChuList,
  }
}
function mapDispatchToProps(dispatch){
  return {
      async moreXunHuiYanChuList(){
          await dispatch(homeAction.moreXunHuiYanChuList.call(this))
          console.log(2342342342,this.props.getMoreXunHuiYanChuList);
      },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Xunhuiyanchulist)








// import React from 'react'

// import "../assets/css/feixunhuiyanchulist.css"

// import ReactPullLoad,{STATS} from 'react-pullload'

// const loadMoreLimitNum = 2;

// const cData = [
// 	"http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
// 	"http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
// 	"http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
// 	"http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
// 	"http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
// 	// "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",
// 	// "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"
// ]

// class App extends React.Component{

// 	constructor(){
// 		super();
// 		this.state ={
// 			hasMore: true,
// 			data: cData,
// 			action: STATS.init,
// 			index: loadMoreLimitNum //loading more test time limit
// 		}
// 	}

// 	handleAction = (action) => {
// 		console.info(action, this.state.action,action === this.state.action);
// 		//new action must do not equel to old action
// 		if(action === this.state.action ||
// 			action === STATS.refreshing && this.state.action === STATS.loading ||
// 			action === STATS.loading && this.state.action === STATS.refreshing){
// 			// console.info("It's same action or on loading or on refreshing ",action, this.state.action,action === this.state.action);
// 			return false
// 		}

// 		if(action === STATS.refreshing){//刷新
// 			setTimeout(()=>{
// 				//refreshing complete
// 				this.setState({
// 					data: cData,
// 					hasMore: true,
// 					action: STATS.refreshed,
// 					index: loadMoreLimitNum
// 				});
// 			}, 3000)
// 		} else if(action === STATS.loading){//加载更多
// 			this.setState({
// 				hasMore: true
// 			});
// 			setTimeout(()=>{
// 				if(this.state.index === 0){
// 					this.setState({
// 						action: STATS.reset,
// 						hasMore: false
// 					});
// 				} else{
// 					this.setState({
// 						data: [...this.state.data, cData[0], cData[0]],
// 						action: STATS.reset,
// 						index: this.state.index - 1
// 					});
// 				}
// 			}, 3000)
// 		}

// 		//DO NOT modify below code
// 		this.setState({
// 			action: action
// 		})
// 	}

// 	getScrollTop = ()=>{
// 		if(this.refs.reactpullload){
// 			console.info(this.refs.reactpullload.getScrollTop());
// 		}
// 	}
// 	setScrollTop = ()=>{
// 		if(this.refs.reactpullload){
// 			console.info(this.refs.reactpullload.setScrollTop(100));
// 		}
// 	}

// 	render(){
// 		const {
// 			data,
// 			hasMore
// 		} = this.state

// 		return (
// 			<div style={{background:'white',margin:0,padding:0}}>
// 				<ReactPullLoad
// 					downEnough={150}
// 					ref="reactpullload"
// 					className="block"
// 					isBlockContainer={true}
// 					action={this.state.action}
// 					handleAction={this.handleAction}
// 					hasMore={hasMore}
// 					style={{paddingTop: 0}}
// 					distanceBottom={1000}>
// 					<ul className="test-ul">
// 						{
// 							data.map( (str, index )=>{
// 								return <li key={index}><img src={str} alt=""/></li>
// 							})
// 						}
// 					</ul>
// 				</ReactPullLoad>
// 			</div>
// 		)
// 	}
// }

// export default App