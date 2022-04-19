import React from "react";
import { Table, Divider } from "antd";
import { pendingAdsColumn } from "helpers/Dashboard";
import { PostedAdsContainter, Title } from "./Elements";
import { useQuery } from "react-query";
import { getToken } from "Redux/localstorage";
import server from "../../../Axios";

const PendingAds = () => {
  const token = getToken();
  const { data: propertyData, isLoading } = useQuery(
    "Pending Ads",
    async () => {
      const postedAdsResponse = await server.get("/ads/myAds", {
        headers: {
          "x-access-token": token,
        },
        params: {
          count: false,
          status: "unapproved",
        },
      });
      return postedAdsResponse.data;
    }
  );

  return (
    <PostedAdsContainter>
      <Title>Pending Ads</Title>
      <Divider />
      <Table
        loading={isLoading}
        columns={pendingAdsColumn}
        dataSource={propertyData?.data}
      />
    </PostedAdsContainter>
  );
};

export default PendingAds;
