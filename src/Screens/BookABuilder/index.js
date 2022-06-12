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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((builder, i) => {
              return <BuilderCard key={i} />;
            })}
          </CardsContainer>
          <PaginationContainor>
            <Pagination defaultCurrent={1} total={50} />
          </PaginationContainor>
        </BuilderCardContainer>
      )}
    </BuilderScreenContainer>
  );
};

export default BookABuilder;
