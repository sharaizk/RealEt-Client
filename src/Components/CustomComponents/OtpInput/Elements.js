import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.div`
  flex: 0.3;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  @media screen and (max-width:280px) {
      font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${({ disabled }) => (disabled ? "50%" : "100%")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "")};
`;

export const Info = styled.p`
  font-size: 0.9rem;
  text-align: center;
  @media screen and (max-width:280px) {
      font-size: 0.6rem;
  }
`;

export const SVG = styled.svg`
  position: absolute;
  left: -12vh;
  top: -30%;
  width: 32.223415682062296vh;
  height: 40.223415682062296vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;utf8, %3Csvg width='100%25' height='100%25' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' %3E %3Cdefs%3E %3Cfilter id='grain' x='-50vw' y='-50vh' width='100vw' height='100vh'%3E %3CfeFlood flood-color='%23ffffff' result='neutral-gray' /%3E %3CfeTurbulence in='neutral-gray' type='fractalNoise' baseFrequency='2.5' numOctaves='100' stitchTiles='stitch' result='noise' /%3E %3CfeColorMatrix in='noise' type='saturate' values='0' result='destaturatedNoise' %3E%3C/feColorMatrix%3E %3CfeComponentTransfer in='desaturatedNoise' result='theNoise'%3E %3CfeFuncA type='table' tableValues='0 0 0.1 0'%3E%3C/feFuncA%3E %3C/feComponentTransfer%3E %3CfeBlend in='SourceGraphic' in2='theNoise' mode='soft-light' result='noisy-image' /%3E %3C/filter%3E %3CclipPath id='shape'%3E %3Cpath fill='currentColor' d='M613,677Q295,854,294.5,498.5Q294,143,612.5,321.5Q931,500,613,677Z'%3E%3C/path%3E %3C/clipPath%3E %3C/defs%3E %3Cg filter='url(%23grain)' clip-path='url(%23shape)'%3E %3Cpath fill='%23fd6e21' d='M613,677Q295,854,294.5,498.5Q294,143,612.5,321.5Q931,500,613,677Z' /%3E %3C/g%3E %3C/svg%3E");
  opacity: 10%;

  @media screen and (max-width:768px){
    top: -40%;
  }
  @media screen and (max-width:480px){
    top: -20%;
  }
  @media screen and (max-width:360px){
    top: -15%;
  }
  @media screen and (max-width:280px){
    top: -10%;
  }
`;
