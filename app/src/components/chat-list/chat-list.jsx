import React from "react";

const ChatList = () => {
  return (
    <div className="chat-list">
      <div className="search-pannel">
        <input type="text" placeholder="search" />
        <i class="fa fa-search"></i>
      </div>
      <ul className="list">
        <li>
          <div className="about">
            <div className="name">Vincent Porter</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ChatList;
