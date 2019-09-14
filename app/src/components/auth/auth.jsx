import React from "react";
import { withRouter } from "react-router-dom";
import User from "../../models/User";

import uuid from "uuid";

import "./auth.css";

const Auth = props => {
  const { setUsername, username } = props;

  return (
    <form className="auth">
      <label>Enter Your Username</label>
      <input type="text" onChange={e => setUsername(e.target.value)} />
      <AuthButton username={username} />
    </form>
  );
};

const AuthButton = withRouter(({ history, username }) => {
  const id = uuid.v4();

  return (
    <button
      onClick={() => {
        const user = new User(id, username);

        return history.push("/chatroom", { username });
      }}
    >
      Join
    </button>
  );
});

export default Auth;
