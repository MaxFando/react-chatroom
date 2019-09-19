import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./chat-header.css";

const ChatHeader = ({ chatrooms, location, messages }) => {
  const id = location.pathname.split("/")[2];
  const name = chatrooms.filter(chatroom => chatroom.id === id).name;

  return (
    <div className="chat-header">
      <div className="chat-about">
        <div className="chat-with">Chat {name}</div>
        <div className="chat-num-messages">
          already {messages.length} messages
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messagesReducer.messages,
    chatrooms: state.chatroomsReducer.chatrooms
  };
};

export default withRouter(connect(mapStateToProps)(ChatHeader));
