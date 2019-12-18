import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from "./views/Login";
// import ldld from 
import Site from "./views/Site";
import PerformanceDetail from "./views/PerformanceDetail";
import City from "./views/site/City"
import ShowList from "./views/ShowList"
import Xunhuiyanchulist from "./views/Xunhuiyanchulist"

import Search from "./components/search"
function App(props) {
  return (
    <div className="App" style={{touchAction:"none"}}>
      <Switch>
      
        <Route path={"/city"} component={City}></Route>
        <Route path={"/search"} component={Search}></Route>
        <Route path={"/login"} component={Login}></Route>
        <Route path={"/performanceDetail"} component={PerformanceDetail}></Route>
        <Route path={"/showList"} component={ShowList}></Route>
        <Route path={"/tour/ShowList"} component={Xunhuiyanchulist}></Route>
        <Route path={"/"} component={Site}></Route>
      </Switch>
    </div>
  )
}
export default App;
