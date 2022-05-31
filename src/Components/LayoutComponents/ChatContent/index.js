import React, { useEffect, useCallback } from "react";
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
  const { activeChatRoomId, chatRoomMessages } = useSelector(
    (state) => state.chat
  );
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const saveMessage = useCallback(
    (message) => {
      dispatch(newMessages(message));
    },
    [dispatch]
  );
  useEffect(() => {
    if (!activeChatRoomId) return;
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });
    const channel = pusher.subscribe(activeChatRoomId);
    channel.bind("message-received", (data) => {
      saveMessage(data);
    });
  }, [activeChatRoomId, saveMessage]);
  return (
    <ChatContentContainer>
      {activeChatRoomId ? (
        <>
          <ChatArea>
            {chatRoomMessages?.map((message, i) =>
              userId === message.sender ? (
                <SentMsg>
                  {message?.message}
                  <TimeStamp>{message?.timeStamp}</TimeStamp>
                </SentMsg>
              ) : (
                <ReceivedMsg>
                  {message?.message}
                  <TimeStamp>{message?.timeStamp}</TimeStamp>
                </ReceivedMsg>
              )
            )}
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
