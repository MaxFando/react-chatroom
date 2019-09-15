import React from "react";

const ChatHistory = () => {
  return (
    <div className="chat-history">
      <ul>
        <li class="clearfix">
          <div class="message-data align-right">
            <span class="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
            <span class="message-data-name">Olia</span>{" "}
            <i class="fa fa-circle me"></i>
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
