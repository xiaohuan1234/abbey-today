import React from "react";// eslint-disable-line no-unused-vars
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";// eslint-disable-line no-unused-vars

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
    <div>
      <Navbar />
      <Main/>
      </div>
    </Router>
  </Provider>
);

export default App;