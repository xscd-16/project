import React from 'react';
import {connect} from "react-redux";
import TabBar from "../../components/TabBar";
import homeAction from "../../store/actionCreator/home/index"
<<<<<<< HEAD
import CarouselList from "../../components/CarouselList"
import Nav from "../../components/Nav"
=======
import ZJAhome from "../../components/ZJAhome"
>>>>>>> 5e75ec80bcaa94b12a228b989b6573f9b723a9b7
 class Home extends React.Component{
    render() {
        return (
            <div>
<<<<<<< HEAD
            <CarouselList></CarouselList>
            <Nav></Nav>
            {
                // this.props.num.map((v,i)=>(
                //     <div key={i}>
                //       {v.show_name}
                //     </div>
                // ))
            }
=======
               <ZJAhome></ZJAhome>
>>>>>>> 5e75ec80bcaa94b12a228b989b6573f9b723a9b7
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