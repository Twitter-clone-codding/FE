import { login, register } from "@/api/post";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { updateFormData, updateLoginData } from "@/store/slice/formSlice";
import { userSet } from "@/store/slice/userSlice";
import {
  SignfirstContainer,
  InputContainer,
  NextStepButtonDiv,
  ButtonTitleStyleNextButton,
  SignInContainer,
} from "@/styles/sign/signupStyles";
import { DynamicInput, Button, Spinner } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInFirst = () => {
  const loginData = useAppSelector((state) => state.root.form.loginData);
  const dispatch = useAppDispatch();
  const [Lodoing, setLoginLoading] = useState(false);

  const handleLoginInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { className, value } = event.target;
    dispatch(updateLoginData({ ...loginData, [className]: value }));
  };

  const navigate = useNavigate();
  const authLoginHandler = async () => {
    setLoginLoading(true);
    await login({
      email: loginData.email,
      password: loginData.password,
    })
      .then((res) => {
        console.log(res);
        dispatch(
          userSet({
            email: loginData.email,
            picture: res.result.profileImageUrl,
            nickname: res.result.nickname,
            token: res.result.token,
            tagname: res.result.tagName,
          })
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoginLoading(false));
  };
  const SpinnerContent = Lodoing ? (
    <Spinner borderSize={3} color="#5585E8" size={18} spinColor="gray" />
  ) : (
    <span>로그인하기</span>
  );
  return (
    <SignInContainer>
      <div className="title">
        <h1>
          <span>비밀번호를 입력하세요</span>
        </h1>
      </div>
      <InputContainer>
        <DynamicInput
          value={loginData.email}
          disabled={true}
          placeholder="이메일"
          className={"email"}
        />
        <DynamicInput
          value={loginData.password}
          handleInputChange={handleLoginInputChange}
          placeholder="비밀번호"
          className={"password"}
          type="password"
        />
        <div className="change-input">
          <span>비밀번호 입력하세요</span>
        </div>
      </InputContainer>

      <NextStepButtonDiv>
        <Button
          backgroundColor="black"
          color="white"
          hoverColor="hoverBlack"
          size="register"
          // onClick={nextStep}
          onClick={authLoginHandler}
          title={
            <ButtonTitleStyleNextButton>
              {SpinnerContent}
            </ButtonTitleStyleNextButton>
          }
        />
      </NextStepButtonDiv>
    </SignInContainer>
  );
};
export default SignInFirst;
