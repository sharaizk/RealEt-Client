import React, { useEffect } from "react";
import {
  ChatListContainer,
  ChatListHeading,
  ChatListSearch,
  NoChatFound,
} from "./ChatListElements";
import ChatListItem from "../ChatListItems/index.js";
import { useQuery, useQueryClient } from "react-query";
import server from "../../../Axios";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getToken } from "Redux/localstorage";
import Pusher from "pusher-js";

const ChatList = ({ isOpen, setOpen }) => {
  const { userId } = useSelector((state) => state.auth);
  const queryClient = useQueryClient();
  const location = useLocation();
  const builderId = queryClient.getQueryData(["Builder Profile", userId])
    ?.builder?._id;
  const currentId =
    location.pathname !== "/dashboard/builder/chats" ? userId : builderId;
  const { data: roomData = [] } = useQuery(
    ["Rooms", currentId],
    async () => {
      const roomsResponse = await server.get("/chatroom/my-rooms", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        params: {
          userId: currentId,
        },
      });
      return roomsResponse.data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (!userId && !roomData) return;
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });
    const channel = pusher.subscribe(userId);
    channel.bind("new-chatroom", (data) => {
      const newChatList = [data, ...roomData];
      queryClient.setQueryData(["Rooms", userId], newChatList);
    });
    channel.bind("chatroom-message", (data) => {
      const newChatList = [
        roomData.find((item) => item._id === data.chatRoomId),
        ...roomData.filter((item) => item._id !== data.chatRoomId),
      ];
      queryClient.setQueryData(["Rooms", userId], newChatList);
    });

    return () => {
      pusher.unsubscribe(userId);
    };
  }, [userId, roomData, queryClient]);

  return (
    <ChatListContainer $isOpen={isOpen}>
      <ChatListHeading>
        {location.pathname !== "/dashboard/builder/chats" ? (
          <h2>Chats</h2>
        ) : (
          <h2>Builder Chats</h2>
        )}
      </ChatListHeading>
      <ChatListSearch>
        <input type="text" placeholder="search" />
      </ChatListSearch>
      {roomData ? (
        roomData?.map((room, i) => {
          let receiverId, role, chatRoomImg, chatRoomTitle;
          if (room.receiver) {
            receiverId =
              room?.sender?._id === userId
                ? room?.receiver?._id
                : room?.sender?._id;
            role =
              room?.sender?._id === userId
                ? room?.receiver?.role
                : room?.sender?.role;
            chatRoomImg =
              room?.sender?._id === userId
                ? room?.receiver?.profileImage
                : room?.sender?.profileImage;
            chatRoomTitle = room?.name;
          } else {
            receiverId =
              room?.sender?._id === userId
                ? room?.receiver_builder?.id
                : room?.sender?._id;
            chatRoomImg =
              room?.sender?._id === userId
                ? room?.receiver_builder?.logo
                : room?.sender?.profileImage;
            role =
              room?.sender?._id === userId ? "Builder" : room?.sender?.role;
            chatRoomTitle =
              room?.sender?._id === userId
                ? room?.name
                : room?.sender?.fullName;
          }
          return (
            <ChatListItem
              receiverId={receiverId}
              chatRoomId={room?._id}
              key={room?._id}
              setOpen={setOpen}
              chatRoomTitle={chatRoomTitle}
              role={role}
              chatRoomImg={chatRoomImg}
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
