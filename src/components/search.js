import React from "react";
import "./search.css"
import { connect } from "react-redux"
import searchAction from "../store/actionCreator/search/index"
class Search extends React.Component {
    
    constructor() {
        super()
        this.state = {
            value: "",
            isHot:true,
            historyArr:[]||JSON.parse(localStorage.arr)
        }
    }
    render() {
        console.log(this.state.isHot,this.props.showList)
        return (
            <div id="search">
            <div className="search-header">
                <header className="head">
                    <div className="head-div">
                        <span className="iconfont icon-RectangleCopy1"></span>
                        <input type="text" value={this.state.value} ref="word" onChange={this.changeHandler.bind(this)} placeholder={"搜索热门演出"} />
                        <span className="iconfont icon-RectangleCopy" onClick={this.clearHandler.bind(this)}></span>
                    </div>
                    <span className="sespan" onClick={()=>{this.props.history.push("/")}}>取消</span>
                </header>
                <div className="section">
                    <section>
                          { (this.state.historyArr.length>0&&this.state.isHot)? <div>
                                <div className="hist"><span>历史记录</span><span onClick={this.removeL.bind(this)} className="iconfont icon-RectangleCopy" style={{fontSize:"20px"}}></span></div>
                                <div className="section-div">
                                   {JSON.parse(localStorage.arr).map((v, i) => (
                                    <div key={i} onClick={this.getH.bind(this,v)}>
                                        {v}
                                    </div>
                                ))}
                                </div>
                            </div>:null
                            }
                            {this.state.isHot?<div>
                                <div>热门搜索</div>
                                <div className="section-div">
                                    {this.props.hotList.map((v, i) => (
                                        <div key={i} onClick={this.getH.bind(this,v)}>
                                            {v}
                                        </div>
                                    ))}
                                </div>
                                </div>:this.props.showList.map(v=>(
                                    <div key={v.schedular_id} style={{marginBottom:"30px"}}>
                                    <div className={"show-search"}>
                                        <img src={v.pic} alt="" style={{width:"107px",height:"145px"}}/>
                                        <div style={{marginLeft:"15px"}}>
                                            <p style={{marginTop:"5px"}}><strong style={{fontWeight:"700",fontSize:"16px"}}>{v.end_show_time.slice(0,10)}</strong>&nbsp;<span>{v.show_time_bottom}</span>&nbsp;&nbsp;<span>{v.end_show_time.slice(-5)}</span></p>
                                            <h3 className="show-h3" style={{fontSize:"16px",width:"223px",lineHeight:"23px", marginTop:"10px",color:"#232323",fontWeight:"700",minHeight:"23px",maxHeight:"47px"}}>{this.decode(v.name)}</h3>
                                            <p style={{marginTop:"10px"}}><span>{v.city_name}|</span><span>{v.venue_name}</span></p>
                                            <p style={{marginTop:"7px"}}><span style={{color:"#ff6743",fontSize:"16px"}}>￥{v.min_price}</span> 起</p>
                                        </div>
                                    </div>
                                </div>    
                                ))
                                
                                }
                                {this.state.isHot?null:<div style={{width:"100%",textAlign:"center"}}>没有更多了</div>}
                       
                    </section>
                </div>
                {console.log(this.props.hotList,555)}
            </div>
            </div>
        )
    }
    removeL(){
        localStorage.clear()
        localStorage.arr=JSON.stringify([])
        this.setState({
            historyArr:JSON.parse(localStorage.arr)
        })
    }
    getH(e){
        this.setState({value:e,isHot:false},()=>{
            let arr=JSON.parse(localStorage.arr)
            console.log(arr,78787)
            if(arr.indexOf(e)==-1){
                arr.unshift(e)
                localStorage.arr=JSON.stringify(arr)
                this.setState({historyArr:arr},()=>{})
            }
            this.props.getShowList.call(this,this.refs.word.value)
        })
        
    }
    decode(text){
        var div = document.createElement("div");
        div.innerHTML = text;
        text = div.innerText || div.textContent;
        div = null;
        return text;
    }
    clearHandler(){
        this.setState({
            value:"",
            isHot:true
        })
        // this.refs.word.value=null;
        
    }
    changeHandler(e) {
        this.setState({
            value: e.target.value
        }, () => {
            this.setState({
                isHot:false
            },()=>{
               if(this.refs.word.value){
                this.props.getShowList.call(this,this.refs.word.value)
               }else{
                   this.setState({
                       isHot:true
                   })
               }
            })
            
        })

    }
    componentDidMount() {
        if(!localStorage.arr){
            localStorage.arr=JSON.stringify([])
            this.setState({
                historyArr:JSON.parse(localStorage.arr)
            })
        }
        if (!this.props.location.state) {
            this.props.getHot.call(this)
        } else {

        }

    }
}

function mapStateToProps(state) {
    return {
        hotList: state.search.arr,
        showList:state.search.show
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHot() {
            dispatch(searchAction.getHot.call(this))
        },
        getShowList(value) {
            dispatch(searchAction.getShowList.call(this,value))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search);
