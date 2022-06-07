import styled from "styled-components";

export const ChatContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 0.7;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  position: relative;

  padding: 1rem;
  @media screen and (max-width: 1024px) {
    flex: 1;
  }
`;

export const ChatRoomBar = styled.div`
  height:10%;
  width:100%;
  position: absolute;
  top: 0%;
  left: 0%;
  border-radius: 10px;
  background-color: #FFF;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: flex-start;
`

export const ChatArea = styled.div`
  flex: 0.9;
  width: 100%;
  background-color: #f4f3f8;
  border-radius: 5px;
  margin-bottom: 1vh;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow: auto;
  margin-top: 3vh;
`;

export const ReceivedMsg = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #42ba96;
  color: #fff;
  padding: 0.15rem 0.5rem;
  border-radius: 5px;
  margin-bottom: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const SentMsg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-end;
  background-color: #fff;
  color: #424242;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  margin-bottom: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const TimeStamp = styled.p`
  font-size: 0.6rem;
  color: ${({ $color }) => $color};
  font-weight: 400;
`;

export const TypeArea = styled.div`
  flex: 0.1;
  width: 100%;
  background-color: #f4f3f8;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.5rem;
`;

export const TextField = styled.input`
  width: 85%;
  height: 80%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
`;

export const SendBtn = styled.button`
  width: 15%;
  border: none;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
`;

export const InfoDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatTitle = styled.h4`
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  font-size: 0.9rem;
  color: #424242;
`;
