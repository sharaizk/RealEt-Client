import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const NotFoundImg = styled.img`
  height: auto;
  width: 30%;
`;

export const GoBackBtn = styled.button`
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  cursor: pointer;
  background-image: linear-gradient(45deg, #f56e28 0%, #F09819  51%, #f56e28  100%);
  &:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
  &:active {
    transform: scale(0.95);
  }
`;
