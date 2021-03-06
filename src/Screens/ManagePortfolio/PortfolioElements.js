import styled from "styled-components";
import { Link } from "react-router-dom";
export const ManagePortfolioContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & .ant-table-wrapper {
    width: 100%;
    margin-top: 1vh;
  }
  & .ant-table-container {
    overflow-y: auto;
  }
`;

export const ScreenTitle = styled.h3`
  font-size: 1.5rem;
  color: #424242;
  font-weight: 400;
`;

export const AddPortfolioBtn = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #f9a779;
  color: #fff;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    padding: 0.25rem 0.5rem;
  }
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
