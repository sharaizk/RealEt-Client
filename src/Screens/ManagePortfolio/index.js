import React, { useState, useEffect } from "react";
import {
  ManagePortfolioContainer,
  ScreenTitle,
  AddPortfolioBtn,
  View,
  DelBtn,
} from "./PortfolioElements";
import { Divider } from "antd";
import { MdAdd } from "react-icons/md";
import { Modal, Table } from "antd";
import AddPortfolio from "Components/LayoutComponents/Forms/AddPortfolio";
import { portfolioColumn } from "helpers/Dashboard";
import { useQuery } from "react-query";
import server from "../../Axios";
import { getToken } from "Redux/localstorage";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const ManagePortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [adPortfolio, setAdPortfolio] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 4;
  const { userId } = useSelector((state) => state.auth);

  const { data: portfolioData, isLoading } = useQuery(
    ["Portfolio", userId, pageNumber],
    async () => {
      const portfolioResponse = await server.get("/portfolio/myPortfolio", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        params: {
          page: pageNumber,
          limit: limit,
        },
      });
      return {
        data: portfolioResponse.data.data,
        count: portfolioResponse.data.count,
      };
    }
  );
  const dataSource = portfolioData
    ? portfolioData.data?.map((portfolio) => {
        return {
          ...portfolio,
          view: (
            <View key={portfolio._id} to={`/`}>
              View
            </View>
          ),
          delete: (
            <DelBtn>
              <MdDelete
                // onClick={() => setAdDelete(property?._id)}
                size={20}
                color="#ff3333"
              />
            </DelBtn>
          ),
        };
      })
    : [];
  return (
    <ManagePortfolioContainer>
      <Modal
        onCancel={() => setAdPortfolio(false)}
        footer={null}
        centered
        visible={adPortfolio}
        title="Add Portfolio"
      >
        <AddPortfolio
          setModal={setAdPortfolio}
          portfolioCurrentPage={pageNumber}
          limit={limit}
          portfolioCount={portfolioData?.data.length}
        />
      </Modal>
      <ScreenTitle>My Portfolio</ScreenTitle>
      <Divider />
      <AddPortfolioBtn onClick={() => setAdPortfolio(true)}>
        <MdAdd />
        Add Portfolio
      </AddPortfolioBtn>
      <Table
        loading={isLoading}
        columns={portfolioColumn}
        dataSource={dataSource}
        key={portfolioData?.data._id}
        pagination={{
          defaultCurrent: 1,
          total: portfolioData?.count,
          current: pageNumber,
          pageSize: limit,
          defaultPageSize: limit,
          pageSizeOptions: [],
          onChange: (val) => setPageNumber(val),
        }}
      />
    </ManagePortfolioContainer>
  );
};

export default ManagePortfolio;
