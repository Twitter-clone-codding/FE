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

const SOCIAL_CONFIG = {
  google_client_id: import.meta.env.VITE_GOOGLE_CLIENT_KEY,
  google_redirect_uri: import.meta.env.VITE_GOOGLE_REDIRENT_URI,
  google_url: import.meta.env.VITE_GOOGLE_URL,
};

interface socialoption {
  pathname: string;
  search: string;
}
const googleLinkOptions = {
  pathname: `${SOCIAL_CONFIG.google_url}`,
  search: `?client_id=${SOCIAL_CONFIG.google_client_id}&redirect_uri=${SOCIAL_CONFIG.google_redirect_uri}&response_type=code&state=google&scope=https://www.googleapis.com/auth/userinfo.email`,
};
export const socialhandler = (option: socialoption) => {
  window.location.href = `${option.pathname + option.search}`;
};
const MainLoginForm = () => {
  const navigate = useNavigate();
  const signInNavigateHandler = () => {
    navigate("/login", { state: { step: 0 } });
  };

  return (
    <LoginContainer>
      <ButtonDivStyle>
        <Button
          onClick={() => socialhandler(googleLinkOptions)}
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
          onClick={() => navigate("/signup")}
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
