import { threedot } from "@/assets/svg";
import Button from "@/utils/Button";
import { Icon } from "@/utils";
import { ProfileContainor } from "@/styles/header/MainheaderStyle";
import { useAppDispatch } from "@/hooks/useRedux";
import { userLogOut } from "@/store/slice/userSlice";
interface MainHeaderProfileProps {
  size?: "large" | "medium" | "small";
  type: "follow" | "profile";
}

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
