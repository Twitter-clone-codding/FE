import React, { useState, useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import StompJs from "stompjs";
import { ChatContainer, Message, InputArea, MessageInput } from "@/styles/message/chatstyle";
import { MessagesContainer } from "@/styles/message/messageStyle";
import { Input } from "@/utils";
import { disconnect } from "process";
import { useAppSelector } from "@/hooks/useRedux";

interface ChatMessage {
  nickname: string;
  msg: string;
}

let stomp: any;
const Chat: React.FC<ChatRooms> = (room) => {
  const stompClientRef = useRef<any>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [client, setClient] = useState<Client | null>(null);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const connect = () => {
    const sock = new SockJS(`https://pink-love.shop:8080/chat`);
    // const user = useAppSelector(state=> state.user.nickname)
    stomp = StompJs.over(sock);
    stomp.connect(
      {},
      () => {
        stomp.debug = null;
        stompClientRef.current = stomp;
        stomp.subscribe(`/sub/${room.roomKey}`, ({ body }) => {
          console.log(JSON.parse(body));
          // 구독할때 룸네임 넣어서 sub 하고
          // const newMessage = data.msg;
          // Imposters 값을 state에 저장
          // if (newMessage.imposters) {
          // }
          // // 새로운 메시지가 imposter 정보를 담고 있다면 imposters state를 업데이트
          // if (newMessage.imposter) {
          // }
          // 과거의 메세지와 현재 메세지 추가
          setMessages((prevMessages) => [...prevMessages, JSON.parse(body)]);
        });
        stomp.send(
          "/pub/send/message",
          {},
          JSON.stringify({
            roomKey: room.roomKey,
            nickname: room.nickname,
            msg: `${room.nickname} : 님이 입장하셨습니다.`,
          })
        );
      },
      (err: Error) => {
        console.log("에러발생! 연결실패!", err);
      }
    );
  };
  useEffect(() => {
    connect();
    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.send(
          "/pub/send/message",
          {},
          JSON.stringify({
            roomKey: room.roomKey,
            nickname: room.nickname,
            msg: `${room.nickname} : 님이 나가셨습니다.`,
          })
        );
      }
    };
  }, [room.roomKey]);

  const sendMessage = () => {
    if (stompClientRef.current) {
      stompClientRef.current.send(
        "/pub/send/message",
        {},
        JSON.stringify({
          roomKey: room.roomKey,
          nickname: room.nickname,
          msg: currentMessage,
        })
      );
      setCurrentMessage("");
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((msg, i) => (
          <Message key={i} byCurrentUser={msg.nickname === room.nickname}>
            <strong>{msg.nickname}</strong>
            {msg.msg}
          </Message>
        ))}
      </MessagesContainer>
      <InputArea>
        <Input
          value={currentMessage}
          handleInputChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Start a new message"
          size="large"
        />
        <button onClick={() => sendMessage()}>Send</button>
      </InputArea>
    </ChatContainer>
  );
};

export default Chat;
