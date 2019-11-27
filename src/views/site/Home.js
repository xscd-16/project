import React from 'react';
import Recommend from '../../components/Recommend';
import { connect } from "react-redux";
import homeAction from "../../store/actionCreator/home/index"
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