import styled from "styled-components";
import { InformationContainer } from "../main/mainstyles";

const QuestionRegisterContainer = styled.div`
  display: inline;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 20px;
  margin-top: 40px;
  color: rgb(83, 100, 113);
  .question {
    display: inline;
    color: inherit;
    font: inherit;
    white-space: inherit;
    min-width: 0px;
    word-wrap: break-word;
    font-family: inherit;
  }
  .question-button {
    pointer-events: auto;
    cursor: pointer;
    font: inherit;
    white-space: inherit;
    min-width: 0px;
    word-wrap: break-word;
    font-family: inherit;
    color: rgb(29, 155, 240);
    &:hover {
      text-decoration-line: underline;
      text-decoration-thickness: 1px;
    }
  }
`;

const ModalLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .title-container {
    margin: 20px 0;
    h1 {
      font-weight: 700;
      font-size: 31px;
      line-height: 36px;
      color: rgb(15, 20, 25);
      span {
        color: inherit;
        font: inherit;
        white-space: inherit;
        min-width: 0px;
        word-wrap: break-word;
        font-family: inherit;
      }
    }
  }
`;

const InformationContainerSignup = styled(InformationContainer)`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.2px;
  margin-bottom: 0;
  font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: rgb(83, 100, 113);
`;

const SignInStyleDiv = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  position: relative;
`;

const SignInFormContainer = styled(SignInStyleDiv)`
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  height: 650px;
  max-height: 90vh;
  max-width: 80vw;
  min-height: 400px;

  .signin-Header-container {
    display: flex;
    padding: 0 16px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 53px;
    max-width: 600px;

    .header-navigate {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: center;
      flex-shrink: 1;
      align-items: flex-start;
      align-self: stretch;
      min-height: 32px;
      min-width: 56px;
      flex-basis: 50%;
      .close-container {
        cursor: pointer;
        display: flex;
        border-radius: 9999px;
        border: 1px solid;
        user-select: none;
        min-height: 36px;
        min-width: 36px;
        transition: all 0.2s;
        outline-style: none;
        background-color: rgba(0, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
        margin-left: calc(-8px);
        align-items: center;
        text-align: center;
        line-height: 20px;
        font-weight: 700;
        flex-direction: row;
        justify-content: center;
        color: rgb(15, 20, 25);
        &:hover {
          background-color: rgba(15, 20, 25, 0.1);
        }
      }
    }
    .header-logo {
      display: flex;
      align-items: center;
      flex-grow: 1;
      justify-content: center;
      height: 100%;
      flex-shrink: 1;
      .logo-container {
        flex-direction: column;
        position: relative;
        z-index: 0;
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: center;
        min-width: 32px;
      }
    }
  }
`;
const SignUpFormContainer = styled(SignInFormContainer)`
  .signin-Header-container {
    display: flex;
    padding: 0 16px;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
  .header-navigater {
    display: flex;
    flex: 0;
    position: relative;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    min-height: 32px;
    min-width: 56px;
    .close-container {
      cursor: pointer;
      display: flex;
      border-radius: 9999px;
      border: 1px solid;
      user-select: none;
      min-height: 36px;
      min-width: 36px;
      transition: all 0.2s;
      outline-style: none;
      background-color: rgba(0, 0, 0, 0);
      border-color: rgba(0, 0, 0, 0);
      margin-left: calc(-8px);
      align-items: center;
      text-align: center;
      line-height: 20px;
      font-weight: 700;
      flex-direction: row;
      justify-content: center;
      color: rgb(15, 20, 25);
      &:hover {
        background-color: rgba(15, 20, 25, 0.1);
      }
    }
  }
  .header-next {
    align-items: flex-start;
    h2 {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: rgb(15, 20, 25);
      span {
        color: inherit;
        font: inherit;
        white-space: inherit;
        min-width: 0px;
        word-wrap: break-word;
        font-family: inherit;
      }
    }
  }
`;
const SigninBox = styled(SignInStyleDiv)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 32px;
  max-width: 364px;
  min-width: 364px;
  padding-bottom: 48px;
`;
export {
  QuestionRegisterContainer,
  ModalLoginForm,
  InformationContainerSignup,
  SigninBox,
  SignInFormContainer,
  SignUpFormContainer,
};
