import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
  transition-duration: 100ms;
  transition-property: margin-bottom;
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-basis: auto;
    flex-shrink: 0;
    position: relative;
    padding: 12px 16px;
    flex-direction: row;
    flex-wrap: wrap;
    a {
      direction: ltr;
      unicode-bidi: isolate;
      background-color: rgba(0, 0, 0, 0);
      list-style: none;
      text-align: inherit;

      display: inline;
      font:
        14px -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
      white-space: pre-wrap;
      margin-bottom: 4px;
      margin-top: 4px;
      min-width: 0px;
      word-wrap: break-word;
      font-family:
        "TwitterChirp",
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
      font-weight: 400;
      cursor: pointer;
      font-size: 13px;
      line-height: 16px;
      padding-right: 16px;
      color: rgb(83, 100, 113);
      span {
        pointer-events: auto;
        list-style: none;
        text-align: inherit;
        cursor: pointer;
        border: 0 solid black;
        box-sizing: border-box;
        display: inline;
        color: inherit;
        font: inherit;
        white-space: inherit;
        min-width: 0px;
        word-wrap: break-word;
        font-family: inherit;
      }
    }
  }
`;
const MainLeftContainer = styled.div`
  flex: 1;
  display: flex;
  background-color: rgb(107, 201, 251);
  .main-left-wrraper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 0;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgb(29, 155, 240);
    overflow: hidden;
    .left-img-container {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      bottom: 0px;
      left: 0px;
      right: 0px;
      top: 0px;
      position: absolute;
    }
    .main-logo {
      width: 100%;
      max-height: 380px;
      height: 50%;
      color: rgb(255, 255, 255);
      display: flex;
      padding: 32px;
      fill: currentcolor;
      max-width: 100%;
      position: relative;
      user-select: none;
      justify-content: center;
      img {
        max-height: 380px;
        height: 100%;
        filter: invert(1);
      }
    }
    .imgs {
      inset: 0px;
      height: 100%;
      opacity: 0;
      position: absolute;
      width: 100%;
      z-index: -1;
      overflow: clip;
    }
    .main-left-box {
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
      background-image: url("https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png");
    }
  }
`;

const MainRightContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  max-width: 45vw;
  padding: 16px;
  .main-right-wrraper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    padding: 20px;
    width: 100%;
    max-width: 760px;
    min-width: 437px;
    .main-right-logo {
      height: 57px;
      width: 44px;
      /* height: 3.3rem; */
      padding: 0 0 12px 0;
      img {
        width: 100%;
        height: 100%;
        fill: rgb(29, 155, 240);
        color: rgb(29, 155, 240);
        filter: invert(0.5);
      }
    }
    .main-right-title {
      letter-spacing: -1.2px;
      font-size: 64px;
      color: rgb(15, 20, 25);
      line-height: 84px;
      font-family:
        TwitterChirpExtendedHeavy,
        Verdana,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
      font-weight: 700;
      word-wrap: break-word;
      margin: 48px 0;
    }
    .title-subtitle-font {
      font-family: inherit;
      word-wrap: break-word;
      color: inherit;
      font: inherit;
      white-space: inherit;
    }
    .main-right-subtitle {
      margin: 0 0 32px 0;
      color: rgb(15, 20, 25);
      font-family:
        TwitterChirpExtendedHeavy,
        Verdana,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
      line-height: 36px;
      font-size: 31px;
      font-weight: 700;
      word-wrap: break-word;
    }
  }
`;
const StyledDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LoginContainer = styled(StyledDivStyle)`
  width: 100%;
  height: 356px;
`;
const ButtonDivStyle = styled.div`
  width: 300px;
  margin-bottom: 12px;
  max-width: 380px;
`;
const ButtonDivStyleApple = styled(ButtonDivStyle)`
  margin-bottom: 0;
`;
const ButtonTitleStyle = styled.span`
  font-weight: 700;
  line-height: 20px;
  font-size: 15px;
  font-family: inherit;
`;
const ButtonTitleStyleApple = styled(ButtonTitleStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const GubunSunStyleDiv = styled(StyledDivStyle)`
  max-width: 380px;
  margin: 4px 0px;
  width: 300px;
  height: 28px;
  .gubun-padding {
    align-items: stretch;
    box-sizing: border-box;
    display: flex;
    margin: 4px -4px;
    flex-direction: row;
  }
  .gubunsun-div {
    display: flex;
    justify-content: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 4px;
    min-width: 0px;
    .sun {
      background-color: rgb(239, 243, 244);
      height: 1px;
    }
  }
  span {
    word-wrap: break-word;
    line-height: 20px;
    font-weight: 400;
    color: rgb(15, 20, 25);
  }
`;
const InformationContainer = styled.div`
  white-space: pre-wrap;
  flex: 1;
  width: 300px;
  font-size: 11px;
  line-height: 12px;
  margin-bottom: 20px;
  max-width: 380px;
  color: rgb(83, 100, 113);
  word-wrap: break-word;
  a {
    font: inherit;
    white-space: inherit;
    word-wrap: break-word;
    font-family: inherit;
    color: rgb(29, 155, 240);
    cursor: pointer;
    span {
    }
  }
`;
const SiginInButtonContainer = styled(StyledDivStyle)`
  margin-top: 40px;
  .already-question {
    line-height: 20px;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 20px;
    max-width: 380px;
    color: rgb(15, 20, 25);
    span {
      color: inherit;
      font: inherit;
      white-space: inherit;
      word-wrap: break-word;
      font-family: inherit;
    }
  }
`;
const SignUpButtonDivStyle = styled(ButtonDivStyle)`
  margin-bottom: 8px;
`;
export {
  SiginInButtonContainer,
  SignUpButtonDivStyle,
  InformationContainer,
  ButtonDivStyleApple,
  GubunSunStyleDiv,
  ButtonDivStyle,
  ButtonTitleStyle,
  ButtonTitleStyleApple,
  FooterContainer,
  MainRightContainer,
  MainLeftContainer,
  LoginContainer,
};
