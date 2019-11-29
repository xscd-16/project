import React from "react"
import axios from "axios"
import "../assets/css/nav.css"
// import "../assets/css/reset.css"
class Nav extends React.Component{
    constructor(){
        super()
        this.state = {
            navList:[]
        }
    }
    render(){
        return(
            <div>
            <div className="nav1">
            <ul>
                {
                    this.state.navList.map(v=>(
                        <li key={v.id}>
                            <a href="/showList">
                            <img src={v.pic} alt=""/>
                            <p>{v.name}</p>
                            </a>
                        </li>
                    ))
                }
            </ul>
            </div>            
            </div>
        )
    }
    componentDidMount(){
        axios.get("/m/home/index/getClassifyHome").then(data=>{
            this.navList = data.data.classify_list
            this.setState({
                navList:this.navList
            })
        })
    }
}
export default Nav