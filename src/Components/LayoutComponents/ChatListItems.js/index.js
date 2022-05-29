import React from "react";
import { ChatItemContainer, ChatTitle, ChatSubTitle, Badge } from "./Elements";
import { Avatar, Row, Col } from "antd";
const ChatListItem = () => {
  return (
    <ChatItemContainer>
      <Badge></Badge>
      <Row>
        <Col span={5}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Col>
        <Col span={17}>
          <Row>
            <Col span={24}>
              <ChatTitle>Sharaiz Khan</ChatTitle>
            </Col>
            <Col span={24}>
              <ChatSubTitle>Builder</ChatSubTitle>
            </Col>
          </Row>
        </Col>
      </Row>
    </ChatItemContainer>
  );
};

export default ChatListItem;
