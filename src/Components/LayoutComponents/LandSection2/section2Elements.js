import styled from "styled-components";
export const FeaturedContainer = styled.section`
  background-color: #FFF;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
  height: 90vh;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
`

export const FeaturedHead=styled.h3`
  font-size: 2.25rem;
  letter-spacing: 1%;
  color: #424242;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.5rem;
  }
`
export const CardContainer = styled.div`
  
`
