import React from "react";
import { Table, Divider } from "antd";
import { adsPostColumn } from "helpers/Dashboard";
import { PostedAdsContainter, Title, View } from "./Elements";
import { useQuery } from "react-query";
import { getToken } from "Redux/localstorage";
import server from "../../../Axios";

const PostedAds = () => {
  const token = getToken();
  const { data: propertyData, isLoading } = useQuery("Posted Ads", async () => {
    const postedAdsResponse = await server.get("/ads/myAds", {
      headers: {
        "x-access-token": token,
      },
      params: {
        count: false,
        status: "approved",
      },
    });
    return postedAdsResponse.data;
  });
  const dataSource = propertyData
    ? propertyData.data?.map((property) => {
        return {
          ...property,
          view: <View to={`/property-detail/${property._id}`}>View</View>,
        };
      })
    : [];
  return (
    <PostedAdsContainter>
      <Title>Posted Ads</Title>
      <Divider />
      <Table
        loading={isLoading}
        columns={adsPostColumn}
        dataSource={dataSource}
        pagination={false}
      />
    </PostedAdsContainter>
  );
};

export default PostedAds;
