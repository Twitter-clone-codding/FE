import { getChatRoom, messageSearch } from "@/api/get";
import { getChatRoomJoin } from "@/api/post";
import { normal } from "@/assets/img";
import { close } from "@/assets/svg";
import ChatingRoomItem from "@/components/message/ChatingRoomItem";
import Chat from "@/components/message/websocket";
import useInput from "@/hooks/useInput";
import useOutsideClick from "@/hooks/useOutsideClick";
import MessagesHeader from "@/layout/header/MessagesHeader";
import { MessagesContainer, MessageRoom, ChatingRoom } from "@/styles/message/messageStyle";
import { Icon, Input } from "@/utils";
import { FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Messages = () => {
  // <Chat />;
  const [value, onChangeHandler] = useInput({ searchValue: "" });
  const [messageList, setMessageList] = useState<User[]>();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<ChatRooms | null>(null);
  const messageSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await messageSearch(value["searchValue"])
      .then((res) => setMessageList(res.result))
      .catch((err) => console.log(err));
  };
  const [List, setList] = useState<ChatRooms[]>();
  const [focus, setFocus] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, () => {
    setFocus(false);
  });
  const handleRoomClick = (room: ChatRooms) => {
    setSelectedRoom(room);
    // 여기에서 방 입장 로직을 구현합니다.
    // 예를 들면, 다른 페이지로 리다이렉트하거나 모달을 표시하는 등의 동작을 수행할 수 있습니다.
  };

  const handleUserClick = async (user: User) => {
    setSelectedUser(user);
    setFocus(false);
    await getChatRoom(user.id)
      .then((res) => res.msg)
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const fetch = async () => {
      await getChatRoomJoin()
        .then((res) => {
          setList(res.result);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);
  return (
    <MessagesContainer>
      <MessageRoom img={normal} ref={ref}>
        <MessagesHeader />
        <div className="input-container">
          <Input
            className={"search"}
            handleInputSubmit={messageSubmitHandler}
            handleInputChange={onChangeHandler}
            value={value["searchValue"]}
            placeholder="Search Direct Message"
            onFocus={() => {
              setFocus(true);
            }}
          />
        </div>
        <div className="relative-container">
          {focus && (
            <div className="ul-list">
              {messageList &&
                messageList?.map((e, i) => (
                  <div className="li-list" key={e.id + i} onClick={() => handleUserClick(e)}>
                    <div className="avatar-container">
                      <div className="avatar-wrraper">
                        <div className="avatar-box"></div>
                        <img src={e.profileImageUrl ? e.profileImageUrl : normal} alt="" />
                      </div>
                    </div>
                    <div className="user-list">
                      <div className="content">
                        <div className="nickname">{e.nickname}</div>
                        <div className="tag">{e.tagName}</div>
                      </div>
                      <div className="close">
                        <Icon height={18} width={18} path={close} color={"rgb(29,155,240)"} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        {List &&
          List.map((room, i) => (
            <ChatingRoomItem
              handleRoomClick={() => handleRoomClick(room)}
              key={room.id}
              {...room}
            />
          ))}
      </MessageRoom>
      <ChatingRoom>{selectedRoom && <Chat {...selectedRoom} />}</ChatingRoom>
    </MessagesContainer>
  );
};
export default Messages;
