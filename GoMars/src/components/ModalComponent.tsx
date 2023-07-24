import { close, twitter } from "@/assets/svg";
import { Icon } from "@/utils";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import SignComponent from "./SignComponent";
import { SignInFormContainer, SigninBox } from "@/styles/sign/signstyles";

const MainComponent = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const signup = location.pathname === "/signup";
  return (
    <SignInFormContainer>
      {/* 헤더 */}
      <div className="signin-Header-container">
        <div className="header-navigate">
          <div className="close-container" onClick={() => navigate(-1)}>
            <Icon color="#000" height={20} path={close} width={20} />
          </div>
        </div>
        <div className="header-logo">
          <div className="logocontainer">
            <Icon color={"rgb(29, 155, 240)"} height={53} width={32} path={twitter} />
          </div>
        </div>
        <div className="header-navigate"></div>
      </div>
      <SigninBox>
        <SignComponent ismain={false} />
      </SigninBox>
    </SignInFormContainer>
  );
};
export default MainComponent;
