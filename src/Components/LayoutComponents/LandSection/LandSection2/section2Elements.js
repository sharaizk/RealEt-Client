import styled from "styled-components";
export const FeaturedContainer = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;

  position: relative;
  z-index: 1;
  overflow-x: hidden;
  @media screen and (min-width: 2500px) {
    height: 70vh;
  }
`;

export const CaptionContainer = styled.div`
  flex: 0.1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SectionHead = styled.h3`
  font-size: 2.25rem;
  font-weight: 500;
  color: #424242;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 1.25rem;
  }
`;
export const SectionSubHead = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #545454;
  font-weight: 400;
  @media screen and (max-width: 280px) {
    font-size: 0.85rem;
  }
`;
export const CarouselContainer = styled.div`
  flex: 1;
  width: 1100px;
  max-width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 2560px) {
    width: 1500px;
  }
`;
export const ArrowComponents = styled.button`
  color: #fc6e20;
  width: 2.5%;
  outline: none;
  border: none;
  background-color: transparent;
`;
