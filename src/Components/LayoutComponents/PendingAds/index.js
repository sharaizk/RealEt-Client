import React, { useState } from "react";
import { Table, Divider } from "antd";
import { pendingAdsColumn } from "helpers/Dashboard";
import { PostedAdsContainter, Title } from "./Elements";
import { useQuery } from "react-query";
import { getToken } from "Redux/localstorage";
import server from "../../../Axios";

const PendingAds = () => {
  const token = getToken();
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 4;
  const { data: propertyData, isLoading } = useQuery(
    ["Pending Ads", pageNumber],
    async () => {
      const postedAdsResponse = await server.get("/ads/myAds", {
        headers: {
          "x-access-token": token,
        },
        params: {
          count: false,
          status: "pending",
          status2: "flagged",
          limit: limit,
          page: pageNumber,
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
        pagination={{
          defaultCurrent: 1,
          total: propertyData?.totalAds || 1,
          current: pageNumber,
          pageSize: limit,
          defaultPageSize: limit,
          pageSizeOptions: [],
          onChange: (val) => setPageNumber(val),
        }}
      />
    </PostedAdsContainter>
  );
};

export default PendingAds;
