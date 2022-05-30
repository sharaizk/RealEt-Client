import React, { useEffect } from "react";
import {
  ChatContentContainer,
  ChatArea,
  TypeArea,
  TextField,
  SendBtn,
  ReceivedMsg,
  SentMsg,
  TimeStamp,
  InfoDiv,
} from "./ChatContentElements";

import { BiSend } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { newMessages } from "Redux/actions/chatActions";
import Pusher from "pusher-js";
const ChatContent = () => {
  const { activeChatRoomId } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!activeChatRoomId) return;
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });
    const channel = pusher.subscribe(activeChatRoomId);
    channel.bind("message-received", (data) => {
      dispatch(newMessages(data));
    });
  }, [activeChatRoomId,dispatch]);

  return (
    <ChatContentContainer>
      {activeChatRoomId ? (
        <>
          <ChatArea>
            <SentMsg>
              Hello I wanna buy this property
              <TimeStamp $color="#424242">Wednesday 24,2022</TimeStamp>
            </SentMsg>
            <ReceivedMsg>
              Hello
              <TimeStamp $color="#fff">Wednesday 24,2022</TimeStamp>
            </ReceivedMsg>
          </ChatArea>
          <TypeArea>
            <TextField />
            <SendBtn>
              <BiSend size={24} color="#42ba96" />
            </SendBtn>
          </TypeArea>
        </>
      ) : (
        <InfoDiv>😀Please Select a Chat</InfoDiv>
      )}
    </ChatContentContainer>
  );
};

export default ChatContent;
