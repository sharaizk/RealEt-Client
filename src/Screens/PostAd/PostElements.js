import styled from "styled-components";

export const PostAddMainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding-top: 80px;
  background-color: #fff;
  @media screen and (max-height: 700px) {
    height: 100%;
  }
`;

export const TitleDiv = styled.div`
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

export const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 0.95;
  padding: 1vw 2vw;
`;

export const BannerDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  border: 3px dashed rgba(63, 61, 86, 0.25);
  padding: 2vh;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const BannerDetails = styled.p`
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #424242;
  & > span {
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: #545454;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
    & > span {
      font-size: 0.6rem;
      line-height: 0.6rem;
      color: #545454;
    }
  }
`;

export const BannerImg = styled.img`
  width: 30%;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1vw;
  flex-direction: column;
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
