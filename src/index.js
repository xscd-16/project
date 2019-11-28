import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/index";
import './index.css';
import './assets/iconfont/iconfont.css';
import "../node_modules/react-pullload/dist/ReactPullLoad.css";
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import * as serviceWorker from './serviceWorker';
axios.interceptors.response.use(({ data }) => data);
React.Component.prototype.$axios = axios;
ReactDOM.render((
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
