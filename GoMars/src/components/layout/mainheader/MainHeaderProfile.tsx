import { threedot } from "@/assets/svg";
import Button from "@/utils/Button";

import { Icon } from "@/utils";
import { ProfileContainor } from "@/styles/header/MainheaderStyle";
import { useAppDispatch } from "@/hooks/useRedux";
import { userLogOut } from "@/store/slice/userSlice";
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

  const dispatch = useAppDispatch();
  const sideClickItem =
    type === "profile" ? (
      <Icon color="rgb(15, 20, 25)" height={18.75} width={18.75} path={threedot} />
    ) : (
      <Button backgroundColor="black" color="white" size="follow" title={<span>Follow</span>} />
    );

  return (
    <ProfileContainor>
      <div className="profile-wrapper">
        <div className="main-info">
          <div className="avatar" onClick={() => dispatch(userLogOut())}></div>
          <div className="info">
            <div className="info-name">강신범</div>
            <div className="info-tag-name">@kaning</div>
          </div>
        </div>
        <div className={type === "profile" ? "icon-box" : "side-item"}>{sideClickItem}</div>
      </div>
    </ProfileContainor>
  );
};

export default MainHeaderProfile;
