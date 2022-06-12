import React from "react";

import { Card, Avatar } from "antd";

const BuilderCard = () => {
  const { Meta } = Card;
  return (
    <Card
      style={{
        height: "auto",
      }}
      hoverable
      bordered={true}
      size="small"
      cover={
        <img
          alt="example"
          style={{ border: "1px solid #f0f0f0" }}
          src="https://real-register.s3.me-south-1.amazonaws.com/665c0286b2213c828a1ca6fd2bf79b90-vector-real-estate-logo-design-concept-design.jpg"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default BuilderCard;
