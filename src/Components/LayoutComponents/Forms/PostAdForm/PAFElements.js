import styled from "styled-components";
import { Button } from "antd";
export const FormTitle = styled.h4`
  font-size: 1.4rem;
  color: #424242;
  opacity: 0.75;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 0.7rem;
  }
`;

export const MoveContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  &:nth-child(0) {
    margin-right: 200px;
  }
`;

export const MoveBtn = styled(Button)`
  margin-right: 5px;
  background-color: #fc6e20;
  border: none;
  color: #ffff;
  box-shadow: none;
  border-radius: 5px;
  height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #fff;
    color: #fc6e20;
    border: 1px solid #fc6e20;
  }

  &:focus {
    background-color: #fc6e20;
    color: #ffff;
    border: none;
  }
`;
export const Error = styled.p`
  font-size: 0.8rem;
  color: #ff3333;
`;
