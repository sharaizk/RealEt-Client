import React from "react";
import { ChatItemContainer, ChatTitle, ChatSubTitle, Badge } from "./Elements";
import { Avatar, Row, Col } from "antd";
import { ChatRoomAnimation } from "utils/StepperAnimationConfiguration";
import { activateChatRoom } from "Redux/actions/chatActions";
import { useDispatch } from "react-redux";
const ChatListItem = ({
  setOpen,
  chatRoomTitle,
  role,
  secondaryRole,
  chatRoomImg,
  badge,
  chatRoomId,
  receiverId
}) => {
  const dispatch = useDispatch();
  return (
    <ChatItemContainer
      onClick={() => {
        setOpen(false);
        dispatch(activateChatRoom(chatRoomId,receiverId,chatRoomTitle,chatRoomImg));
      }}
      {...ChatRoomAnimation}
    >
      {badge && <Badge></Badge>}
      <Row style={{ width: "100%" }}>
        <Col
          span={6}
          xs={{ span: 6 }}
          sm={{ span: 2 }}
          xl={{ span: 6 }}
          xxl={{ span: 3 }}
        >
          <Avatar src={chatRoomImg} />
        </Col>
        <Col span={18}>
          <Row>
            <Col span={24}>
              <ChatTitle>{chatRoomTitle}</ChatTitle>
            </Col>
            <Col span={24}>
              <ChatSubTitle>
                {secondaryRole ? secondaryRole : role}
              </ChatSubTitle>
            </Col>
          </Row>
        </Col>
      </Row>
    </ChatItemContainer>
  );
};

export default ChatListItem;
