import TabBar from "../../components/TabBar";
import React from "react";
import '../../Theatre.css';
import {
    connect
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import theatreCreator from "../../store/actionCreator/theatre"
class Theatre extends React.Component{
    render(){
        return (
            <div id="all">
            <h3 className="bold">剧院</h3>
            <div className="main">
                {
                    this.props.theatreList.map((v)=>(
                        <div className="content" key={v.id}>
                        <div className="top">
                            <a className="left"  href={v.show_list_url}>
                                <img src={v.pic} alt="加载中"/>  
                                <div className="con">
                                    <h3>{v.name}</h3>
                                    <p>{v.count}场在售演出</p>
                                </div>
                            </a>
                            <a className="right" href={v.show_list_url}>···</a>
                        </div>
                        <div className="bottom">
                            {v.showList.map(v=>(
                                <div key={v.id}>
                                    <div className="showList">
                                        <div className="date">
                                            <p>{v.show_time}</p>
                                            <span></span>
                                        </div>
                                        <a href={v.show_list_url}>
                                            <img src={v.pic} alt="加载中"/>
                                        </a>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="showList more">
                                <div className="date">
                                    <p></p>
                                    <span></span>
                                </div>
                                <a>
                                    <p>加载更多</p>
                                </a>
                            </div> */}
                        </div>
                    </div>
                    ))
                }
            </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getTheatreList()
    }
}
function mapStateToProps(state,props){
    return {
        theatreList:state.theatre.theatreList
    }
}
function mapDispathcToProps(dispatch){
    return bindActionCreators(theatreCreator,dispatch);
}
export default connect(mapStateToProps,(dispatch)=>bindActionCreators(theatreCreator,dispatch))(Theatre);