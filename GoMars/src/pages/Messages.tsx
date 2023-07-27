import { messageSearch } from "@/api/get";
import { normal } from "@/assets/img";
import { close } from "@/assets/svg";
import ChatingRoomItem from "@/components/message/ChatingRoomItem";
import Chat from "@/components/message/websocket";
import useInput from "@/hooks/useInput";
import useOutsideClick from "@/hooks/useOutsideClick";
import MessagesHeader from "@/layout/header/MessagesHeader";
import { MessagesContainer, MessageRoom, ChatingRoom } from "@/styles/message/messageStyle";
import { Icon, Input } from "@/utils";
import { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Messages = () => {
  // <Chat />;
  const [value, onChangeHandler] = useInput({ searchValue: "" });
  const [messageList, setMessageList] = useState<User[]>();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const messageSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await messageSearch(value["searchValue"])
      .then((res) => setMessageList(res.result))
      .catch((err) => console.log(err));
  };
  const [focus, setFocus] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick(ref, () => {
    setFocus(false);
  });

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };
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
                messageList?.map((e) => (
                  <div className="li-list" key={uuidv4()} onClick={() => handleUserClick(e)}>
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
        {selectedUser && <ChatingRoomItem {...selectedUser} />}
      </MessageRoom>
      <ChatingRoom>{selectedUser && <Chat {...selectedUser} />}</ChatingRoom>
    </MessagesContainer>
  );
};
export default Messages;
