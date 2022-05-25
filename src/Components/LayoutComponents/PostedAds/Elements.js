import styled from "styled-components";
import { Link } from "react-router-dom";
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

export const View = styled(Link)`
  color: #fc6e20;
  &:hover {
    color: #fc6e20;
  }
`;

export const DelBtn = styled.button`
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ff3333;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
