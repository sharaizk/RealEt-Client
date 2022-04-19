import styled from "styled-components";

export const PostedAdsContainter = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  & .ant-table-wrapper {
    width: 100%;
    margin-top: 1vh;
  }
  & .ant-table-container {
    overflow-y: auto;
  }
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #424242;
`;
