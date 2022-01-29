import styled from "styled-components";

export const BackToTopElement=styled.div`
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background-color: #545454;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5px;
  font-size: 18px;

  transition: all 0.2s ease-in;
  :hover{
    opacity: 100%;
  }
`