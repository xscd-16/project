import React from 'react';
import './App.css';
import { Route,Switch } from "react-router-dom";
import Login from "./views/Login";
import Site from "./views/Site";
import PerformanceDetail from "./views/PerformanceDetail";
function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"} component={Login}></Route>
        <Route path={"/performanceDetail"} component={PerformanceDetail}></Route>
        <Route path={"/"} component={Site}></Route>
      </Switch>
    </div>
  )
}

export default App;
