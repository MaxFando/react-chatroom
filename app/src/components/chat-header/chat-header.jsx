import React from "react";

import "./chat-header.css";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div class="chat-about">
        <div class="chat-with">Chat with Vincent Porter</div>
        <div class="chat-num-messages">already 1 902 messages</div>
      </div>
    </div>
  );
};

export default ChatHeader;
