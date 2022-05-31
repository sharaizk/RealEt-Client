import React from "react";
import {
  ChatListContainer,
  ChatListHeading,
  ChatListSearch,
  NoChatFound,
} from "./ChatListElements";
import ChatListItem from "../ChatListItems/index.js";
import { useQuery } from "react-query";
import server from "../../../Axios";
import { useSelector } from "react-redux";
import { getToken } from "Redux/localstorage";
const ChatList = ({ isOpen, setOpen }) => {
  const { userId } = useSelector((state) => state.auth);
  const { data: roomData = [] } = useQuery(
    ["Rooms", userId],
    async () => {
      const roomsResponse = await server.get("/chatroom/my-rooms", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return roomsResponse.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <ChatListContainer $isOpen={isOpen}>
      <ChatListHeading>
        <h2>Chats</h2>
      </ChatListHeading>
      <ChatListSearch>
        <input type="text" placeholder="search" />
      </ChatListSearch>
      {roomData ? (
        roomData?.map((room) => {
          return (
            <ChatListItem
              receiverId={
                room?.sender?._id === userId
                  ? room?.receiver?._id
                  : room?.sender?._id
              }
              chatRoomId={room?._id}
              key={room?._id}
              setOpen={setOpen}
              chatRoomTitle={room?.name}
              role={
                room?.sender?._id === userId
                  ? room?.receiver?.role
                  : room?.sender?.role
              }
              secondaryRole={
                room?.sender?._id === userId
                  ? room?.receiver?.secondaryRole
                  : room?.sender?.secondaryRole
              }
              chatRoomImg={
                room?.sender?._id === userId
                  ? room?.receiver?.profileImage
                  : room?.sender?.profileImage
              }
              badge={false}
            />
          );
        })
      ) : (
        <NoChatFound>😕No Chat Available</NoChatFound>
      )}
    </ChatListContainer>
  );
};

export default ChatList;
