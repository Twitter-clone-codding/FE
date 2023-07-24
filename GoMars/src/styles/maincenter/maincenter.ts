import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 16px;
  padding-top: 12px;
  width: 100%;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  .avartar-wrapper {
    width: 40px;
    margin-right: 12px;
  }
  .avartar {
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 9999px;
  }
  .main-header {
    display: flex;
    justify-content: space-between;
  }
  .main-header-span {
    > span:first-child {
      font-weight: 700;
    }
  }

  .hashtag {
    margin-left: 4px;
  }
  .main-content-item {
    min-height: 300px;
    background-color: lightgray;
    border-radius: 16px;
    margin-top: 12px;
  }

  .footer {
    width: 100%;
    padding-top: 12px;
    height: 32px;
  }
  .footer-box {
    display: flex;
    max-width: 425px;
    justify-content: space-between;
  }
  .footer-item {
    display: flex;
    flex-direction: row;
    > span {
      padding: 0 12px;
    }
  }
`;
const Containor = styled.div`
  width: 600px;
  background-color: rgba(0, 0, 0, 0.03);

  .main {
    height: 413.67px;
  }
  .main-image {
    height: 199.33px;
    background-color: lightgray;
  }
  .main-profile {
    height: 198.34px;
    padding: 12px 16px 0 16px;
    margin-bottom: 16px;
    position: relative;
  }
  .main-profile-circle {
    width: 133.5px;
    height: 133.5px;
    background-color: red;
    border-radius: 9999px;
    position: absolute;
    top: -37%;
    border: 5px solid white;
    box-sizing: content-box;
  }
  .main-profile-button {
    display: flex;
    justify-content: flex-end;
    height: 68.61px;
    width: 100%;
  }
  .button {
    display: flex;
  }
  .main-profile-name {
    height: 49.73px;
    margin-top: 4px;
    margin-bottom: 12px;
  }
  .main-profile-name-username {
    height: 25.73px;
    font-size: 20px;
    font-weight: bold;
  }
  .main-profile-name-hashtag {
    height: 20px;
    color: rgb(83, 100, 113);
  }
  .main-profile-create {
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    color: rgb(83, 100, 113);
  }
  .main-profile-create-icon {
    margin-right: 4px;
  }
  .main-profile-follow {
    height: 20px;
    display: flex;
    flex-direction: row;
  }
  .main-profile-follow-info {
    > a {
      color: rgb(83, 100, 113);
      display: flex;
      flex-direction: row;
      gap: 4px;
      div:first-child {
        font-weight: 700;
      }
    }
    margin-right: 20px;
  }
  .selector {
    height: 54px;
    display: flex;
    flex-direction: row;
  }
  .more-info {
    height: 938px;
  }
  .more-info-title {
    height: 48px;
    padding: 12px 16px;
    font-size: 21.5px;
    font-weight: 700;
  }
  .more-info-more-info-caruosel {
    height: 172px;
  }
`;
const HomeHeaderDiv = styled.div`
  position: relative;
  align-items: stretch;
  display: flex;
  flex-direction: column;
`;

const HomeHeaderBottomLeft = styled(HomeHeaderDiv)`
  flex-grow: 1;
  align-items: center;
  transition: all 0.2s;
  outline-style: none;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  height: 53px;
  min-width: 56px;
  padding: 0 16px;
  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }

  .rightbutton-title {
    height: 100%;
    padding-bottom: 16px;
    padding-top: 16px;
    font-weight: 500;
    color: rgb(83, 100, 113);
  }
  .leftbutton-title {
    font-weight: 700;
    color: rgb(15, 20, 25);
  }
  .rightbutton-title,
  .leftbutton-title {
    direction: ltr;
    unicode-bidi: isolate;
    white-space: pre-wrap;
    display: flex;
    position: relative;
    align-items: center;
    word-wrap: break-word;
    line-height: 20px;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    span {
      text-align: inherit;
      color: inherit;
      font: inherit;
      white-space: inherit;
      min-width: 0px;
      word-wrap: break-word;
      font-family: inherit;
    }
    .bottom-color {
      border-bottom-left-radius: 9999px;
      border-bottom-right-radius: 9999px;
      border-top-left-radius: 9999px;
      border-top-right-radius: 9999px;
      display: inline-flex;
      bottom: 0px;
      position: absolute;
      width: 100%;
      min-width: 56px;
      height: 4px;
      align-self: center;
      background-color: rgb(29, 155, 240);
    }
  }
`;
export { Wrapper, Containor, HomeHeaderBottomLeft, HomeHeaderDiv };
