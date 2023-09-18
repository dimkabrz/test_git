import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.min.css";
import { Provider } from "react-redux";
import store from "./components/Toolkit";
import './styles/main.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Provider store={store}>
            <App />
        </Provider>
);
