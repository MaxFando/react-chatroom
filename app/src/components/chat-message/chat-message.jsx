import React from "react";
import { connect } from "react-redux";
import socketClient from "socket.io-client";
import uuid from "uuid";

import "./chat-message.css";

import * as actions from "../../store/messages/actions";

const ChatMessage = ({ addMessage }) => {
  const endpoint = "http://localhost:3001";
  const handleSubmit = e => {
    e.preventDefault();

    const id = uuid.v4();
    const socket = socketClient(endpoint);
    const message = document.querySelector("textarea").value;
    socket.emit("chat_message", { id, message });

    addMessage({ id, message });
  };

  return (
    <div className="chat-message clearfix">
      <textarea
        name="message-to-send"
        id="message-to-send"
        placeholder="Type your message"
        rows="3"
      ></textarea>
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(ChatMessage);
