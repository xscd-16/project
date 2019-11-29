import React from 'react';
export default class Theatre extends React.Component{
    render() {
        return (
            <h1 className="Theatre">
                Theatre
            </h1>
        )
    }
    componentDidMount(){
        console.log(this)
    }
}
