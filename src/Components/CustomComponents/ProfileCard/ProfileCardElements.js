import styled from "styled-components";
import { motion } from "framer-motion";
export const Card = styled(motion.div)`
  height: 30vh;
  flex: 0.3;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-start;
  margin-right: 0.5vw;

  @media screen and (max-width: 768px) {
    flex: 0.2;
    width: 100%;
    margin-right: 0;
    flex-direction: row;
  }
`;

export const PictureContainer = styled(motion.div)`
  flex: 0.2;
`;

export const DetailContainer = styled(motion.div)`
  flex: 0.7;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
  }
`;

export const Name = styled.h3`
  color: #545454;
  font-size: 1.25rem;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Email = styled.h4`
  color: #848b91;
  font-size: 1rem;
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const VerifiedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

export const UnVerified = styled.div`
  color: #ca0b00;
  background-color: #ef9692;
  padding: 0.5vw;
  border-radius: 5px;
`;
