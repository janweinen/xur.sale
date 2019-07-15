import * as firebase from "firebase/app";
import "firebase/database";
import Layout from "./components/Layout";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import "./styles.css";
import "./backgroundPattern.css";

ReactGA.initialize("UA-143175874-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const firebaseConfig = {
  apiKey: "AIzaSyDRVpJJYpLK-rfh_felc9vDNr8u3K_8WI0",
  authDomain: "theix-3b6ee.firebaseapp.com",
  databaseURL: "https://theix-3b6ee.firebaseio.com",
  projectId: "theix-3b6ee",
  storageBucket: "theix-3b6ee.appspot.com",
  messagingSenderId: "739280273977",
  appId: "1:739280273977:web:d0adee2748cd5460"
};
firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(<Layout />, rootElement);
