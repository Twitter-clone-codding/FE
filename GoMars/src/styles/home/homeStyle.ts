import styled from "styled-components";

interface ProfileImageProps {
  img: string;
}
const HashTag = styled.span`
  color: blue;
`;

const PostContainer = styled.div<ProfileImageProps>`
  position: relative;
  display: flex;
  padding: 0 16px;
  background-color: rgba(255, 255, 255, 1);
  padding-top: 4px;
  z-index: 1;
  border-bottom: 1px solid rgb(239, 243, 244);
  .avatar-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 12px;
    flex-basis: 40px;
    padding-top: 12px;
    .avatar-wrraper {
      pointer-events: auto;
      flex-direction: column;
      position: relative;
      z-index: 0;
      height: 40px;
      bottom: 0px;
      left: 0px;
      top: 0px;
      width: 100%;
      border-radius: 9999px;
      overflow: hidden;
      .avatar-box {
        bottom: 0px;
        left: 0px;
        right: 0px;
        top: 0px;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        background-image: url(${(props) => props.img});
      }
      img {
        inset: 0px;
        height: 100%;
        opacity: 0;
        position: absolute;
        width: 100%;
        z-index: -1;
      }
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding-top: 4px;
    position: static;
    transition-duration: 0.1s;
    transition-property: opacity, color;
    transition-timing-function: ease-out;
    .down-container {
      display: flex;
      width: 175px;
      /* padding: 0 0 12px; */
      .everyone-container {
        min-height: 24px;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        text-align: center;
        word-wrap: break-word;
        line-height: 20px;
        font-weight: 700;
        flex-direction: row;
        flex-grow: 1;
        justify-content: center;
        color: rgb(29, 155, 240);
        border-radius: 9999px;

        &:hover {
          background-color: rgba(29, 155, 240, 0.1);
        }
        span {
        }
      }
    }
    .selcet-container {
      display: flex;
      flex-direction: row;
      gap: 4px;
      min-height: 24px;
      width: 110px;
      border: 1px solid rgba(207, 217, 222);
      margin: 0 0 12px 0;
      border-radius: 9999px;
      justify-content: center;
      align-items: center;
      span {
        cursor: pointer;
        color: rgb(29, 155, 240);
        overflow-x: hidden;
        overflow-y: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0px;
        word-wrap: break-word;
        line-height: 16px;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .content-wrraper {
      border: 2px solid rgba(0, 0, 0, 0);
      display: flex;
      border-radius: 4px;
      border-width: 2px;
      flex-direction: column;
      padding: 12px 0 0px 0;
      cursor: text;
      font:
        14px -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
      word-wrap: break-word;
      font-size: 20px;
      line-height: 24px;
      color: #536471;
      white-space: pre-wrap;
      textarea {
        line-height: 1.5;
        overflow: hidden;
        resize: none;
        min-height: 1.5em;
        position: relative;
        display: flex;
        box-sizing: border-box;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        resize: none;
        overflow: auto;
        font:
          20px -apple-system,
          BlinkMacSystemFont,
          "Segoe UI",
          Roboto,
          Helvetica,
          Arial,
          sans-serif;
        &::placeholder {
          word-wrap: break-word;
          font-size: 20px;
          line-height: 24px;
          color: #536471;
          white-space: pre-wrap;
          font-family: inherit;
          font:
            20px -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;
        }
        &:focus {
          outline: none;
        }
      }
    }
    .button-container {
      display: flex;
      justify-content: space-between;
      padding: 0 0 8px;
      .button-box {
        margin: 12px 0 0;
        margin-left: -12px;
        display: flex;
        gap: 5px;
        .footer-item-disable {
          display: flex;
          width: 34px;
          height: 34px;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          > span {
            padding: 0 12px;
          }
        }
        .footer-item {
          display: flex;
          width: 34px;
          height: 34px;
          justify-content: center;
          align-items: center;
          border-radius: 9999px;
          flex-direction: row;
          cursor: pointer;
          &:hover {
            background-color: rgba(29, 155, 240, 0.1);
          }
          > span {
            padding: 0 12px;
          }
        }
      }
      .tweet-btn-container {
        margin: 12px 0 0 12px;
        display: flex;
      }
    }
  }
`;

const ButtonTitle = styled.span`
  user-select: none;
  text-align: center;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  line-height: 20px;
  font-size: 15px;
`;

export { ButtonTitle, PostContainer };
