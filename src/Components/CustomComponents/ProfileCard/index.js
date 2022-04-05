import React from "react";
import {
  Card,
  Name,
  PictureContainer,
  DetailContainer,
  Email,
  Verified,
  VerifiedContainer,
  UnVerified,
} from "./ProfileCardElements";

import { useSelector } from "react-redux";
import { Avatar } from "antd";
import "./styles.scss";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProfileCard = () => {
  const { profileImage, fullName, email, otp } = useSelector(
    (state) => state.auth
  );
  const truncEmail =
    email.substring(0, 3) +
    "..." +
    email.substring(email.lastIndexOf("@") - 1 + 1);
  return (
    <Card variants={container} initial="hidden" animate="visible">
      {profileImage && (
        <>
          <PictureContainer variants={item}>
            <Avatar
              src={profileImage}
              size={{ xs: 45, sm: 45, md: 65, lg: 40, xl: 60, xxl: 100 }}
            />
          </PictureContainer>
          <DetailContainer variants={item}>
            <div>
              <Name>{fullName}</Name>
              <Email>{truncEmail}</Email>
            </div>
            <VerifiedContainer>
              {otp.status === false ? (
                <UnVerified>UnVerified</UnVerified>
              ) : (
                <Verified>Verified</Verified>
              )}
            </VerifiedContainer>
          </DetailContainer>
        </>
      )}
    </Card>
  );
};

export default ProfileCard;
