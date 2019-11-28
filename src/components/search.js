import React from "react";
import "./search.css"
class Search extends React.Component {
    render() {
        return (
            <div className="search-header">
                <header className="head">
                    <div className="head-div">
                        <span className="iconfont icon-RectangleCopy1"></span>
                        <input type="text" placeholder={"搜索热门演出"} />
                        <span className="iconfont icon-RectangleCopy"></span>
                    </div>
                    <span>取消</span>
                </header>
                <div className="section">
                    <section>
                        <div>热门搜索</div>
                        <div className="section-div">

                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Search;
