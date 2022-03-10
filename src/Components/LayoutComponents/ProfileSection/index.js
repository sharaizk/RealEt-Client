import React from "react";
import {
  CardContainer,
  ProfileContainer,
  EditFormContainer,
} from "./ProfileElements";
import ProfileCard from "../../CustomComponents/ProfileCard";
const ProfileSection = () => {
  return (
    <ProfileContainer>
      <CardContainer>
        <ProfileCard />
        <EditFormContainer>S</EditFormContainer>
      </CardContainer>
    </ProfileContainer>
  );
};

export default ProfileSection;
