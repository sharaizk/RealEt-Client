import styled from "styled-components";

export const NewsContainer = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  height: 100%;
  min-height: 85vh;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  @media screen and (min-width: 2500px) {
    min-height: 55vh;
    
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

export const ListContainer = styled.div`
    flex: 0.9;
    width: 1300px;
    max-width: 100%;
    color: #545454;
 
`
