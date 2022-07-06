import styled from "styled-components";

export const AboutUsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;
`;

export const Text = styled.p`
  width: 60%;
  font-size: 1rem;
  font-weight: 400;
  color: #424242;
  text-align: center;
  & span {
    color: #f56e28;
    font-size: 5rem;
    font-family: "ABeatByKaiRegular";
    letter-spacing: 1px;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    & span {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    & span {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 480px) {
    width: 80%;
    font-size: 0.8rem;

    & span {
      font-size: 3rem;
    }
  }
`;
