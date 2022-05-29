import styled from "styled-components";

export const ChatItemContainer = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 1vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 1rem 0.8rem;
  position: relative;
`;

export const ChatTitle = styled.h4`
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  font-size: 0.9rem;
  color: #424242;
`;

export const ChatSubTitle = styled.caption`
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

export const Badge = styled.div`
  background-color: #f50;
  position: absolute;
  border-radius: 50%;
  height: 1vh;
  width: 1vh;
  top: -2.5%;
  left: 98%;
`;
