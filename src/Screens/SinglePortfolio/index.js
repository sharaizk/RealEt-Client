import React from "react";
import {
  LoadingContainer,
  MainContainer,
  CrumbContainer,
  PropertySection,
  ListSection,
  SectionTitle,
  TitleSubtitle,
  DetailSection,
  SummarySection,
  DescriptionSection,
  InfoRow,
  InfoTitle,
  InfoDetail,
  Description,
  StyledLoader,
} from "./Elements";
import { Breadcrumb, Divider } from "antd";
import { NavLink, useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { useQuery } from "react-query";

import ReactHtmlParser from "react-html-parser";
import server from "../../Axios";

const SingleProperty = () => {
  const { portfolioId } = useParams();
  const { data: portfolioData, isLoading: propertyLoading } = useQuery(
    ["Ad Detail", portfolioId],
    async () => {
      const adDetail = await server.get(`/portfolio/${portfolioId}`);
      return adDetail.data.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (propertyLoading) {
    return (
      <LoadingContainer>
        <StyledLoader
          active={propertyLoading}
          spinner
          text="Loading your content..."
        ></StyledLoader>
      </LoadingContainer>
    );
  }

  const images = portfolioData.photos.map((photo) => {
    return {
      original: photo,
      originalHeight: "auto",
      originalWidth: "100%",
    };
  });

  return (
    <MainContainer>
      <CrumbContainer>
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Property Detail</Breadcrumb.Item>
        </Breadcrumb>
      </CrumbContainer>
      <PropertySection>
        <ListSection>
          <SectionTitle>{portfolioData?.title}</SectionTitle>
          <TitleSubtitle>{portfolioData?.location_data?.name}</TitleSubtitle>
          <Divider />
          <ImageGallery
            autoPlay={false}
            items={images}
            showBullets
            showThumbnails={false}
          />
          <DetailSection>
            <SummarySection>
              <SectionTitle>Quick Summary</SectionTitle>
              <Divider />
              <InfoRow>
                <InfoTitle>Location:</InfoTitle>
                <InfoDetail>Lahore</InfoDetail>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Property Type:</InfoTitle>
                <InfoDetail>{portfolioData?.type}</InfoDetail>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Property Category:</InfoTitle>
                <InfoDetail>{portfolioData?.propertySubType}</InfoDetail>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Area:</InfoTitle>
                <InfoDetail>{portfolioData?.size}</InfoDetail>
              </InfoRow>
              <Divider />
            </SummarySection>
            <DescriptionSection>
              <SectionTitle>Property Description</SectionTitle>
              <Divider />
              <Description>
                {ReactHtmlParser(portfolioData?.description)}
              </Description>
              <Divider />
            </DescriptionSection>
          </DetailSection>
        </ListSection>
      </PropertySection>
    </MainContainer>
  );
};

export default SingleProperty;
