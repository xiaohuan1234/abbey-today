import React from "react";// eslint-disable-line no-unused-vars
import ReactDOM from "react-dom";
import WebFont from 'webfontloader';
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

WebFont.load({
  google: {
    families: ['Montserrat:200,300,400,500,600,700', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
