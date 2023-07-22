import React from "react";
import styled from "styled-components";
import Input from "./utils/Input";
import Button from "./utils/Button";
import Icon from "./utils/Icon";
import MainHeaderList from "./components/MainHeaderList";
import GlobalStyle from "./styles/globalstyle";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <List>
        <div>
          <Button color="black" size="register" title={<>register</>} />
          <Button color="blue" size="tweet2" title={<>tweet2</>} />
          <Button color="blue" size="tweet1" title={<>tweet1</>} />
          <Button color="black" size="follow" title={<>follow</>} />
          <Button color="black" size="getVerify" title={<>getVerify</>} />
          <Button color="black" size="login" title={<>다음</>} />
          <Button color="black" size="logout" title={<>logout</>} />
          <Button color="white" size="logout" title={<>cancel</>} />
          <Button color="blue" size="message" title={<>message</>} />
        </div>
        <div>
          <Input type="input" size="midium" labelValue="이름" />
          <Input type="search" size="large" />
        </div>
        <div>
          <MainHeaderList />
        </div>
      </List>
    </>
  );
};

export default App;

const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  > div > * {
    margin-top: 20px;
  }
`;
