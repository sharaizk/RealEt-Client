import styled from "styled-components";
import { motion } from "framer-motion";
import { Select } from "antd";
const { Option } = Select;
export const StepContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LocationCat = styled(Select)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
  outline: none;
`;

export const LocationOption = styled(Option)`
  background-color: #fff !important;
`;

export const MapContainer = styled.div`
  height: 100%;
  width: 100%;
`;
