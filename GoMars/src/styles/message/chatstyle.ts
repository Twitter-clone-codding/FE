import styled from "styled-components";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div<{ byCurrentUser: boolean }>`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  align-self: ${(props) => (props.byCurrentUser ? "flex-end" : "flex-start")};
  background-color: ${(props) => (props.byCurrentUser ? "#0084ff" : "#eee")};
  color: ${(props) => (props.byCurrentUser ? "white" : "black")};
`;

const InputArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #eee;
`;

const MessageInput = styled.input`
  flex-grow: 1;
  margin-right: 10px;
`;

export { ChatContainer, MessagesContainer, Message, InputArea, MessageInput };
