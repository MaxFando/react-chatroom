import React from "react";
import ChatHeader from "../chat-header";
import ChatHistory from "../chat-history";
import ChatMesssage from "../chat-message";

const ChatRoom = () => {
  return (
    <div className="chat-room">
      <ChatHeader />
      <ChatHistory />
      <ChatMesssage />
    </div>
  );
};

export default ChatRoom;
