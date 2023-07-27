import styled from "styled-components";

const MessagesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  flex-grow: 1;
`;

const ChatingRoom = styled.div`
  display: flex;
  border-right: 1px solid rgb(239, 243, 244);
  flex-grow: 1;
  width: 100%;
  max-width: 600px;
`;

interface img {
  img: string;
}
const MessageRoom = styled.div<img>`
  display: flex;
  flex-direction: column;
  user-select: text;
  position: relative;
  min-width: 388px;
  border-right: 1px solid rgb(239, 243, 244);
  border-left: 1px solid rgb(239, 243, 244);
  padding: 12 0px;
  .input-container {
    padding: 12px;
  }
  .relative-container {
    position: relative;
    float: 1;
    width: 100%;
    .ul-list {
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      display: flex;
      flex-direction: column;
      z-index: 1;
      border-radius: 8px;
      overscroll-behavior: contain;
      background-color: rgba(255, 255, 255, 1);
      overflow-y: auto;
      box-shadow:
        rgba(101, 119, 134, 0.2) 0px 0px 15px,
        rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
      max-height: calc(80vh - 53px);
      min-height: 100px;
      .li-list {
        display: flex;
        position: relative;
        &:hover {
          background-color: rgb(247, 249, 249);
        }
        transition-duration: 0.2s;
        transition-property: background-color, box-shadow;
        outline-style: none;
        flex-direction: row;
        cursor: pointer;
        padding: 12px 16px;
        align-items: flex-start;
        .avatar-container {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-right: 12px;
          flex-basis: 47px;
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
        .user-list {
          cursor: pointer;
          display: flex;
          width: 100%;
          flex-basis: auto;
          position: relative;
          z-index: 0;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
        }
        .content {
          display: flex;
          overflow: hidden;
          flex-direction: column;
          .nickname {
            color: rgba(15, 20, 25, 1);
            align-items: center;
            word-wrap: break-word;
            line-height: 20px;
            font-weight: 700;
            white-space: nowrap;
          }
          .tag {
            cursor: pointer;
            max-width: 100%;
            overflow-x: hidden;
            overflow-y: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: break-word;
            line-height: 20px;
            font-feature-settings: "ss01";
            color: rgb(83, 100, 113);
          }
        }
        .close {
          cursor: pointer;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0);
          user-select: none;
          &:hover {
            background-color: rgba(29, 155, 240, 0.1);
          }
        }
        transition-duration: 0.2s;
        transition-property: background-color, box-shadow;
        outline-style: none;
        min-width: 32px;
        background-color: rgba(0, 0, 0, 0);
        min-height: 32px;
      }
    }
  }
`;

export { MessagesContainer, ChatingRoom, MessageRoom };
