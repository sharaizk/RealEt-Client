import styled from "styled-components";

export const PropertyListContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding-top: 80px;
  background-color: #fff;

  @media screen and (max-height: 700px) {
    height: 100%;
  }
`;
