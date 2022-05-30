import styled from "styled-components";

export const ChatScreenContainer = styled.div`
  background-color: #f4f3f8;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  display: flex;
  height: 100%;
  position: relative;
  overflow-y: hidden;
`;

export const OpenChatBar = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    background-color: #fc6e20;
    position: absolute;
    top: 50%;
    left: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem 0.5rem;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    z-index: 1;
  }
`;
