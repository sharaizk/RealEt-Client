import styled from "styled-components";

export const CostScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  padding-top: 16vh;
  height: 100vh;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    padding-top: 7vh;
  }
  @media screen and (max-width:768px){
    padding-top: 12vh;
  }
  @media screen and (max-width: 280px) {
  }
`;

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 2vh;
  }
`;

export const FormSection = styled.div`
  flex: 0.5;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    flex: 0.4;
  }
`;
export const HistorySection = styled.div`
  flex: 0.3;
  max-height: 60vh;
  border: 1px solid #424242;
  display: flex;
  border-radius: 10px;
  background-color: #ececec;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;
export const TitleContainer = styled.div`
  padding: 2vh 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #424242;
  font-size: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 400;
  flex: 0.05;
`;

export const HistoryTitle = styled.div`
  height: 10vh;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px 11px 0 0;
  color: #fff;
  background-color: #f56e28;
`;

export const Card = styled.div`
  height: 8vh;
  padding: 1rem;
  width: 100%;
  margin-top: 1vh;
  background-color: #fff;
`;
