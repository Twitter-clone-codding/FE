import { login } from "@/api/post";
import { apple } from "@/assets/svg";
import useInput from "@/hooks/useInput";
import { useAppDispatch } from "@/hooks/useRedux";
import { userSet } from "@/store/slice/userSlice";
import {
  ButtonDivModalStyle,
  ButtonTitleStyleApple,
  GubunSunModalStyleDiv,
} from "@/styles/main/mainstyles";
import { ModalLoginForm, QuestionRegisterContainer } from "@/styles/sign/signstyles";
import { Button, Icon, Spinner } from "@/utils";
import DynamicInput from "@/utils/dynamicInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Modalloginform = () => {
  const [loginValue, onChangeLoginValue] = useInput({ loginValue: "" });
  const navigate = useNavigate();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const authLoginHandler = async () => {
    setLoginLoading(true);
    await login({
      email: "trgf456a@aaa.co.krasd",
      password: "trgf456a@aaa.co.krasd",
    })
      .then((res) => {
        console.log(res);
        dispatch(userSet({ id: "trgf456a@aaa.co.krasd", nickname: "최은석", token: "ㅁㄴㅇ" }));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoginLoading(false));
  };
  useEffect(() => {
    console.log(loginValue);
  }, [loginValue]);

  return (
    <ModalLoginForm>
      <div className="title-container">
        <h1>
          <span>트위터에 로그인하기</span>
        </h1>
      </div>

      <ButtonDivModalStyle>
        <Button
          hoverColor="hoverLightBlue"
          size="login1"
          color="blue"
          backgroundColor="white"
          borderColor="gray"
          title={
            <ButtonTitleStyleApple>
              {loginLoading ? (
                <Spinner spinColor="#5585E8" borderSize={3} color="gray" size={20} />
              ) : (
                <>
                  <Icon color="" isgoogle={true} width={18} height={18} path="" />
                  <span className="google-span">Google 계정으로 로그인</span>
                </>
              )}
            </ButtonTitleStyleApple>
          }
        />
      </ButtonDivModalStyle>
      <ButtonDivModalStyle>
        <Button
          hoverColor="hoverLightBlack"
          size="login1"
          color="lightBlack"
          borderColor="gray"
          backgroundColor="white"
          title={
            <ButtonTitleStyleApple>
              <Icon color="#000" height={20} path={apple} width={20} />
              Apple에서 가입하기
            </ButtonTitleStyleApple>
          }
        />
      </ButtonDivModalStyle>
      <GubunSunModalStyleDiv>
        <div className="gubun-padding">
          <div className="gubunsun-div">
            <div className="sun" />
          </div>
          <div>
            <span>또는</span>
          </div>
          <div className="gubunsun-div">
            <div className="sun" />
          </div>
        </div>
      </GubunSunModalStyleDiv>
      <DynamicInput
        handleInputChange={onChangeLoginValue}
        value={loginValue["loginValue"]}
        placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
        className="loginValue"
      />
      <ButtonDivModalStyle>
        <Button
          hoverColor="hoverBlack"
          size="login2"
          color="white"
          backgroundColor="black"
          onClick={authLoginHandler}
          title={<ButtonTitleStyleApple>다음</ButtonTitleStyleApple>}
        />
      </ButtonDivModalStyle>
      <ButtonDivModalStyle>
        <Button
          hoverColor="hoverLightBlack"
          size="login2"
          color="lightBlack"
          borderColor="gray"
          backgroundColor="white"
          title={<ButtonTitleStyleApple>비밀번호를 잊으셨나요?</ButtonTitleStyleApple>}
        />
      </ButtonDivModalStyle>
      <QuestionRegisterContainer>
        <span className="question">계정이 없으신가요? </span>
        <span
          className="question-button"
          onClick={() => navigate("/signup", { state: { step: 0 } })}
        >
          가입하기
        </span>
      </QuestionRegisterContainer>
    </ModalLoginForm>
  );
};
export default Modalloginform;
