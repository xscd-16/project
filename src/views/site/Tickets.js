import React from 'react';
import "../../Tickets.css"
export default class Tickets extends React.Component{
    render() {
        return (
            <div className="Tickets">
                <div id="first">
                    <span>返回</span>
                    <i>票夹</i>
                    <p>···</p>
                </div>
                <div id="con">
                    <img src="https://m.juooo.com/static/img/ticket_empty.cf4b072.png" alt=""/>
                    <p>暂无电子票</p>
                </div>
            </div>
        )
    }
}
