import { normal } from "@/assets/img";
import { close } from "@/assets/svg";
import { Icon } from "@/utils";
import { FC } from "react";
import styled from "styled-components";

interface RoomProps extends ChatRooms {
  handleRoomClick: () => void;
}

const ChatingRoomItem: FC<RoomProps> = (props) => {
  const { profileImageUrl, nickname, tagName, id, roomKey, handleRoomClick } = props;
  const profileImage = profileImageUrl ?? normal;
  return (
    <ChatingRoomItemContaienr img={profileImage} onClick={handleRoomClick}>
      <div className="avatar-container">
        <div className="avatar-wrraper">
          <div className="avatar-box"></div>
          <img src={profileImage} alt="" />
        </div>
      </div>
      <div className="user-list">
        <div className="content">
          <div className="nickname">{nickname}</div>
          <div className="tag">{tagName}</div>
        </div>
        <div className="close">
          <Icon height={18} width={18} path={close} color={"rgb(29,155,240)"} />
        </div>
      </div>
    </ChatingRoomItemContaienr>
  );
};
export default ChatingRoomItem;

interface imgprops {
  img: string;
}

const ChatingRoomItemContaienr = styled.div<imgprops>`
  display: flex;
  position: relative;
  background-color: rgb(239, 243, 244);
  &:hover {
    background-color: rgb(247, 249, 249);
  }
  border-right: 2px solid rgb(29, 155, 240);
  width: 100%;
  transition-duration: 0.2s;
  transition-property: background-color, box-shadow;
  outline-style: none;
  flex-direction: row;
  cursor: pointer;
  padding: 16px;
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
    flex-direction: row;
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
  min-height: 32px;
`;
