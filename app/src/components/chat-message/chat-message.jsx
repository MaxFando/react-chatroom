import React from "react";

import "./chat-message.css";

const ChatMessage = props => {
  const { onChange, onSubmit } = props;
  return (
    <div className="chat-message">
      <textarea
        name="message-to-send"
        id="message-to-send"
        placeholder="Type your message"
        rows="3"
        onChange={onChange}
      ></textarea>
      <button onClick={onSubmit}>Send</button>
    </div>
  );
};

export default ChatMessage;
