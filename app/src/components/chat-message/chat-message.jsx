import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getChatroomIdFromUrl } from "../../store/helpers";
import socketClient from "socket.io-client";

import uuid from "uuid";

import "./chat-message.css";

import * as actions from "../../store/messages/actions";

const formatAMPM = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const strTime = hours + ":" + minutes + " " + ampm;

  return strTime;
};

const ChatMessage = ({ addMessage, user, location }) => {
  const endpoint = "http://localhost:3001";
  const socket = socketClient(endpoint);
  const chatroomId = getChatroomIdFromUrl(location);

  const handleSubmit = e => {
    e.preventDefault();

    const id = uuid.v4();
    const textarea = document.querySelector("textarea");
    const message = textarea.value;
    const username = user.name;
    const data = {
      id,
      message,
      username,
      time: formatAMPM(new Date()),
      chatroomId
    };

    socket.emit("chat_message", data);
    textarea.value = "";

    addMessage(data);
  };

  useEffect(() => {
    socket.emit("create_chatroom", chatroomId);
  }, []);

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
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMessage: data => dispatch(actions.addMessage(data))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChatMessage)
);
