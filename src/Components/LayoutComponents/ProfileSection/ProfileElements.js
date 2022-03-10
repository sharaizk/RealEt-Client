import styled from "styled-components";
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
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
    height: 100%;
  }
`;

export const EditFormContainer = styled.div`
  height: 50vh;
  flex: 0.7;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex: 0.75;
  }
`;
