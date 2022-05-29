import React from "react";
import {
  ChatListContainer,
  ChatListHeading,
  ChatListSearch,
} from "./ChatListElements";
import ChatListItem from "../ChatListItems.js";
const ChatList = ({ isOpen, setOpen }) => {
  return (
    <ChatListContainer $isOpen={isOpen}>
      <ChatListHeading>
        <h2>Chats</h2>
      </ChatListHeading>
      <ChatListSearch>
        <input type="text" placeholder="search" />
      </ChatListSearch>
      <ChatListItem onClick={() => {}} />
    </ChatListContainer>
  );
};

export default ChatList;
