import React from 'react';
import {connect} from "react-redux";
import TabBar from "../../components/TabBar";
import homeAction from "../../store/actionCreator/home/index"
import ZJAhome from "../../components/ZJAhome"
 class Home extends React.Component{
    render() {
        return (
            <div>
               <ZJAhome></ZJAhome>
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