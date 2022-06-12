import styled from "styled-components";
import { motion } from "framer-motion";
export const ChatItemContainer = styled(motion.div)`
  width: 100%;
  background-color: #fff;
  margin-top: 1vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 0.6rem 0.8rem;
  position: relative;
  cursor: pointer;
`;

export const ChatTitle = styled.h4`
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  font-size: 0.9rem;
  color: #424242;
`;

export const ChatSubTitle = styled.p`
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  padding-top: 0;
  padding-bottom: 0;
  width: 100%;
  opacity: 0.75;
  text-transform: capitalize;
`;

export const Badge = styled.div`
  background-color: #f50;
  position: absolute;
  border-radius: 50%;
  height: 1vh;
  width: 1vh;
  top: -2.5%;
  left: 98%;
`;
