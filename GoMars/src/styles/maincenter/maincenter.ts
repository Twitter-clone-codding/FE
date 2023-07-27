import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 0 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  .main {
    flex-grow: 1;
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
    justify-content: center;
    align-items: center;
    > span {
      padding: 0 12px;
    }
  }
`;
interface ImageProps {
  image: string;
}

const MainImgBox = styled.div<ImageProps>`
  position: relative;
  border-radius: 16px;
  margin-top: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .image-box {
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    bottom: 0px;
    left: 0px;
    right: 0px;
    top: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    background-image: url(${(props) => props.image});
  }
  img {
    opacity: 0;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 520px;
    height: 100%;
    object-position: center;
    height: auto;
    border: none;
    outline: none;
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
  .more-info-tweet {
    padding-top: 12px;
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
interface userProfileImage {
  userProfileImage: string;
}
const MainCenterListItemAvartar = styled.div<userProfileImage>`
  position: relative;
  width: 40px;
  height: 40px;
  flex-basis: 45px;
  margin-right: 12px;
  overflow: hidden;
  border-radius: 9999px;
  .avartar {
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    bottom: 0px;
    left: 0px;
    right: 0px;
    top: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    background-image: url(${(props) => props.userProfileImage});
  }
  img {
    opacity: 0;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    height: auto;
  }
`;
const MainCenterListItemContent = styled.div`
  cursor: pointer;
  width: 100%;
  .main-header {
    margin: 0 0 2px 0;
    display: flex;
    justify-content: space-between;
  }
  .main-header-span {
    > span:first-child {
      font-weight: 700;
    }
    .date {
      color: rgb(83, 100, 113);
    }
  }

  .hashtag {
    margin-left: 4px;
  }
  .main-content-item {
    background-color: lightgray;
    border-radius: 16px;
    margin-top: 12px;
  }
`;
const MainCenterListItemContainor = styled.div`
  padding: 0 16px;
  padding-top: 12px;
  width: 598px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(239, 243, 244);
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
  .footer {
    width: 100%;
    padding-top: 12px;
  }
  .footer-box {
    display: flex;
    padding-bottom: 6px;
    justify-content: space-between;
  }
`;
interface iconBoxProps {
  hoverBgColors: string;
}

const IconBox = styled.div<iconBoxProps>`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  > span {
    padding: 0 12px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-item-icon {
    width: 34.75px;
    height: 34.75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.hoverBgColors};
    }
  }
`;
export {
  IconBox,
  Wrapper,
  Containor,
  HomeHeaderBottomLeft,
  HomeHeaderDiv,
  MainImgBox,
  MainCenterListItemContainor,
  MainCenterListItemContent,
  MainCenterListItemAvartar,
};
