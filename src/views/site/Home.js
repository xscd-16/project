import React from 'react';
import Recommend from '../../components/Recommend';
import { connect } from "react-redux";
import homeAction from "../../store/actionCreator/home/index";
import CarouselList from "../../components/CarouselList";
import Nav from "../../components/Nav";
import HomeSearch from "../../components/HomeSearch"
import ZjaConcert from "../../components/ZjaConcert";
import {withRouter} from "react-router-dom"
class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeSearch></HomeSearch>
        <CarouselList >
        </CarouselList>
        <Nav></Nav>
        <ZjaConcert></ZjaConcert>
        <Recommend></Recommend>
      </div>
    )
  }
  
  componentDidMount() {
    //console.log(this.props)
    this.props.getList.call(this)
  }
}
function mapStateToProps(state) {
  return {
    num: state.home.num
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getList() {
      dispatch(homeAction.getList.call(this))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));