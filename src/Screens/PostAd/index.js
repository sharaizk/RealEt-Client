import React, { useEffect } from "react";
import {
  PostAddMainContainer,
  TitleDiv,
  BannerDiv,
  BannerImg,
  BannerDetails,
  BottomContainer,
  FormContainer,
  StyledLoader,
  LoadingContainer
} from "./PostElements";
import bannerImg from "../../assets/images/postedad.png";
import PostAdForm from "../../Components/LayoutComponents/Forms/PostAdForm";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import server from "../../Axios";
const AddProperty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  const isEdit = params?.propertyId ? true : false;
  const { data: propertyData = {},isLoading } = useQuery(
    ["Edit Ad Detail", params?.propertyId],
    async () => {
      const adDetail = await server.get(
        `/properties/single-property/${params?.propertyId}`
      );
      return adDetail.data.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      enabled: isEdit,
    }
  );
  if (isEdit && isLoading) {
    return (
      <LoadingContainer>
        <StyledLoader
          active={isLoading}
          spinner
          text="Loading your content..."
        ></StyledLoader>
      </LoadingContainer>
    )
  }
  return (
    <PostAddMainContainer>
      <TitleDiv>{isEdit?<p style={{margin:'0em'}}>Update Property</p> :<p>Add Property</p>}</TitleDiv>
      <BottomContainer>
        <BannerDiv>
          <BannerDetails>
            Sell or Rent out your property
            <br />
            <span>Enter your property details and publish your ad</span>
          </BannerDetails>
          <BannerImg src={bannerImg} alt="" />
        </BannerDiv>
        <FormContainer>
          <PostAdForm editData={propertyData} isEdit={isEdit} />
        </FormContainer>
      </BottomContainer>
    </PostAddMainContainer>
  );
};

export default AddProperty;
