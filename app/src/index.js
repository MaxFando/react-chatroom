import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

import * as reducers from "./store/reducers";
const store = createStore(combineReducers(reducers));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
