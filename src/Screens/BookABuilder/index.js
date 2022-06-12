import React, { useState } from "react";
import {
  BuilderScreenContainer,
  AdvanceSearchContainer,
  PageTtile,
  BuilderCardContainer,
  Title,
  CardsContainer,
  PaginationContainor,
} from "./Elements";
import AdvanceSearchField from "Components/CustomComponents/advanceSearch";
import { useQuery } from "react-query";
import server from "../../Axios";
import BuilderCard from "Components/LayoutComponents/BuilderCard";
import { Divider } from "antd";
import { Pagination } from "antd";
const BookABuilder = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParam, setSearchParam] = useState({
    city: null,
    location: null,
  });
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
