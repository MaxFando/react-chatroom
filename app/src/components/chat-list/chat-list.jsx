import React from "react";
import SearchPannel from "../search-pannel";
import AddChat from "../add-chat";

import * as actions from "../../store/chatrooms/actions";
import { connect } from "react-redux";
import { mapStateToProps } from "../../store/helpers";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import uuid from "uuid";

import "./chat-list.css";

const ChatList = ({ addChatroom, chatrooms }) => {
  const addChat = () => {
    const id = uuid.v4();
    const data = { id, name: `Chatroom ${chatrooms.length + 1}` };

    addChatroom(data);
  };

  return (
    <div className="chat-list">
      <SearchPannel />
      <List chats={chatrooms} />
      <AddChat addChat={addChat} />
    </div>
  );
};

const List = ({ chats }) => {
  const content = chats.map(elem => {
    return (
      <li key={elem.id}>
        <Link
          to={`/chat/${elem.id}`}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <div className="about">
            <div className="name">{elem.name}</div>
          </div>
        </Link>
      </li>
    );
  });

  return <ul className="list">{content}</ul>;
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(ChatList)
);
