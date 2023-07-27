import React, { useState, useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import StompJs from "stompjs";
import { ChatContainer, Message, InputArea, MessageInput } from "@/styles/message/chatstyle";
import { MessagesContainer } from "@/styles/message/messageStyle";
import { Input } from "@/utils";
import { getChatRoomJoin } from "@/api/post";

interface ChatMessage {
  from: number;
  message: string;
}

let stomp: any;
const Chat: React.FC<User> = (user) => {
  const stompClientRef = useRef<any>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [client, setClient] = useState<Client | null>(null);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const connect = () => {
    const sock = new SockJS(`https://pink-love.shop:8080/chat`);
    stomp = StompJs.over(sock);
    stomp.connect(
      {},
      () => {
        stomp.debug = null;
        stompClientRef.current = stomp;
        stomp.subscribe(`/sub`, (data: any) => {
          // 구독할때 룸네임 넣어서 sub 하고
          const newMessage = JSON.parse(data.body);
          // Imposters 값을 state에 저장
          if (newMessage.imposters) {
          }
          // 새로운 메시지가 imposter 정보를 담고 있다면 imposters state를 업데이트
          if (newMessage.imposter) {
          }
          // 과거의 메세지와 현재 메세지 추가
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
        stomp.send(
          "/pub/chat/message",
          {},
          JSON.stringify({
            type: "ENTER",
            message: "",
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
          "/pub/chat/message",
          {},
          JSON.stringify({
            type: "LEAVE",
            roomId: user.id, // 현재의 사용자 ID를 사용해서 방을 나갑니다.
            message: "",
          })
        );
      }
    };
  }, [user.id]);
  const sendMessage = (id: number) => {
    if (client) {
      client.publish({
        destination: "/pub/send/message",
        body: JSON.stringify({
          from: "User",
          message: {
            userId: id,
            msg: "test",
          },
        }),
      });
      setCurrentMessage("");
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((msg, i) => (
          <Message key={i} byCurrentUser={msg.from === user.id}>
            <strong>{msg.from === user.id ? "You" : "Them"}:</strong>
            {msg.message}
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
        <button onClick={() => sendMessage(user.id)}>Send</button>
      </InputArea>
    </ChatContainer>
  );
};

export default Chat;
