import React from "react";
import { Progress } from "antd";
import { BarContainer } from "./Elements";
const DashboardBar = ({ title, percentage, value }) => {
  return (
    <BarContainer>
      <Progress
        type="dashboard"
        format={(percent) => value}
        percent={percentage}
        trailColor="#adabab"
        strokeColor={"#fd6e21"}
      />
      <span>{title}</span>
    </BarContainer>
  );
};

export default DashboardBar;
