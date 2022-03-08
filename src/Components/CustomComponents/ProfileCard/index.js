import React from "react";
import {
  ProfileContainer,
  Card,
  EditFormContainer,
  Name,
  PictureContainer,
  DetailContainer,
  Email,
  Verified,
  VerifiedContainer,
  UnVerified,
} from "./ProfileCardElements";

import { useSelector } from "react-redux";

import { Avatar, Image } from "antd";

const ProfileCard = () => {
  const { profileImage, fullName, email, otp } = useSelector(
    (state) => state.auth
  );
  const truncEmail =
    email.substring(0, 3) +
    "..." +
    email.substring(email.lastIndexOf("@") - 1 + 1);
  return (
    <ProfileContainer>
      <Card>
        <PictureContainer>
          <Avatar
            src={<Image src={profileImage} />}
            size={{ xs: 45, sm: 45, md: 65, lg: 40, xl: 60, xxl: 100 }}
          />
        </PictureContainer>
        <DetailContainer>
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
      </Card>
      <EditFormContainer>S</EditFormContainer>
    </ProfileContainer>
  );
};

export default ProfileCard;
