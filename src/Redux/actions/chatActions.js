import { NEW_MESSAGES, RELOAD_MESSAGES, ACTIVE_CHAT_ROOM } from "../types";

export const activateChatRoom = (chatRoomId) => {
  return {
    type: ACTIVE_CHAT_ROOM,
    payload: chatRoomId,
  };
};

export const newMessages = (message) => {
  console.log(message);
  return {
    type: NEW_MESSAGES,
    payload: {
      message: message.message,
      sender: message.sender,
      receiver: message.receiver,
      timeStamp: message.timeStamp,
    },
  };
};

export const reloadMessages = (message) => {
  return {
    type: RELOAD_MESSAGES,
    payload: message,
  };
};
