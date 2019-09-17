import React from "react";
import ChatList from "../chat-list";
import ChatRoom from "../chat-room";

import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./chat.css";

const Chat = ({ location, user }) => {
  const isChoosed = location.pathname.split("/").length === 3 ? true : false;
  const content = isChoosed ? <ChatRoom /> : <h1>First choose a chat</h1>;
  if (!user.id) {
    return <Redirect to={{ pathname: "/", state: { from: location } }} />;
  }

  return (
    <div className="chat">
      <ChatList />
      {content}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps)(Chat));
