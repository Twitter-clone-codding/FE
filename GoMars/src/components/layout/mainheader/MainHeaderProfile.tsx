import { threedot, cancel } from "@/assets/svg";
import Button from "@/utils/Button";

import { Icon } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { userLogOut } from "@/store/slice/userSlice";
import styled, { css } from "styled-components";
import { logout } from "@/api/post";
import { normal } from "@/assets/img";

interface MainHeaderProfileProps {
  type: "follow" | "profile" | "search";
  onClick?: () => void;
  img?: string;
}
const typeStyles = {
  follow: css`
    border-radius: 9999px;
    padding: 12px;
  `,
  profile: css`
    padding: 12px 16px;
  `,
  search: css`
    padding: 12px 16px;
  `,
};
const ProfileContainor = styled.div<MainHeaderProfileProps>`
  ${(props) => typeStyles[props.type]}
  margin: 12px 0;
  width: 100%;
  height: 65.06px;
  cursor: pointer;
  &:hover {
    background-color: rgb(247, 249, 249);
  }

  align-items: center;
  .profile-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .main-info {
    display: flex;
    flex-direction: row;
  }
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
  .info {
    margin: 0 12px;
  }
  .info-name {
    font-weight: 600;
  }
  .info-tag-name {
    color: rgb(83, 100, 113);
  }
  .follow {
    display: flex;
    align-items: center;
  }
  .search {
    display: flex;
    align-items: center;
  }
  .profile {
    width: 34.75px;
    height: 34.75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    transition: all 0.3s ease;
  }
`;
const MainHeaderProfile: React.FC<MainHeaderProfileProps> = (props) => {
  const { type } = props;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  let sideClickItem;
  switch (type) {
    case "follow":
      sideClickItem = (
        <Button backgroundColor="black" color="white" size="follow" title={<span>Follow</span>} />
      );
      break;
    case "profile":
      sideClickItem = <Icon color="rgb(15, 20, 25)" height={18.75} width={18.75} path={threedot} />;
      break;
    case "search":
      sideClickItem = <Icon color="rgb(15, 20, 25)" height={18.75} width={18.75} path={cancel} />;
      break;
  }

  const logoutHandelr = async () => {
    await logout()
      .then((res) => {
        alert(res.msg);
      })
      .catch((err) => console.log(err));
    dispatch(userLogOut());
  };

  const Profileimg = user.picture ?? normal;

  return (
    <ProfileContainor type={type} img={Profileimg}>
      <div className="profile-wrapper" onClick={logoutHandelr}>
        <div className="main-info">
          <div className="avatar-container">
            <div className="avatar-wrraper">
              <div className="avatar-box"></div>
              <img alt="" src={Profileimg} />
            </div>
          </div>
          <div className="info">
            <div className="info-name">{user.nickname}</div>
            <div className="info-tag-name">{user.tagname}</div>
          </div>
        </div>
        <div className={type}>{sideClickItem}</div>
      </div>
    </ProfileContainor>
  );
};

export default MainHeaderProfile;
