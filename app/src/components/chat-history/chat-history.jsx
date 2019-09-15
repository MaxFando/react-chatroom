import React from "react";

import "./chat-history.css";

const ChatHistory = () => {
  return (
    <div className="chat-history">
      <ul>
        <li className="clearfix">
          <div className="message-data align-right">
            <span className="message-data-time">10:10 AM, Today</span>
            <span className="message-data-name">Olia</span>
          </div>
          <div className="message other-message float-right">
            Hi Vincent, how are you? How is the project coming along?
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ChatHistory;
