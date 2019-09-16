import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/user/actions";
import uuid from "uuid";

const Auth = ({ createUser }) => {
  const id = uuid.v4();
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createUser({ name, id });
  };

  return (
    <div className="auth">
      <form>
        <label htmlFor="">Enter your name</label>
        <input
          className="auth__input"
          type="text"
          onChange={e => setName(e.target.value)}
        />
        <AuthButton handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

const AuthButton = withRouter(({ history, handleSubmit }) => {
  return (
    <button
      className="auth__button"
      type="submit"
      onClick={e => {
        handleSubmit(e);
        history.push("/chat/");
      }}
    >
      Join
    </button>
  );
});

const mapStateToProps = state => {
  return state;
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(Auth)
);
