import React, { useState } from "react";
import {
  PropertyListContainer,
  CrumbContainer,
  PropertySection,
  ListingSection,
  SectionTitle,
  CustomSelect,
  SelectOptions,
  ListContainer,
  CustomPagination,
} from "./Elements";
import { Breadcrumb, Divider, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { GrFormSearch } from "react-icons/gr";
import ListSideBar from "../../Components/CustomComponents/ListSideBar";
import PropertyList from "../../Components/CustomComponents/PropertyList";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import server from "../../Axios";
import SkeletonProperties from "../../Components/CustomComponents/SkeletonLoadings/SkeletonProperties";
const PropertyListing = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy, setSortBy] = useState("createdAt");
  const { city, location, propertySubType, propertyIntent } = useParams();
  const { data: propertyData, isLoading: properttLoading } = useQuery(
    ["Properties", city, location, propertySubType, pageNumber, sortBy],
    async () => {
      const propertyResponse = await server.get("/ads/list", {
        params: {
          city: city,
          propertyIntent: propertyIntent,
          location: location,
          propertySubType: propertySubType,
          page: pageNumber,
          limit: 10,
          sortBy: sortBy,
        },
      });
      return propertyResponse.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <PropertyListContainer>
      <CrumbContainer>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Property Listing</Breadcrumb.Item>
        </Breadcrumb>
      </CrumbContainer>
      <PropertySection>
        <ListingSection>
          <SectionTitle>Properties Listing</SectionTitle>
          <Divider />
          <Row align="flex-end" justify="space-between">
            <Col xs={2} sm={1} md={1}>
              <GrFormSearch size={27} />
            </Col>
            <Col xs={11} sm={18} md={18}>
              Search Results: {propertyData?.data?.length || 0}
            </Col>
            <Col span={10} sm={5}>
              <CustomSelect
                value={sortBy}
                onChange={(v) => setSortBy(v)}
                placeholder="Sort By"
                allowClear
              >
                <SelectOptions value="info.price">
                  Lowest Price First
                </SelectOptions>
                <SelectOptions value="-info.price">
                  Heighest Price First
                </SelectOptions>
                <SelectOptions value="createdAt">Date added</SelectOptions>
              </CustomSelect>
            </Col>
          </Row>
          <ListContainer
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {properttLoading ? (
              <SkeletonProperties />
            ) : (
              <PropertyList propertyData={propertyData?.data} />
            )}
          </ListContainer>
          <CustomPagination
            defaultCurrent={pageNumber}
            total={propertyData?.count || 1}
            onChange={(v) => setPageNumber(v)}
          />
        </ListingSection>
        <ListSideBar />
      </PropertySection>
    </PropertyListContainer>
  );
};

export default PropertyListing;
