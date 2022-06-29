export const StepperTransition = {
  initial: { x: "10%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.75, ease: "easeOut" },
  exit: {
    x: "-50%",
    opacity: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const ChatRoomAnimation = {
  initial: {
    y: "10%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const CostFormAnimation = {
  initial: {
    x: -500,
    opacity: 0,
    scale:1,
  },
  animate: {
    x: 0,
    scale:1,
    opacity: 1,
  },
  transition: { duration: 0.75, ease: "easeOut" },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const CalculatingAnimation = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale:1,
    opacity: 1,
  },
  transition: { duration: 0.75, ease: "easeOut" },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
}

export const CostHistoryScreenAnimation = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  transition: { duration: 0.75, ease: "easeOut" },
};
