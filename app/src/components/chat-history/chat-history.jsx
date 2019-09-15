import React from "react";

import "./chat-history.css";

const ChatHistory = () => {
  return (
    <div className="chat-history">
      <ul>
        <li class="clearfix">
          <div class="message-data align-right">
            <span class="message-data-time">10:10 AM, Today</span>
            <span class="message-data-name">Olia</span>
          </div>
          <div class="message other-message float-right">
            Hi Vincent, how are you? How is the project coming along?
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ChatHistory;
