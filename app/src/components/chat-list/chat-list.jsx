import React from "react";
import SearchPannel from "../search-pannel";

import "./chat-list.css";

const ChatList = () => {
  return (
    <div className="chat-list">
      <SearchPannel />
      <List />
    </div>
  );
};

const List = () => {
  return (
    <ul className="list">
      <li>
        <div className="about">
          <div className="name">Vincent Porter</div>
        </div>
      </li>
    </ul>
  );
};

export default ChatList;
