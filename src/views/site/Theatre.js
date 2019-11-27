// import React from 'react';
import TabBar from "../../components/TabBar";
// export default class Theatre extends React.Component{
//     render() {
//         return (
//             <h1 className="Theatre">
//                 Theatre
//             </h1>
//         )
//     }
// }
import React from "react";
import '../../Theatre.css';
import axios from "axios";
// import {
//     connect
// } from "react-redux";
class Theatre extends React.Component{
    constructor(){
        super();
        this.state={
            theatreList:[],
            pageNo:0,
            pageSize:15
        }
    }
    render(){
        return (
            <>
            <h3>剧院</h3>
            <div className="main">
                
                {
                    this.state.theatreList.map((v)=>(
                        <div className="content" key={v.id}>
                        <div className="top">
                            <a className="left"  href={v.show_list_url}>
                                <img src={v.pic} alt="true"/>  
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
                                        <a>
                                            <img src={v.pic} alt="true"/>
                                        </a>
                                    </div>
                                </div>
                            ))}
                            <div className="showList more">
                                <div className="date">
                                    <p></p>
                                    <span></span>
                                </div>
                                <a>
                                    <p>加载更多</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            </>
        )
    }
    componentDidMount(){
        this.getTheatreList()
    }
    async getTheatreList(){
        const {data}=await axios.get("/m/theatre/index/getTheatreList?page=1&version=6.0.8&referer=2")
        console.log(data.data.theatre_list)
        this.setState({
            theatreList:data.data.theatre_list
        })
    }
}
export default Theatre;