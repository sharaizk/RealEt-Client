import styled from "styled-components";

import { motion } from "framer-motion";
export const SignUpContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #fff;
  @media screen and (max-height: 700px) {
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
  }
`;
