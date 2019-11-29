import React,{Fragment} from "react"
import "../../assets/css/city.css"
import ShortCity from "./ShortCity"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cityAction from "../../store/actionCreator/city/index";
import scroller from "scroller"
class CityList extends React.Component {
    
    render() {
        return (
            <div id="city">
            <div className="city_body">
                <div className="position_city">
                    定位城市
                </div>
                <div className="position_city_all">全国</div>
                <div className="content_city">
                    <div className="hot_city">
                        <div className="hot_title">热门城市</div>
                        <div className="hot_city_list">
                        {
                            this.props.hotCityList.map(v=>(
                                <Fragment key={v.id}>
                                <div className="hot_city_name">{v.name}</div>
                                </Fragment>
                            ))
                        }   
                        </div>
                    </div>
                    <ShortCity></ShortCity>
                 
                </div>
                
            <div className="city_list_index">
                    {
                        Object.values(this.props.shortCityList).map(m=>(
                            <Fragment key={m.id}>
                            <div className="index_item"
                                id={m.id}
                            onClick={this.scrollToAnchor.bind(this,m.id)}>{m.id}</div>
                            </Fragment>
                        ))
                    }
                    
                  
                </div>
            </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getHotCity.call(this)
        
    }
    scrollToAnchor = (e) => {
        if (e) {   // 找到锚点 id
            let anchorElement = document.getElementById(e);
            if(anchorElement) {        // 如果对应id的锚点存在，就跳转到锚点
                anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
            }
        }
    }
    
}
function mapStateToProps(state){
    //console.log(state)
    return{
        hotCityList:state.city.hotCityList,
        shortCityList:state.city.shortCityList
    }
}
function mapDispatchToProps(dispatch){
    return{
        async getHotCity(){
            await dispatch(cityAction.getHotCity.call(this))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CityList))