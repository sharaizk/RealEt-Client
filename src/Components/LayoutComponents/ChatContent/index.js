import React, { useEffect, useCallback, useState, useRef } from "react";
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
  ChatRoomBar,
  ChatTitle,
} from "./ChatContentElements";

import { BiSend } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { newMessages, reloadMessages } from "Redux/actions/chatActions";
import { useMutation } from "react-query";
import { getToken } from "Redux/localstorage";
import { Row, Col, Avatar, Spin } from "antd";
import server from "../../../Axios";
import Pusher from "pusher-js";
const ChatContent = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);
  const {
    activeChatRoomId,
    chatRoomMessages,
    receiver,
    chatRoomTitle,
    chatRoomImg,
  } = useSelector((state) => state.chat);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const saveMessage = useCallback(
    (message) => {
      dispatch(newMessages(message));
    },
    [dispatch]
  );

  const { mutate, status } = useMutation(
    async () => {
      const newMessageResponse = await server.post(
        "/message/new-message",
        {
          chatRoom: activeChatRoomId,
          message: message,
          sender: userId,
          receiver: receiver,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      return newMessageResponse;
    },
    {
      onSuccess: () => {
        setMessage("");
      },
    }
  );

  useEffect(() => {
    if (!activeChatRoomId || !dispatch) return;
    const loadMessages = async () => {
      setLoading(true);
      await dispatch(reloadMessages(activeChatRoomId));
      setLoading(false);
    };
    loadMessages();
  }, [activeChatRoomId, dispatch]);

  useEffect(() => {
    if (!activeChatRoomId) return;
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });
    const channel = pusher.subscribe(activeChatRoomId);
    channel.bind("message-received", (data) => {
      saveMessage(data);
    });

    return () => {
      pusher.unsubscribe(activeChatRoomId);
    };
  }, [activeChatRoomId, saveMessage]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <ChatContentContainer>
      {activeChatRoomId ? (
        <>
          <ChatArea ref={chatRef}>
            <ChatRoomBar>
              <Row style={{ width: "100%" }}>
                <Col
                  span={6}
                  xs={{ span: 6 }}
                  sm={{ span: 2 }}
                  xl={{ span: 2 }}
                  xxl={{ span: 2 }}
                >
                  <Avatar src={chatRoomImg} />
                </Col>
                <Col span={18}>
                  <Row>
                    <Col span={24}>
                      <ChatTitle>{chatRoomTitle}</ChatTitle>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ChatRoomBar>
            {loading && (
              <Spin
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                }}
              />
            )}
            {chatRoomMessages?.map((message, i) =>
              userId === message.sender ? (
                <SentMsg key={i}>
                  {message?.message}
                  <TimeStamp>
                    {new Date(message?.timeStamp).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </TimeStamp>
                </SentMsg>
              ) : (
                <ReceivedMsg key={i}>
                  {message?.message}
                  <TimeStamp>
                    {new Date(message?.timeStamp).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </TimeStamp>
                </ReceivedMsg>
              )
            )}
          </ChatArea>
          <TypeArea
            onSubmit={(e) => {
              e.preventDefault();
              mutate();
            }}
          >
            <TextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SendBtn type="submit">
              <Spin spinning={status === "isLoading" ? true : false}>
                <BiSend size={24} color="#42ba96" />
              </Spin>
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
