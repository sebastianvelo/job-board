import App from "app/App";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./style/index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.querySelector("#app")
);

reportWebVitals();
