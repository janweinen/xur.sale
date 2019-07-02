import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import ReactGA from "react-ga";

import "./styles.css";

ReactGA.initialize("UA-143175874-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const rootElement = document.getElementById("root");
ReactDOM.render(<Layout />, rootElement);
