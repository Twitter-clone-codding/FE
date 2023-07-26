import { close, twitter } from "@/assets/svg";
import { Icon } from "@/utils";
import { useLocation, useNavigate } from "react-router-dom";
import SignComponent from "./SignComponent";
import { SignInFormContainer, SignInWrraper, SigninBox } from "@/styles/sign/signstyles";
import { useState } from "react";
import SignInFirst from "./signupstep/SignInFirst";

const MainComponent = () => {
  const navigate = useNavigate();
  const [SignStep, setSignStep] = useState(0);
  const nextStep = () => setSignStep(SignStep + 1);
  const prevStep = () => setSignStep(SignStep - 1);
  const StepSignUp = () => {
    switch (SignStep) {
      case 1:
        return (
          <SignInWrraper>
            <SignInFirst />
          </SignInWrraper>
        );
      default:
        return (
          <SigninBox>
            <SignComponent nextStep={nextStep} ismain={false} />
          </SigninBox>
        );
    }
  };
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
      <StepSignUp />
    </SignInFormContainer>
  );
};
export default MainComponent;
