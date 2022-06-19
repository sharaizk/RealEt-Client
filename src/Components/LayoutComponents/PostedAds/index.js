import React, { useState } from "react";
import { Table, Divider, Modal } from "antd";
import { adsPostColumn } from "helpers/Dashboard";
import { PostedAdsContainter, Title, View } from "./Elements";
import { useMutation, useQuery } from "react-query";
import { getToken } from "Redux/localstorage";
import server from "../../../Axios";

const PostedAds = () => {
  const token = getToken();
  const [pageNumber, setPageNumber] = useState(1);
  const [adDelete, setAdDelete] = useState("");
  const limit = 4;
  const {
    data: propertyData,
    isLoading,
    refetch,
  } = useQuery(["Posted Ads", pageNumber], async () => {
    const postedAdsResponse = await server.get("/properties/myAds", {
      headers: {
        "x-access-token": token,
      },
      params: {
        count: false,
        status: "approved",
        page: pageNumber,
        limit: limit,
      },
    });
    return postedAdsResponse.data;
  });

  const { mutate, isLoading: deletionLoading } = useMutation(
    async () => {
      const deleteAdResponse = await server.put(
        `/ads/update/${adDelete}`,
        {
          deleteFlag: true,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      return deleteAdResponse.data;
    },
    {
      onSuccess: (values) => {
        setAdDelete("");
        refetch();
      },
    }
  );

  const dataSource = propertyData
    ? propertyData.data?.map((property) => {
        return {
          ...property,
          view: (
            <View key={property._id} to={`/property-detail/${property._id}`}>
              View
            </View>
          ),
        };
      })
    : [];
  return (
    <PostedAdsContainter>
      <Title>Posted Ads</Title>
      <Divider />
      <Modal
        title="Delete"
        visible={adDelete ? true : false}
        onCancel={() => setAdDelete("")}
        onOk={mutate}
        confirmLoading={deletionLoading}
      />
      <Table
        loading={isLoading}
        columns={adsPostColumn}
        dataSource={dataSource}
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

export default PostedAds;
