import { apple } from "@/assets/svg";
import {
  LoginContainer,
  ButtonDivStyle,
  ButtonTitleStyle,
  ButtonTitleStyleApple,
  GubunSunStyleDiv,
  ButtonDivStyleApple,
  InformationContainer,
  SignUpButtonDivStyle,
  SiginInButtonContainer,
} from "@/styles/main/mainstyles";
import { Button, Icon } from "@/utils";
import { useNavigate } from "react-router-dom";

const MainLoginForm = () => {
  const navigate = useNavigate();
  const signInNavigateHandler = () => {
    navigate("/login");
  };
  return (
    <LoginContainer>
      <ButtonDivStyle>
        <Button
          hoverColor="hoverLightBlue"
          size="login1"
          color="blue"
          backgroundColor="white"
          borderColor="gray"
          title={<ButtonTitleStyle>로그인</ButtonTitleStyle>}
        />
      </ButtonDivStyle>
      <ButtonDivStyleApple>
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
      </ButtonDivStyleApple>
      <GubunSunStyleDiv>
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
      </GubunSunStyleDiv>
      <SignUpButtonDivStyle>
        <Button
          hoverColor="hoverBlue"
          size="login1"
          color="white"
          backgroundColor="blue"
          title={<ButtonTitleStyle>계정 만들기</ButtonTitleStyle>}
        />
      </SignUpButtonDivStyle>
      <InformationContainer>
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
      </InformationContainer>
      <SiginInButtonContainer>
        <div className="already-question">
          <span>이미 트위터에 가입하셨나요?</span>
        </div>
        <SignUpButtonDivStyle>
          <Button
            hoverColor="hoverBlue"
            size="login1"
            color="blue"
            borderColor="gray"
            backgroundColor="white"
            title={<ButtonTitleStyle>로그인</ButtonTitleStyle>}
            onClick={signInNavigateHandler}
          />
        </SignUpButtonDivStyle>
      </SiginInButtonContainer>
    </LoginContainer>
  );
};
export default MainLoginForm;
