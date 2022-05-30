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
