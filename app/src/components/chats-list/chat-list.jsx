import React from "react";
import SearchPannel from "../search-pannel";

import "./chat-list.css";

const ChatList = () => {
  return (
    <div className="chat-list">
      <SearchPannel />
      <ul className="list"></ul>
    </div>
  );
};

export default ChatList;
