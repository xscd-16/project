import React from "react"
import "../assets/position-iconfont/zsiconfont.css"
import navSearch from "../assets/img/nav_icon_search.png"
import share from "../assets/img/share.png"
import calendar from '../assets/img/calendar.png'
import City from "../views/site/City"
import {NavLink} from 'react-router-dom'
class HomeSearch extends React.Component{
    constructor(){
        super()
        this.state = {
            bg:"transparent",
            position_color:"#fff"
        }
    }
    render(){
        return(
            <div ref="home_search" id="home_search_all" style={{
                width:"100%",    
            }}>
                <header className="home_top" style={{
                    display:"flex",
                    alignItems:"center",
                    width:"100%",
                    height:"44px",
                    padding:"0 15px",
                    position:"fixed",
                    left:"0",
                    top:"0",
                    boxSizing: "border-box",
                    zIndex: "10",
                    backgroundColor:this.state.bg,
                    borderBottom:"0"
                }}>
                <NavLink to={"/city"}>
                    <div className="home_content" style={{
                        width:"60px",
                        height:"30px",
                        lineHeight:"30px",
                        background:"rgba(0,0,0,0.3)",
                        borderRadius:"40%",
                        border: "1px solid hsla(0,0%,88%,0.3)",
                        justifyContent: "center"
                    }}>
                        <strong className="iconfont icon-icon-test1" style={{
                            color:this.state.position_color,
                            width:"10px",
                            height:"13px",
                            textAlign:"center",  
                        }}></strong>
                       
                        <span style={{
                            fontSize:"15px",
                            color:"#fff"
                        }}>全国</span>
                        
                    </div>
                    </NavLink>
                    <div className="home_search" style={{
                        width:"214px",
                        height:"30px",
                        display:"flex",
                        alignItems: "center",
                        borderRadius:"20px",
                        border: "1px solid hsla(0,0%,88%,.2)",
                        backgroundColor: "rgba(0,0,0,0.2)",
                        
                    }}>
                        <img src={navSearch} alt="" 
                        style={{
                            width:"20px",
                            height:"20px",
                            borderColor: "transparent",
                            verticalAlign: "middle",
                            marginLeft:"11px",
                            marginRight:"5px"
                        }}
                        />
                        <span style={{
                            color:"#fff",
                            fontSize:"13px",
                        }}>搜索热门演出</span>
                    </div>
                    <span style={{
                        marginLeft:"5px"
                    }}>
                    <img src={calendar} alt=""
                    style={{
                        width:"27px",
                        height:"25px",
                        borderColor: "transparent",
                        verticalAlign: "middle"
                    }}
                    />
                    </span>
                    <span style={{
                        marginLeft:"5px"
                    }}>
                    <img src={share} alt=""
                    style={{
                        width:"27px",
                        height:"25px",
                        borderColor: "transparent",
                        verticalAlign: "middle"
                    }}
                    />
                    </span>
                </header>
            </div>
        )
    }
    handleScroll(){
        let scrollHeight =document.documentElement.scrollTop;
        if(scrollHeight >2){ 
            this.setState({
                bg:"#ccc",
                position_color:"orange"
            })
        }else{
            this.setState({
                bg:"transparent",
                position_color:"#fff"
            })
        }
      }
      componentDidMount() {  
        window.addEventListener('scroll', this.handleScroll.bind(this));
      }
}
export default HomeSearch