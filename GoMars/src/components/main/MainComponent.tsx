import { close, twitter } from "@/assets/svg";
import { Icon } from "@/utils";
import styled from "styled-components";
import SignComponent from "../SignComponent";
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
const MainComponent = () => {
  return (
    <SignInFormContainer>
      {/* 헤더 */}
      <div className="signin-Header-container">
        <div className="header-navigate">
          <div className="close-container">
            <Icon color="#000" height={20} path={close} width={20} />
          </div>
        </div>
        <div className="header-logo">
          <div className="logocontainer">
            <Icon color="rgb(29, 155, 240)" height={53} width={32} path={twitter} />
          </div>
        </div>
        <div className="header-navigate"></div>
      </div>
      <SignComponent ismain />
    </SignInFormContainer>
  );
};
export default MainComponent;
