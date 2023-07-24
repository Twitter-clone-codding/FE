import { apple } from "@/assets/svg";
import { useAppDispatch } from "@/hooks/useRedux";
import {
  ButtonTitleStyleApple,
  InformationContainer,
  ButtonDivModalStyle,
  GubunSunModalStyleDiv,
} from "@/styles/main/mainstyles";
import {
  InformationContainerSignup,
  ModalLoginForm,
  QuestionRegisterContainer,
} from "@/styles/sign/signstyles";
import { Button, Icon } from "@/utils";
import { useNavigate } from "react-router-dom";

const ModalSignupform = () => {
  const navigate = useNavigate();
  return (
    <ModalLoginForm>
      <div className="title-container">
        <h1>
          <span>지금 트위터에 가입하세요</span>
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
              <Icon color="" isgoogle={true} width={18} height={18} path="" />
              <span className="google-span">Google 계정으로 로그인</span>
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

      <ButtonDivModalStyle>
        <Button
          hoverColor="hoverBlack"
          size="login2"
          color="white"
          backgroundColor="black"
          onClick={() => navigate("/signup")}
          title={<ButtonTitleStyleApple>계정 만들기</ButtonTitleStyleApple>}
        />
      </ButtonDivModalStyle>
      <InformationContainerSignup>
        가입하시려면{" "}
        <a href="https://help.twitter.com/rules-and-policies/twitter-cookies">
          <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">쿠키 사용</span>
        </a>
        을 포함해{" "}
        <a
          href="https://twitter.com/tos"
          className="css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1cvl2hr r-1loqt21 r-poiln3 r-bcqeeo r-qvutc0"
        >
          <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">이용약관</span>
        </a>
        과{" "}
        <a
          href="https://twitter.com/privacy"
          className="css-4rbku5 css-18t94o4 css-901oao css-16my406 r-1cvl2hr r-1loqt21 r-poiln3 r-bcqeeo r-qvutc0"
        >
          <span className="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">
            개인정보 처리방침
          </span>
        </a>
        에 동의해야 합니다.
      </InformationContainerSignup>
      <QuestionRegisterContainer>
        <span className="question">이미 계정이 있으신가요? </span>
        <span className="question-button" onClick={() => navigate("/login")}>
          로그인
        </span>
      </QuestionRegisterContainer>
    </ModalLoginForm>
  );
};
export default ModalSignupform;
