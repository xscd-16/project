import React from 'react';
import Recommend from '../../components/Recommend';
import { connect } from "react-redux";
import homeAction from "../../store/actionCreator/home/index"
<<<<<<< HEAD
class Home extends React.Component {
  render() {
    return (
      <div>
        {/* {
          this.props.num.map((v, i) => (
            <div key={i}>
              {v.show_name}
            </div>
          ))
        } */}
        <Recommend></Recommend>
      </div>
    )
  }
  componentDidMount() {
    this.props.getList.call(this);
  }
=======
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
>>>>>>> e07421dc48c3595d9f4a364f138b563d0a3a6720
}
function mapStateToProps(state) {
  return {
    num: state.home.num
  }
<<<<<<< HEAD
}
function mapDispatchToProps(dispatch) {
  return {
    getList() {
      dispatch(homeAction.getList.call(this))
=======
  function mapDispatchToProps(dispatch){
    return {
        getList(){
            dispatch(homeAction.getList.call(this))            
        }

>>>>>>> e07421dc48c3595d9f4a364f138b563d0a3a6720
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);