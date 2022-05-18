import React, { useState } from "react";
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
  PriceTag,
  InfoDetail,
  Description,
  PropertyUl,
  StyledLoader,
  PosterContainer,
  ProfileImage,
  ProfileDetail,
  ContactBtn,
  ViewTourBtn,
  TourModal,
} from "./Elements";
import Map from "Components/CustomComponents/Map";
import { Breadcrumb, Divider, Image, Modal } from "antd";
import { NavLink, useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import ListSideBar from "Components/CustomComponents/ListSideBar";
import { useQuery } from "react-query";
import { PriceConvertor } from "helpers/PriceHelpers";
import {AiOutlineClose} from 'react-icons/ai'
import ReactHtmlParser from "react-html-parser";
import server from "../../Axios";

const SingleProperty = () => {
  const [viewTour, setViewTour] = useState(false);
  const { propertyid } = useParams();

  const { data: propertyData, isLoading: propertyLoading } = useQuery(
    ["Ad Detail", propertyid],
    async () => {
      const adDetail = await server.get(`/ads/single-property/${propertyid}`);
      return adDetail.data.data;
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

  const images = propertyData.photos.map((photo) => {
    return {
      original: photo,
      originalHeight: "auto",
      originalWidth: "100%",
    };
  });

  // const ViewTourModal = () => {
  //   return (

  //   )
  // }

  return (
    <MainContainer>
      <Modal
        footer={null}
        maskStyle={{ backgroundColor: "rgba(0,0,0,0.9)" }}
        centered
        visible={viewTour}
        bodyStyle={{padding:0,margin:0}}
        onCancel={() => setViewTour(false)}
        closeIcon={<AiOutlineClose color="#fff" size={20}/>}
      >
        <TourModal>S</TourModal>
      </Modal>
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
          <SectionTitle>{propertyData?.title}</SectionTitle>
          <TitleSubtitle>{propertyData?.location_data?.name}</TitleSubtitle>
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
                <InfoTitle>Price:</InfoTitle>
                <PriceTag>{PriceConvertor(propertyData?.info?.price)}</PriceTag>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Property Type:</InfoTitle>
                <InfoDetail>{propertyData?.type}</InfoDetail>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Property Category:</InfoTitle>
                <InfoDetail>{propertyData?.propertySubType}</InfoDetail>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Status:</InfoTitle>
                <InfoDetail>{propertyData?.propertyIntent}</InfoDetail>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Area:</InfoTitle>
                <InfoDetail>
                  {propertyData?.info?.size} {propertyData?.info?.unit}
                </InfoDetail>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Virtual Tour:</InfoTitle>
                <InfoDetail>NA</InfoDetail>
              </InfoRow>
              <InfoRow>
                <InfoTitle>Status:</InfoTitle>
                <InfoDetail>Verified</InfoDetail>
              </InfoRow>
              <Divider />

              {propertyData?.virtualTour.length <= 0 && (
                <ViewTourBtn onClick={() => setViewTour(true)}>
                  View Virtual Tour
                </ViewTourBtn>
              )}
            </SummarySection>
            <DescriptionSection>
              <SectionTitle>Property Description</SectionTitle>
              <Divider />
              <Description>
                {ReactHtmlParser(propertyData?.description)}
              </Description>
              <Divider />

              <SectionTitle>Utitlites</SectionTitle>
              <PropertyUl>
                {propertyData?.info?.utilities.map((utility, i) => {
                  return <li key={i}>{utility}</li>;
                })}
              </PropertyUl>
              <Divider />
              <SectionTitle>Features</SectionTitle>
              <PropertyUl>
                {propertyData?.info?.features.map((feature, i) => {
                  return <li key={i}>{feature}</li>;
                })}
              </PropertyUl>
              <Divider />
              <SectionTitle>Map</SectionTitle>
              <Map
                coordinates={{
                  lng: propertyData?.location_data?.longitude,
                  lat: propertyData?.location_data?.latitude,
                  zoom: 12,
                }}
              />
              <Divider />
              <SectionTitle>Posted By</SectionTitle>

              <PosterContainer>
                <ProfileImage>
                  <Image src={propertyData?.userId.profileImage} />
                </ProfileImage>
                <ProfileDetail>
                  <InfoRow>
                    <InfoTitle>Name:</InfoTitle>
                    <InfoDetail>{propertyData?.userId.fullName}</InfoDetail>
                  </InfoRow>
                  <InfoRow>
                    <InfoTitle>Role:</InfoTitle>
                    <InfoDetail>{propertyData?.userId.role}</InfoDetail>
                  </InfoRow>
                  <InfoRow>
                    <InfoTitle>Email:</InfoTitle>
                    <InfoDetail>{propertyData?.userId.email}</InfoDetail>
                  </InfoRow>
                  <InfoRow>
                    <InfoTitle>Phone:</InfoTitle>
                    <InfoDetail>
                      {propertyData?.userId.phone
                        ? propertyData?.userId.phone
                        : "N/A"}
                    </InfoDetail>
                  </InfoRow>
                  <ContactBtn>Contact Poster</ContactBtn>
                </ProfileDetail>
              </PosterContainer>
            </DescriptionSection>
          </DetailSection>
        </ListSection>

        <ListSideBar />
      </PropertySection>
    </MainContainer>
  );
};

export default SingleProperty;
