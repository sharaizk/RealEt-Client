import { NEW_MESSAGES, RELOAD_MESSAGES, ACTIVE_CHAT_ROOM } from "../types";
import server from "../../Axios";
import { getToken } from "Redux/localstorage";
export const activateChatRoom = (chatRoomId,receiver,chatRoomTitle,chatRoomImg) => {
  return {
    type: ACTIVE_CHAT_ROOM,
    payload: {chatRoomId,receiver,chatRoomTitle,chatRoomImg},
  };
};

export const newMessages = (message) => {
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

// export const reloadMessages = (message) => {
//   return {
//     type: RELOAD_MESSAGES,
//     payload: message,
//   };
// };

export const reloadMessages = (chatRoomId) => {
  return async (dispatch) => {
    try {
      const chatResponse = await server.get("/message/room-messages", {
        params: {
          chatRoom: chatRoomId,
        },
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      dispatch({ type: RELOAD_MESSAGES, payload: chatResponse.data.messages });
    } catch (error) {
      return error;
    }
  };
};
