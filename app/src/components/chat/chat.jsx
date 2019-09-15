import React from "react";
import ChatList from "../chat-list";
import ChatRoom from "../chat-room";

import "./chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <ChatList />
      <ChatRoom />
    </div>
  );
};

export default Chat;
