import React from "react";
import {
  BuilderProfileContainer,
  MainProfile,
  ScreenTitle,
  MainContainer,
  Label,
  Verified,
  SpinnerContainer,
} from "./Elements";
import { Avatar, Image, Divider, Spin } from "antd";
import { useQuery } from "react-query";
import server from "../../Axios";
import { getToken } from "Redux/localstorage";
import { useSelector } from "react-redux";
const BuilderProfile = () => {
  const { userId, role, secondaryRole } = useSelector((state) => state.auth);
  const { data: builderProfileData, isLoading } = useQuery(
    ["Builder Profile", userId],
    async () => {
      const builderProfileResponse = await server.get("/builder/profile", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      return builderProfileResponse.data;
    }
  );
  return (
    <MainContainer>
      <ScreenTitle>Builder Profile</ScreenTitle>
      <Divider />
      {isLoading && (
        <SpinnerContainer>
          <Spin spinning={isLoading} />
        </SpinnerContainer>
      )}
      {!isLoading && (
        <BuilderProfileContainer>
          <MainProfile>
            <Avatar
              size={{ xs: 40, sm: 32, md: 64, lg: 64, xl: 100, xxl: 130 }}
              src={
                <Image
                  src={builderProfileData?.builder?.logo}
                  style={{ width: "100%" }}
                />
              }
              style={{ marginBottom: "1vh" }}
            />
            <div style={{ display: "flex" }}>
              <Label>Status:</Label>
              <Verified>Verified</Verified>
            </div>
            <Label>
              Office Name:
              <span>{builderProfileData?.builder?.officeName}</span>
            </Label>
            <Label>
              Office Contact:
              <span>{builderProfileData?.builder?.officeContact}</span>
            </Label>
            <Label>
              Role: <span>{role}</span>
            </Label>
            <Label>
              Secondary Role: <span>{secondaryRole}</span>
            </Label>
          </MainProfile>
        </BuilderProfileContainer>
      )}
    </MainContainer>
  );
};

export default BuilderProfile;
