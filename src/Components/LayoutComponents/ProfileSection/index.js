import React from "react";
import {
  CardContainer,
  ProfileContainer,
  EditFormContainer,
  Card,
  CardTitle,
  CardContent,
} from "./ProfileElements";
import ProfileCard from "Components/CustomComponents/ProfileCard";
import { Row, Col, Spin } from "antd";
import DashboardBar from "Components/CustomComponents/DashboardBar";
import { useQuery } from "react-query";
import "./styles.scss";
import server from "../../../Axios";
import { getToken } from "Redux/localstorage";
import { useSelector } from "react-redux";
const ProfileSection = () => {
  const token = getToken();
  const { role, userId } = useSelector((state) => state.auth);
  const { data: adCountData, isLoading: adCountLoading } = useQuery(
    ["Ads Count", userId],
    async () => {
      const adsCount = await server.get("/ads/myAds", {
        headers: {
          "x-access-token": token,
        },
        params: {
          count: true,
        },
      });
      return adsCount.data;
    }
  );
  const total = role[0] === "Consumer" ? 3 : 100;
  const getPercentage = (value) => {
    return (100 * value) / total;
  };
  return (
    <ProfileContainer>
      <CardContainer>
        <ProfileCard />
        <EditFormContainer>
          {adCountLoading ? (
            <Spin spinning={adCountLoading} />
          ) : (
            <Row className="custom-antd-row" gutter={[16, 16]}>
              <Col span={24}>
                <Card>
                  <CardTitle>Ads</CardTitle>
                  <CardContent>
                    <DashboardBar
                      title={"Listed Ads"}
                      percentage={getPercentage(adCountData.listed)}
                      value={adCountData.listed}
                    />
                    <DashboardBar
                      title={"Non-Listed Ads"}
                      percentage={getPercentage(adCountData.nonListed)}
                      value={adCountData.nonListed}
                    />
                    <DashboardBar
                      title={"Unapproved Ads"}
                      percentage={getPercentage(adCountData.unApproved)}
                      value={adCountData.unApproved}
                    />
                  </CardContent>
                </Card>
              </Col>
              <Col span={24}>S</Col>
            </Row>
          )}
        </EditFormContainer>
      </CardContainer>
    </ProfileContainer>
  );
};

export default ProfileSection;
