import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

import * as reducers from "./store/reducers";
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
