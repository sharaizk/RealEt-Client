import React from "react";
import { ChatItemContainer, ChatTitle, ChatSubTitle, Badge } from "./Elements";
import { Avatar, Row, Col } from "antd";
const ChatListItem = ({setOpen,chatRoomTitle,role,chatRoomImg,badge}) => {
  return (
    <ChatItemContainer onClick={() => {
      setOpen(false)
    }}>
      {badge && (
        <Badge></Badge>
      )}
      <Row>
        <Col span={6}>
          <Avatar src={chatRoomImg} />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={24}>
              <ChatTitle>{chatRoomTitle}</ChatTitle>
            </Col>
            <Col span={24}>
              <ChatSubTitle>{role}</ChatSubTitle>
            </Col>
          </Row>
        </Col>
      </Row>
    </ChatItemContainer>
  );
};

export default ChatListItem;
