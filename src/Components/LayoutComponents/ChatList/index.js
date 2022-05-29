import React from "react";
import {
  ChatListContainer,
  ChatListHeading,
  ChatListSearch,
} from "./ChatListElements";
const ChatList = ({ isOpen, setOpen }) => {
  return (
    <ChatListContainer $isOpen={isOpen}>
      <ChatListHeading>
        <h2>Chats</h2>
      </ChatListHeading>
      <ChatListSearch>
        <input type="text" placeholder="search" />
      </ChatListSearch>
    </ChatListContainer>
  );
};

export default ChatList;
