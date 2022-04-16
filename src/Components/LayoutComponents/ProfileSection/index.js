import React from "react";
import {
  CardContainer,
  ProfileContainer,
  EditFormContainer,
  Card,
  CardTitle,
  CardContent,
} from "./ProfileElements";
import ProfileCard from "../../CustomComponents/ProfileCard";
import { Row, Col } from "antd";
import DashboardBar from "../../../Components/CustomComponents/DashboardBar";
// import { useQuery } from "react-query";
import "./styles.scss";
const ProfileSection = () => {
  return (
    <ProfileContainer>
      <CardContainer>
        <ProfileCard />
        <EditFormContainer>
          <Row className="custom-antd-row" gutter={[16, 16]}>
            <Col span={24}>
              <Card>
                <CardTitle>Ads</CardTitle>
                <CardContent>
                  <DashboardBar
                    title={"Listed Ads"}
                    percentage={50}
                    value={2}
                  />
                  <DashboardBar
                    title={"Non-Listed Ads"}
                    percentage={25}
                    value={1}
                  />
                  <DashboardBar
                    title={"Unapproved Ads"}
                    percentage={0}
                    value={0}
                  />
                </CardContent>
              </Card>
            </Col>
            <Col span={24}>S</Col>
          </Row>
        </EditFormContainer>
      </CardContainer>
    </ProfileContainer>
  );
};

export default ProfileSection;
