import React from "react";
import {
  ChatListContainer,
  ChatListHeading,
  ChatListSearch,
} from "./ChatListElements";
import ChatListItem from "../ChatListItems/index.js";
const ChatList = ({ isOpen, setOpen }) => {
  return (
    <ChatListContainer $isOpen={isOpen}>
      <ChatListHeading>
        <h2>Chats</h2>
      </ChatListHeading>
      <ChatListSearch>
        <input type="text" placeholder="search" />
      </ChatListSearch>
      <ChatListItem
        setOpen={setOpen}
        chatRoomTitle="Sharaiz Khan"
        role="Builder"
        chatRoomImg="https://joeschmoe.io/api/v1/random"
        badge={true}
      />
      <ChatListItem
        setOpen={setOpen}
        chatRoomTitle="Rehan Shakir"
        role="Agent"
        chatRoomImg="https://joeschmoe.io/api/v1/random"
        badge={false}
      />
      <ChatListItem
        setOpen={setOpen}
        chatRoomTitle="Tapa Tap"
        role="Agent"
        chatRoomImg="https://joeschmoe.io/api/v1/random"
        badge={false}
      />
      <ChatListItem
        setOpen={setOpen}
        chatRoomTitle="Hamza"
        role="Consumer"
        chatRoomImg="https://joeschmoe.io/api/v1/random"
        badge={false}
      />
      <ChatListItem
        setOpen={setOpen}
        chatRoomTitle="Muhammad Soban"
        role="Agent"
        chatRoomImg="https://joeschmoe.io/api/v1/random"
        badge={true}
      />
    </ChatListContainer>
  );
};

export default ChatList;
