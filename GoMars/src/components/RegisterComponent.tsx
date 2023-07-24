import { useState } from "react";
import { SignFourth, SignSecond, SignThird, Signfirst } from "./signupstep";
import { SignInFormContainer, SignUpFormContainer, SigninBox } from "@/styles/sign/signstyles";
import { Icon } from "@/utils";
import { close, twitter } from "@/assets/svg";
import { useLocation, useNavigate } from "react-router-dom";
import ModalSignupform from "./sign/ModalSignupform";
import useInput from "@/hooks/useInput";

interface initailStateProp {
  state?: number;
}

const RegisterComponent = ({ state = 1 }: initailStateProp) => {
  const [SignStep, setSignStep] = useState(state);
  const location = useLocation();
  const currentStep = location.state?.step ?? 1;
  const navigate = useNavigate();
  const nextStep = () => setSignStep(SignStep + 1);
  const prevStep = () => setSignStep(SignStep - 1);

  const StepSignUp = () => {
    const [select, handleSelectChange] = useInput({
      month: "",
      day: "",
      year: "",
    });
    const [formvalue, formOnchange] = useInput({ nickname: "", email: "" });
    switch (SignStep) {
      case 1:
        return (
          <Signfirst
            onChange={formOnchange}
            value={formvalue}
            nextStep={nextStep}
            select={select}
            handleSelectChange={handleSelectChange}
          />
        );
      case 2:
        return <SignSecond />;
      case 3:
        return <SignThird />;
      case 4:
        return <SignFourth />;
      default:
        return null;
    }
  };

  if (currentStep !== 1) {
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
          <ModalSignupform />
        </SigninBox>
      </SignInFormContainer>
    );
  }

  return (
    <SignUpFormContainer>
      {/* 헤더 */}
      <div className="signin-Header-container">
        <div className="header-navigater">
          <div className="close-container" onClick={nextStep}>
            <Icon color="#000" height={20} path={close} width={20} />
          </div>
        </div>
        <div className="header-next">
          <h2>
            <span>5단계 중 {SignStep}단계</span>
          </h2>
        </div>
      </div>
      <StepSignUp />
    </SignUpFormContainer>
  );
};
export default RegisterComponent;
