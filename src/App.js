import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Site from "./views/Site";
import PerformanceDetail from "./views/PerformanceDetail";
import City from "./views/site/City"
import Search from "./components/search"
function App(props) {
  return (
    <div className="App">
      <Switch>
       <Route path={"/search"} component={Search}></Route> 
        <Route path={"/login"} component={Login}></Route>
        <Route path={"/performanceDetail"} component={PerformanceDetail}></Route>
        <Route path={"/city"} component={City}></Route>
        <Route path={"/"} component={Site}></Route>
      </Switch>
    </div>
  )
}
export default App;
