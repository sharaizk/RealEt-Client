import React, { useState, useEffect } from "react";
import { ChatScreenContainer, OpenChatBar } from "./ChatScreenElements";
import ChatList from "Components/LayoutComponents/ChatList";
import ChatContent from "Components/LayoutComponents/ChatContent";
import { GrChatOption } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { resetChatroom } from "Redux/actions/chatActions";
const ChatScreen = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetChatroom());
  }, [dispatch]);
  return (
    <ChatScreenContainer>
      <OpenChatBar onClick={() => setOpen(!isOpen)}>
        <GrChatOption color="#fff" size={16} />
      </OpenChatBar>
      <ChatList isOpen={isOpen} setOpen={setOpen} />
      {!isOpen && <ChatContent />}
    </ChatScreenContainer>
  );
};

export default ChatScreen;
