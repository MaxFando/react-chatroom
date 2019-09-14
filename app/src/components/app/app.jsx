import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chatroom from "../chatroom";
import Auth from "../auth";

import "./app.css";

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Auth setUsername={setUsername} username={username} />}
        />
        <Route path="/chatroom/" component={Chatroom} />
      </div>
    </Router>
  );
};

export default App;
