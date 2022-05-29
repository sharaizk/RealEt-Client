import styled, { keyframes } from "styled-components";

const animateIn = keyframes`
 0% { 
  width:0% ;
  opacity:0 ;
  }
 100% { 
     width:100% ;
     opacity:1 ;
  }
`;

const animateOut = keyframes`
 0% { 
    flex: 0.4;
     opacity:1 ;
  }
 100% { 
    flex: 0;
    width:0%;
    opacity:0 ;
  }
`;

export const ChatListContainer = styled.div`
  height: 100%;
  flex: 0.3;
  padding: 0 20px 0 0px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #d6d6d6;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }

  @media screen and (max-width: 768px) {
    flex: 1;
    flex-direction: column;
    animation-name: ${({ $isOpen }) => (!$isOpen ? animateOut : animateIn)};
    animation-duration: 1s;
    animation-iteration-count: 1;
    display: ${({ $isOpen }) => (!$isOpen ? "none" : "flex")};
    overflow: auto;
  }
  @media screen and (max-width: 480px) {
    padding: 0 10px 0 0px;
  }
  @media screen and (max-width: 360px) {
    padding: 0 5px 0 0px;
  }
`;

export const ChatListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatListSearch = styled.div`
  background-color: #e6e5ea;
  border-radius: 5px;
  & input {
    background-color: transparent;
    border: none;
    padding: 15px 15px;
    outline: none;
    width: 80%;
    padding-right: 0;
  }
`;
