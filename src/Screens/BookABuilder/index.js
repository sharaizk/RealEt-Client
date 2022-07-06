import React, { useState, useEffect } from "react";
import {
  BuilderScreenContainer,
  AdvanceSearchContainer,
  PageTtile,
  BuilderCardContainer,
  Title,
  CardsContainer,
  PaginationContainor,
  PortfolioContainer,
  PortfolioLink,
} from "./Elements";
import AdvanceSearchField from "Components/CustomComponents/advanceSearch";
import { useQuery } from "react-query";
import server from "../../Axios";
import BuilderCard from "Components/LayoutComponents/BuilderCard";
import { BsHouse } from "react-icons/bs";
import { Divider, Modal, Spin } from "antd";
import { Pagination } from "antd";
const BookABuilder = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [builderId, setBuilderId] = useState("");
  const [searchParam, setSearchParam] = useState({
    city: null,
    location: null,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: builders = {}, refetch: onSearchBuilders } = useQuery(
    ["builders", searchParam.city, searchParam.location, pageNumber],
    async () => {
      const searchedBuilders = await server.get("/builder/search", {
        params: {
          city: searchParam.city,
          location: searchParam.location,
          page: pageNumber,
          limit: 10,
        },
      });
      return searchedBuilders.data;
    },
    {
      enabled: false,
    }
  );

  const { data: portfolioData = [], isLoading } = useQuery(
    ["Portfolio", builderId],
    async () => {
      const portfolioResponse = await server.get(
        `/portfolio/builder/${builderId}`
      );
      return portfolioResponse.data;
    },
    {
      enabled: builderId ? true : false,
    }
  );

  console.log(portfolioData);

  return (
    <BuilderScreenContainer>
      <AdvanceSearchContainer
        height={!builders?.searchedBuilders ? "70vh" : "50vh"}
      >
        <PageTtile>
          Search, discover and hire verified Builders
          <br />
          for your property project.
        </PageTtile>
        <AdvanceSearchField
          search="builders"
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          onSearchBuilders={onSearchBuilders}
        />
      </AdvanceSearchContainer>
      {builders?.searchedBuilders && (
        <BuilderCardContainer>
          <Modal
            visible={builderId ? true : false}
            onCancel={() => setBuilderId("")}
            footer={null}
            title={"Portfolios"}
            centered
          >
            <Spin spinning={isLoading}>
              <PortfolioContainer>
                {portfolioData?.data?.map((portfolio) => (
                  <>
                    <PortfolioLink to={`/single-portfolio/${portfolio._id}`}>
                      <BsHouse size={20} />
                      <p>{portfolio.title}</p>
                    </PortfolioLink>
                  </>
                ))}
              </PortfolioContainer>
            </Spin>
          </Modal>
          <Divider>
            <Title>Searched Builders</Title>
          </Divider>
          <CardsContainer>
            {builders?.searchedBuilders?.map((builder, i) => {
              return (
                <BuilderCard
                  key={i}
                  logo={builder?.logo}
                  status={builder?.status}
                  officeContact={builder?.officeContact}
                  officeName={builder?.officeName}
                  avatar={builder.userId.profileImage}
                  receiver={builder._id}
                  setBuilderId={setBuilderId}
                  userId={builder?.userId?._id}
                />
              );
            })}
          </CardsContainer>
          <PaginationContainor>
            <Pagination
              defaultCurrent={1}
              onChange={(val) => setPageNumber(val)}
              current={pageNumber}
              total={builders?.totalBuilders || 1}
            />
          </PaginationContainor>
        </BuilderCardContainer>
      )}
    </BuilderScreenContainer>
  );
};

export default BookABuilder;
