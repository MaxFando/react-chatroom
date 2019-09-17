import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import socketClient from "socket.io-client";
import * as actions from "../../store/messages/actions";

import "./chat-history.css";

const ChatHistory = ({ fetchData, isLoading, messages }) => {
  const [chatroomMessages, setChatroomMessages] = useState([]);

  const url = "http://localhost:3001";
  const socket = socketClient(url);

  useEffect(() => {
    fetchData(`${url}/messages`);
  }, []);

  useEffect(() => {
    socket.on("chat_message", data => {
      setChatroomMessages(prevState => [...prevState, data]);
    });

    return () => {
      socket.off();
    };
  }, [chatroomMessages]);

  if (isLoading) {
    return (
      <div className="chat-history">
        <p>Loading..</p>
      </div>
    );
  }

  let content;
  if (!messages.length) {
    content = <li>Empty</li>;
  } else {
    content = messages.map(msg => {
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
  return {
    messages: state.items,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(actions.messagesFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHistory);
