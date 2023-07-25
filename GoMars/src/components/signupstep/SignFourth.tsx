import useInput from "@/hooks/useInput";
import { useAppSelector } from "@/hooks/useRedux";
import {
  ButtonTitleStyleNextButton,
  NextStepFourthButtonDiv,
  NextStepThirdButtonDiv,
  SignFourthContainer,
} from "@/styles/sign/signupStyles";
import { Button, DynamicInput } from "@/utils";

const SignFourth = () => {
  const { formData } = useAppSelector((state) => state.form);
  const [value, onchange] = useInput({ code: "" });
  return (
    <SignFourthContainer>
      <div className="title">
        <h1>
          <span>코드를 보내 드렸습니다</span>
        </h1>
        <div className="subtitle">
          <span>{formData.email}</span>
          <span> 인증을 위해 아래에 입력하세요.</span>
        </div>
      </div>
      <DynamicInput
        placeholder="인증 코드"
        value={value["code"]}
        handleInputChange={onchange}
        className="code"
      />
      <div className="email-question">
        <div>
          <span>이메일을 받지 못하셨나요?</span>
        </div>
      </div>
      <NextStepFourthButtonDiv>
        <Button
          backgroundColor="black"
          color="white"
          hoverColor="hoverBlack"
          size="register"
          // onClick={nextStep}
          title={
            <ButtonTitleStyleNextButton>
              <span>가입</span>
            </ButtonTitleStyleNextButton>
          }
        />
      </NextStepFourthButtonDiv>
    </SignFourthContainer>
  );
};
export default SignFourth;
