import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import socketClient from "socket.io-client";
import * as actions from "../../store/messages/actions";

import "./chat-history.css";

const ChatHistory = () => {
  const [chatroomMessages, setChatroomMessages] = useState([]);

  const endpoint = "http://localhost:3001";
  const socket = socketClient(endpoint);

  useEffect(() => {
    socket.on("chat_message", data => {
      setChatroomMessages(prevState => [...prevState, data]);
    });

    return () => {
      socket.off();
    };
  }, [chatroomMessages]);

  let content;
  if (!chatroomMessages.length) {
    content = <li>Empty</li>;
  } else {
    content = chatroomMessages.map(msg => {
      const { id, message, username, time } = msg;

      return (
        <li key={id}>
          <div className="message-data align-right">
            <span className="message-data-time">{time}</span>
            <span className="message-data-name">{username}</span>
          </div>
          <div className="message other-message float-right">{message}</div>
        </li>
      );
    });
  }

  return (
    <div className="chat-history">
      <ul>{content}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actions
)(ChatHistory);
