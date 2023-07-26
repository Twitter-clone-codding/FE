import { register } from "@/api/post";
import useInput from "@/hooks/useInput";
import { useAppSelector } from "@/hooks/useRedux";
import {
  ButtonTitleStyleNextButton,
  NextStepFourthButtonDiv,
  NextStepThirdButtonDiv,
  SignFourthContainer,
} from "@/styles/sign/signupStyles";
import { Button, DynamicInput, Spinner } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignFourth = () => {
  const { formData } = useAppSelector((state) => state.root.form);
  const { selectData } = useAppSelector((state) => state.root.form);
  const [value, onchange] = useInput({ code: "" });
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const registerHandler = async () => {
    setRegisterLoading(true);
    console.log({
      birthday: `${selectData.year}-${selectData.month}-${selectData.day}`,
      email: formData.email,
      password: formData.email,
      name: formData.nickname,
    });
    await register({
      birthday: `${selectData.year}-${selectData.month}-${selectData.day}`,
      email: formData.email,
      password: formData.email,
      name: formData.nickname,
    })
      .then((res) => {
        alert(res.msg);
        navigate("/");
      })
      .catch((err) => console.log(err))
      .finally(() => setRegisterLoading(false));
  };

  const SpinnerContent = registerLoading ? (
    <Spinner borderSize={3} color="#5585E8" size={18} spinColor="gray" />
  ) : (
    <span>가입</span>
  );

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
          onClick={registerHandler}
          title={<ButtonTitleStyleNextButton>{SpinnerContent}</ButtonTitleStyleNextButton>}
        />
      </NextStepFourthButtonDiv>
    </SignFourthContainer>
  );
};
export default SignFourth;
