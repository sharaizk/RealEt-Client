import React, { useState } from "react";
import { ChatScreenContainer, OpenChatBar } from "./ChatScreenElements";
import ChatList from "Components/LayoutComponents/ChatList";
import ChatContent from "Components/LayoutComponents/ChatContent";
import { GrChatOption } from "react-icons/gr";
const ChatScreen = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <ChatScreenContainer>
      <OpenChatBar onClick={() => setOpen(!isOpen)}>
        <GrChatOption color="#fff" size={16} />
      </OpenChatBar>
      <ChatList isOpen={isOpen} setOpen={setOpen} />
      <ChatContent />
    </ChatScreenContainer>
  );
};

export default ChatScreen;
