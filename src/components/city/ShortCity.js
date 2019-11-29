import React,{Fragment} from "react"
import "../../assets/css/city.css"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cityAction from "../../store/actionCreator/city/index";
class ShortCity extends React.Component{
    render(){
        return(
            <div className="city_list">
            <div className="city_list_item">
            {
                
                 Object.values(this.props.shortCityList).map(v=>(
                    <Fragment key={v.id}>
                        <div className="city_title_letter" id={v.id} >{v.id}</div>
                        <div className="city_list_name">
                        {
                            v.list.map(item=>(
                                <div className="city_list_name_item"key={item.id} >{item.name}</div>
                            ))
                        }  
                        </div>
                    </Fragment>
                ))
            }
               
            </div>
           
        </div>
        )
    }
    componentDidMount(){
        this.props.getShortCity.call(this)
    }
}
function mapStateToProps(state){
    return{
        shortCityList:state.city.shortCityList
    }
}
function mapDispatchToProps(dispatch){
    return{
        async getShortCity(){
            await dispatch(cityAction.getShortCity.call(this))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShortCity))