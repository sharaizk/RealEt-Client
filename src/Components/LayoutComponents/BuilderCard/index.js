import React from "react";

import { Card, Avatar, Row, Col, notification } from "antd";
import { AiOutlineMessage, AiOutlineFolderOpen } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import server from "../../../Axios";

const BuilderCard = ({
  logo,
  officeContact,
  officeName,
  status,
  avatar,
  receiver,
}) => {
  const { Meta } = Card;
  const { userId } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { mutate: chatMutate } = useMutation(
    async () => {
      if (!userId) {
        notification["error"]({
          message: "Can't chat right now",
          description: "Please login to chat with the seller",
        });
        return Promise.reject("FAILED");
      }
      const chatRoomResponse = await server.post("/chatroom/new-chatroom", {
        name: officeName,
        sender: userId,
        receiver: receiver,
      });
      return chatRoomResponse.data;
    },
    {
      onSuccess: () => {
        navigate("/dashboard/chats");
      },
    }
  );

  return (
    <Card
      style={{
        height: "auto",
      }}
      hoverable
      bordered={true}
      size="small"
      cover={
        <img alt="example" style={{ border: "1px solid #f0f0f0" }} src={logo} />
      }
      actions={[
        <AiOutlineMessage size={18} onClick={chatMutate} key="message" />,
        <AiOutlineFolderOpen size={18} key="portfolio" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={avatar} />}
        title={officeName}
        description={
          <>
            <Row>
              <Col span={24}>{officeContact}</Col>
              <Col span={24}>Lahore, Dha Phase 6</Col>
            </Row>
          </>
        }
      />
    </Card>
  );
};

export default BuilderCard;
