import { threedot, cancel } from "@/assets/svg";
import Button from "@/utils/Button";

import { Icon } from "@/utils";
import { useAppDispatch } from "@/hooks/useRedux";
import { userLogOut } from "@/store/slice/userSlice";
import styled, { css } from "styled-components";

interface MainHeaderProfileProps {
  type: "follow" | "profile" | "search";
  onClick?: () => void;
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
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    background-color: red;
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
  let sideClickItem;
  switch (type) {
    case "follow":
      sideClickItem = (
        <Button
          backgroundColor="black"
          color="white"
          size="follow"
          title={<span>Follow</span>}
        />
      );
      break;
    case "profile":
      sideClickItem = (
        <Icon
          color="rgb(15, 20, 25)"
          height={18.75}
          width={18.75}
          path={threedot}
        />
      );
      break;
    case "search":
      sideClickItem = (
        <Icon
          color="rgb(15, 20, 25)"
          height={18.75}
          width={18.75}
          path={cancel}
        />
      );
      break;
  }

  return (
    <ProfileContainor type={type}>
      <div className="profile-wrapper">
        <div className="main-info">
          <div className="avatar" onClick={() => dispatch(userLogOut())}></div>
          <div className="info">
            <div className="info-name">강신범</div>
            <div className="info-tag-name">@kaning</div>
          </div>
        </div>
        <div className={type}>{sideClickItem}</div>
      </div>
    </ProfileContainor>
  );
};

export default MainHeaderProfile;
