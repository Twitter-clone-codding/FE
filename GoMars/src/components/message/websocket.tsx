import React, { useState, useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import StompJs from "stompjs";

interface ChatMessage {
  from: string;
  message: string;
}
let stomp: any;
const Chat: React.FC = () => {
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
    // 컴포넌트에서 unmount 될때 서버로 "LEAVE" 메세지를 보냄
    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.send(
          "/pub/chat/message",
          {},
          JSON.stringify({
            type: "LEAVE",

            message: "",
          })
        );
      }
    };
  }, []);
  const sendMessage = () => {
    if (client) {
      client.publish({
        destination: "/pub/send/message",
        body: JSON.stringify({
          from: "User",
          message: {
            userId: 1,
            msg: "test",
          },
        }),
      });
      setCurrentMessage("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>

      <ul>
        {messages.map((msg, i) => (
          <li key={i}>
            <strong>{msg.from}:</strong> {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chat;
