import { ACTIVE_CHAT_ROOM, NEW_MESSAGES, RELOAD_MESSAGES } from "../types";
const INITIAL_STATE = {
  activeChatRoomId: "",
  chatRoomMessages: [],
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVE_CHAT_ROOM:
      return {
        ...state,
        activeChatRoomId: action.payload,
      };
    case NEW_MESSAGES:
      return {
        ...state,
        chatRoomMessages: [
          ...state.chat.chatRoomMessages,
          { ...action.payload },
        ],
      };
    case RELOAD_MESSAGES:
      return {
        ...state,
        chatRoomMessages: [action.payload],
      };
    default:
      return { ...state };
  }
};

export default chatReducer;
