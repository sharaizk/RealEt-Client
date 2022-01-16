import React from "react";
import { Arrow } from "./ArrowElements";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
const CaroArrow = ({ event, disabled, type }) => {
  return type === "NEXT" ? (
    <Arrow onClick={event} disabled={disabled}>
      <IoChevronForwardOutline />
    </Arrow>
  ) : (
    <Arrow onClick={event} disabled={disabled}>
      <IoChevronBackOutline />
    </Arrow>
  );
};

export default CaroArrow;
