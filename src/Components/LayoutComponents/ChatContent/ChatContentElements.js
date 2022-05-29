import styled from "styled-components";

export const ChatContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 0.7;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;

  @media screen and (max-width:768px) {
    flex: 1;
  }
`;
