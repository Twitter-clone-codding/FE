import { logo } from "@/assets/img";
import { Footer } from "@/components/main/Footer";
import MainLoginForm from "@/components/main/Loginform";
import useWindowHeight from "@/hooks/useWindowHeight";
import { MainLeftContainer, MainRightContainer } from "@/styles/main/mainstyles";
import { ThemeProps } from "@/styles/theme";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

interface MainContainerProps extends ThemeProps {
  windowHeight: number;
}

const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  min-height: ${(props) => props.windowHeight}px;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  .main-wrraper {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 45vh;
    display: flex;
    flex-shrink: 1;
    align-items: stretch;
    flex: 1 1 auto;
  }
`;

const Main = () => {
  const windowHeight = useWindowHeight();
  return (
    <MainContainer windowHeight={windowHeight}>
      <div className="main-wrraper">
        <MainLeftContainer className="main-left-container">
          <div className="main-left-wrraper">
            <div className="left-img-container">
              <div className="main-left-box" />
              <img
                src={"https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"}
                alt="asd"
                className="imgs"
                draggable={false}
              />
            </div>
            <div className="main-logo">
              <img src={logo} alt="gg" />
            </div>
          </div>
        </MainLeftContainer>
        <MainRightContainer>
          <div className="main-right-wrraper">
            <div className="main-right-logo">
              <img src={logo} alt="aa" />
            </div>
            <div className="main-right-title">
              <span className="title-subtitle-font">잠시 자리좀 비울게요.</span>
            </div>
            <div className="main-right-subtitle">
              <span className="title-subtitle-font">오늘 트위터에 가입하세요.</span>
            </div>
            {/* 로그인, 회원가입 컨테이너 */}
            <MainLoginForm />
          </div>
        </MainRightContainer>
      </div>
      <Footer />
      <Outlet />
    </MainContainer>
  );
};
export default Main;
