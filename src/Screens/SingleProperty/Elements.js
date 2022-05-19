import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";
import ReactPannellum from 'react-pannellum'
export const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 80px 17vw 0 17vw;

  @media screen and (max-height: 700px) {
    height: 100%;
  }
  @media screen and (max-width: 1280px) {
    padding: 80px 5vw 0 5vw;
  }
  @media screen and (max-width: 1024px) {
    padding: 80px 5vw 0 5vw;
  }
  @media screen and (max-width: 768px) {
    padding: 80px 6vw 0 6vw;
  }
`;

export const LoadingContainer = styled.div`
  height: 100vh;
`;

export const CrumbContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5vh;
`;

export const PropertySection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ListSection = styled.div`
  flex: 0.75;
  height: 100%;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;
export const SectionTitle = styled.h4`
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: #545454;
  font-weight: 300;
`;

export const TitleSubtitle = styled.h5`
  width: 100%;
  font-size: 0.8rem;
  color: #878787;
  line-height: 0.8rem;
`;

export const DetailSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SummarySection = styled.div`
  flex: 0.3;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    flex: 1;
    width: 100%;

    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const DescriptionSection = styled.div`
  flex: 0.7;
  @media screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const InfoTitle = styled.label`
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 600;
`;
export const InfoDetail = styled.label`
  font-size: 0.8rem;
`;

export const PriceTag = styled.div`
  background-color: #fc6e20;
  color: #fff;
  padding: 4px 8px;
  border-radius: 5px;
  margin-top: auto;
  font-size: 0.8rem;
`;

export const Description = styled.p`
  font-size: 0.85rem;
  color: #5a5a5a;
`;
export const PropertyUl = styled.ul`
  display: grid;
  padding: 0 1rem;
  grid-template-columns: repeat(2, 1fr);
  & > li::marker {
    color: #fc6e20;
  }
`;
export const StyledLoader = styled(LoadingOverlay)`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  .MyLoader_overlay {
    background: rgba(255, 0, 0, 0.5);
  }
  &.MyLoader_wrapper--active {
    overflow: hidden;
  }
`;

export const PosterContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.div`
  flex: 0.3;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

export const ProfileDetail = styled.div`
  flex: 0.6;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const ViewTourBtn = styled.button`
  outline: none;
  border: 1px solid #fc6e20;
  width: 100%;
  margin: auto;
  padding: 0.5rem;
  color: #fc6e20;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.4s;
  &:hover{
    background-color: #fc6e20;
    color: #fff;
  }
`;

export const TourModal = styled.div`
  height: 85vh;
  width: 100%;
  background-color: rgba(0,0,0,0.9);
`

export const ContactBtn = styled.button`
  outline: none;
  border: none;
  width: 100%;
  margin: auto;
  padding: 1.25rem;
  color: #fff;
  background-color: #fc6e20;
  cursor: pointer;
  border-radius: 5px;
`;

export const StyledPannellum = styled(ReactPannellum)`
  width: 90vw !important;
  height: 90vh !important;
`
export const CustomModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.7);
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
`

export const ModalContent = styled.div`
  position: absolute;
  top: 2%;
  display: flex;
  flex-direction: column;
  left: 5%;

`