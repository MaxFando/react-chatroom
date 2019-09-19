import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import socketClient from "socket.io-client";
import * as actions from "../../store/messages/actions";

import { getChatroomIdFromUrl } from "../../store/helpers";

import "./chat-history.css";

const ChatHistory = ({
  fetchData,
  isLoading,
  messages,
  location,
  addMessage
}) => {
  const url = "http://localhost:3001";
  const socket = socketClient(url);
  const chatroomId = getChatroomIdFromUrl(location);

  useEffect(() => {
    // fetchData(`${url}/messages/${chatroomId}`);
    socket.emit("creat_chatroom", chatroomId);
  }, []);

  useEffect(() => {
    socket.on("chat_message", data => {
      addMessage(data);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

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
      const { messageId: id, message, username, time } = msg;

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
    messages: state.messagesReducer.messages,
    isLoading: state.messagesReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(actions.messagesFetchData(url)),
    addMessage: payload => dispatch(actions.addMessage(payload))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatHistory)
);
