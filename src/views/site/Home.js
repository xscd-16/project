import React from 'react';
import Recommend from '../../components/Recommend';
import { connect } from "react-redux";
import homeAction from "../../store/actionCreator/home/index";
import CarouselList from "../../components/CarouselList";
import Nav from "../../components/Nav";
import ZJAhome from "../../components/ZJAhome";
import HomeSearch from "../../components/HomeSearch"

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeSearch></HomeSearch>
        <CarouselList>
        </CarouselList>
        <Nav></Nav>
        <ZJAhome></ZJAhome>
        <Recommend></Recommend>
      </div>
    )
  }
  componentDidMount() {
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);