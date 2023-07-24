import styled, { css } from "styled-components";

import { threedot } from "@/assets/svg";
import Button from "@/utils/Button";
import { Icon } from "@/utils";
interface MainHeaderProfileProps {
  size?: "large" | "medium" | "small";
  type: "follow" | "profile";
}
const sizeStyles = {
  large: css``,
  medium: css``,
  small: css``,
};

const ProfileContainor = styled.div`
  display: flex;
  margin: 12px 0;
  /* width: 259px; */
  justify-content: space-between;
  width: 100%;
  height: 64.06px;
  border-radius: 9999px;
  padding: 12px;
  align-items: center;

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
    width: 159.5px;
  }

  .side-item {
    width: 35.5px;
  }
`;

const MainHeaderProfile: React.FC<MainHeaderProfileProps> = (props) => {
  const { type, size } = props;
  const sideClickItem =
    type === "profile" ? (
      <Icon
        color="rgb(15, 20, 25)"
        height={18.75}
        width={18.75}
        path={threedot}
      />
    ) : (
      <Button
        backgroundColor="black"
        color="white"
        size="follow"
        title={<span>Follow</span>}
      />
    );

  return (
    <ProfileContainor>
      <div className="main-info">
        <div className="avatar"></div>
        <div className="info">
          <div className="info-name">강신범</div>
          <div className="info-tag-name">@kaning</div>
        </div>
      </div>
      <div className="side-item">{sideClickItem}</div>
    </ProfileContainor>
  );
};

export default MainHeaderProfile;
