import styled from "styled-components";
import SignInImg from "../../assets/images/signin-img.jpg";
import {motion} from 'framer-motion'
export const SignInContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #FFF;
  @media screen and (max-height: 700px){
    height: 100%;
  }
`;

export const ImageContainer = styled.img`
  flex: 0.5;
  height: 100vh;
  max-width: 50%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-height: 700px){
    height: auto;
  }
`;
export const FormContainer = styled.div`
  flex: 0.5;
  height: 100vh;
  background-color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    flex: 1;

    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background-image: url(${SignInImg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      filter: opacity(75%);
      filter: blur(5px); */
      z-index: 1;
    }
  }
`;
