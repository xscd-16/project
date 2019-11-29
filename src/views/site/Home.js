import React from 'react';
import Recommend from '../../components/Recommend';
import { connect } from "react-redux";
import homeAction from "../../store/actionCreator/home/index";
import CarouselList from "../../components/CarouselList";
import Nav from "../../components/Nav";
import ZJAhome from "../../components/ZJAhome";
import Feiremenyanchu from "../../components/Feiremenyanchu"
import Feixunhuiyanchu from "../../components/Feixunhuiyanchu"

import HomeSearch from "../../components/HomeSearch"

import ZjaConcert from "../../components/ZjaConcert";
class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeSearch></HomeSearch>
        <CarouselList >
        </CarouselList>
        <Nav></Nav>
        <Feiremenyanchu></Feiremenyanchu>
        <Feixunhuiyanchu></Feixunhuiyanchu>
        <ZJAhome></ZJAhome>
        
        <ZjaConcert></ZjaConcert>
        <Recommend></Recommend>
      </div>
    )
  }
  
  componentDidMount() {
    this.props.getList.call(this)
    window.addEventListener('scroll', this.handleScroll);
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);