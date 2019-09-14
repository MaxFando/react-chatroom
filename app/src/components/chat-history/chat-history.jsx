import React from "react";

import "./chat-history.css";

const ChatHistory = props => {
  const { elementsList } = props;

  return (
    <div className="chat-history">
      <ul>
        <List elements={elementsList} />
      </ul>
    </div>
  );
};

const List = props => {
  const { elements } = props;

  const content = elements.map(elem => {
    return (
      <li key={elem.id}>
        <MessageData elem={elem} />
        <Message elem={elem} />
      </li>
    );
  });
  return content;
};

const MessageData = props => {
  const { elem } = props;

  let className = "message-data";
  if (true) {
    className += " align-right";
  }

  return (
    <div className={className}>
      <span className="message-data__time">{elem.date}</span>
      <span className="message-data__username">{elem.username}</span>
    </div>
  );
};

const Message = props => {
  const { elem } = props;

  return <div className="message">{elem.msg}</div>;
};

export default ChatHistory;
