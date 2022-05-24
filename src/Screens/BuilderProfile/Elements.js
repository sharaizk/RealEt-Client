import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

export const BuilderProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width:600px) {
      flex-direction: column;
  }
`;

export const MainProfile = styled.div`
  height: 100%;
  flex: 1;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  @media screen and (max-width:600px) {
      width: 100%;
  }
`;

export const ScreenTitle = styled.h3`
  font-size: 1.5rem;
  color: #424242;
  font-weight: 400;
`;


export const Label = styled.label`
font-size: 1rem;
color: #424242;
font-weight: 500;
& span{
    font-weight: 300;
}
`
export const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Verified = styled.div`
  color: #4bb543;
  border: 1px solid #4bb543;
  padding: 0.5vh;
  border-radius: 5px;
  font-size: 1rem;
  font-size: 0.7rem;
  @media screen and (max-width: 280px) {
    font-size: 0.5rem;
  }
`;
