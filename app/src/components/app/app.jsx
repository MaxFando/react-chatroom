import React from "react";
import Auth from "../auth";
import Chat from "../chat";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Auth} />
        <Route path="/chat" component={Chat} />
      </div>
    </Router>
  );
};

export default App;
