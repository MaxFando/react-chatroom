import React, { useState, useEffect } from "react";
import ChatMessage from "../chat-message";
import ChatHistory from "../chat-history";
import ChatList from "../chats-list";

import socketIOClient from "socket.io-client";
import uuid from "uuid";

import "./chatroom.css";

const Chatroom = props => {
  const endpoint = "http://localhost:3001";
  const socket = socketIOClient(endpoint);
  const { username } = props.location.state;

  const [value, setValue] = useState("");
  const [elementsList, setElementsList] = useState([]);

  useEffect(() => {
    socket.on("chat_message", data => {
      elementsList.push(data);
    });

    return () => {
      socket.emit("disconnect");
    };
  }, [elementsList]);

  const handleSubmit = () => {
    const id = uuid.v4();
    const messageData = {
      id,
      msg: value,
      username,
      date: `${new Date().getHours()}:${new Date().getMinutes()}${
        new Date().getHours() >= 12 ? "PM" : "AM"
      }`
    };

    const socket = socketIOClient(endpoint);
    socket.emit("chat_message", messageData);

    setElementsList(elementsList => {
      elementsList.push({ id: uuid.v4(), username, msg: value });

      return elementsList;
    });

    setValue("");

    return false;
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className="chatroom">
      <ChatList />
      <ChatHistory elementsList={elementsList} />
      <ChatMessage onSubmit={handleSubmit} onChange={handleChange} />
    </div>
  );
};

export default Chatroom;
