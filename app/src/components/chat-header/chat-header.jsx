import React from "react";

import "./chat-header.css";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="chat-about">
        <div className="chat-with">Chat with Vincent Porter</div>
        <div className="chat-num-messages">already 1 902 messages</div>
      </div>
    </div>
  );
};

export default ChatHeader;
