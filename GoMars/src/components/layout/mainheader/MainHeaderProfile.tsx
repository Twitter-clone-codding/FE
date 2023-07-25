import { threedot } from "@/assets/svg";
import Button from "@/utils/Button";
import { Icon, Modal } from "@/utils";
// import { ProfileContainor } from "@/styles/header/MainheaderStyle";
import styled, { css } from "styled-components";

import { MutableRefObject, useRef, useState } from "react";
interface MainHeaderProfileProps {
  size?: "large" | "medium" | "small";
  type: "follow" | "profile";
  onClick?: () => void;
}

const typeStyles = {
  profile: css`
    border-radius: 9999px;
    transition: all 0.2s ease;
    &:hover {
      background-color: rgba(15, 20, 25, 0.1);
    }
  `,
};
const ProfileContainor = styled.div<MainHeaderProfileProps>`
  margin: 12px 0;
  ${(props) => typeStyles[props.type]};
  width: 100%;
  height: 64.06px;
  border-radius: 9999px;
  padding: 12px;
  align-items: center;
  .profile-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .main-info {
    display: flex;
    flex-direction: row;
  }

  .avatar1 {
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    background-color: red;
  }
  .avatar2 {
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    background-color: red;
    &:hover {
      opacity: 0.5;
    }
  }
  .info {
    margin: 0 12px;
  }
  .info-name {
    font-weight: 600;
  }
  .info-tag-name {
    color: rgb(83, 100, 113);
  }
  .side-item {
    display: flex;
    align-items: center;
  }
  .icon-box {
    width: 34.75px;
    height: 34.75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    transition: all 0.3s ease;
  }
`;
const ProfileModalContainor = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  width: 300px;
  height: 113px;
  bottom: 86.75px;
  left: 290px;
  pointer-events: auto;
  backface-visibility: hidden;
  font-size: 15px;
  flex-shrink: 1;
  align-self: stretch;
  box-shadow:
    rgba(101, 119, 134, 0.2) 0px 0px 15px,
    rgba(101, 119, 134, 0.15) 0px 0px;
`;

const ProfileModalItemWrapper = styled.div`
  padding: 12px 0;
  .profile-modal-item {
    width: 300px;
    height: 44px;
    padding: 12px 16px;
    font-size: inherit;
    font-weight: 700;
    cursor: pointer;
  }
`;
const MainHeaderProfile: React.FC<MainHeaderProfileProps> = (props) => {
  const { type, size } = props;
  const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [modalCheck, setModalCheck] = useState(false);
  const onClickModalHandler = () => {
    setModalCheck((prev: boolean) => !prev);
  };

  const sideClickItem =
    type === "profile" ? (
      <>
        <ProfileContainor type={type} onClick={onClickModalHandler}>
          <div className="profile-wrapper">
            <div className="main-info">
              <div className="avatar1"></div>
              <div className="info">
                <div className="info-name">강신범</div>
                <div className="info-tag-name">@kaning</div>
              </div>
            </div>
            <div className="icon-box">
              <Icon
                color="rgb(15, 20, 25)"
                height={18.75}
                width={18.75}
                path={threedot}
              />
            </div>
          </div>
        </ProfileContainor>
        {modalCheck && (
          <ProfileModalContainor>
            <ProfileModalItemWrapper>
              <div className="profile-modal-item">Add an existing account</div>
              <div className="profile-modal-item">Log out @gangsinbeo72832</div>
            </ProfileModalItemWrapper>
          </ProfileModalContainor>
        )}
      </>
    ) : (
      <>
        <ProfileContainor type={type}>
          <div className="profile-wrapper">
            <div className="main-info">
              <div className="avatar2" />
              <div className="info">
                <div className="info-name">강신범</div>
                <div className="info-tag-name">@kaning</div>
              </div>
            </div>
            <div className="side-item">
              <Button
                backgroundColor="black"
                color="white"
                size="follow"
                title={<span>Follow</span>}
              />
            </div>
          </div>
        </ProfileContainor>
      </>
    );

  return <>{sideClickItem}</>;
};

export default MainHeaderProfile;
