import { apple } from "@/assets/svg";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateLoginData } from "@/store/slice/formSlice";
import {
  ButtonDivModalStyle,
  ButtonTitleStyleApple,
  GubunSunModalStyleDiv,
} from "@/styles/main/mainstyles";
import {
  ModalLoginForm,
  QuestionRegisterContainer,
} from "@/styles/sign/signstyles";
import { Button, Icon, Spinner } from "@/utils";
import DynamicInput from "@/utils/dynamicInput";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

interface nextStep {
  nextStep?: () => void;
}

const Modalloginform: FC<nextStep> = (props) => {
  const { nextStep } = props;
  const loginData = useAppSelector((state) => state.form.form.loginData);
  const navigate = useNavigate();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { className, value } = event.target;
    dispatch(
      updateLoginData({
        ...loginData,
        [className]: value,
      })
    );
  };

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
                <Spinner
                  spinColor="#5585E8"
                  borderSize={3}
                  color="gray"
                  size={20}
                />
              ) : (
                <>
                  <Icon
                    color=""
                    isgoogle={true}
                    width={18}
                    height={18}
                    path=""
                  />
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
        handleInputChange={handleInputChange}
        value={loginData.email}
        placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
        className={"email"}
      />
      <ButtonDivModalStyle>
        <Button
          hoverColor="hoverBlack"
          size="login2"
          color="white"
          backgroundColor="black"
          onClick={nextStep}
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
          title={
            <ButtonTitleStyleApple>
              비밀번호를 잊으셨나요?
            </ButtonTitleStyleApple>
          }
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
