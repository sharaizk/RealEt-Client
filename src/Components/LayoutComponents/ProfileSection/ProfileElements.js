import styled from "styled-components";
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 1vh;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }
`;

export const EditFormContainer = styled.div`
  min-height: 50vh;
  height: 100%;
  flex: 0.7;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 2vh;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex: 0.75;
  }
`;

export const Card = styled.div`
  border: 1px solid rgba(66, 66, 66, 0.05);
  /* height: 100%; */
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  padding: 2vh;
  align-items: flex-start;
  flex-direction: column;
`;

export const CardTitle = styled.h4`
  font-size: 1rem;
  color: #424242;
  flex: 0.3;
`;

export const CardContent = styled.div`
  flex: 0.5;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
