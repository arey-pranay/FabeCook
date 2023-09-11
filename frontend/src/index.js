import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/icons/icons.css";
import App from "./App";
import { BrowserRouter as Routerr } from "react-router-dom";
ReactDOM.render(
  <Routerr>
    <App />
  </Routerr>,
  document.getElementById("root")
);
