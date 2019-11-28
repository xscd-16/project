import React from 'react';
import TabBar from "../components/TabBar";
import { Route } from "react-router-dom";
import Home from "./site/Home.js";
import Mine from "./site/Mine.js";
import Theatre from "./site/Theatre.js";
import Tickets from "./site/Tickets.js";
import GuardRouter from '../router/GuardRouter';
class Site extends React.Component {
    render() {
        return (
            <div className="Site">
                <nav>
                    <Route path={"/theatre"} render={() => <GuardRouter component={Theatre} />}></Route>
                    <Route path={"/mine"} render={() => <GuardRouter component={Mine} />}></Route>
                    <Route path={"/tickets"} render={() => <GuardRouter component={Tickets} />}></Route>
                    <Route path={"/"} exact render={() => <GuardRouter component={Home} />}></Route>
                </nav>
                <TabBar {...this.props}></TabBar>
            </div>
        )
    }
}
export default Site;
