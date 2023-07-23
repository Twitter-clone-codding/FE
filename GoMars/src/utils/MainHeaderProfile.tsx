import styled from "styled-components";
import Icon from "./Icon";
import { threedot } from "@/assets/svg";

const ProfileContainor = styled.div`
  display: flex;
  margin: 12px 0;
  width: 259px;
  height: 64.06px;
  border-radius: 9999px;
  padding: 12px;
  align-items: center;
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

  .info-icon {
    width: 35.5px;
  }
`;

const MainHeaderProfile = (props) => {
  const {} = props;
  return (
    <ProfileContainor>
      <div className="avatar"></div>
      <div className="info">
        <div className="info-name">강신범</div>
        <div className="info-tag-name">@kaning</div>
      </div>
      <div className="info-icon">
        <Icon
          color="rgb(15, 20, 25)"
          height={18.75}
          width={18.75}
          path={threedot}
        />
      </div>
    </ProfileContainor>
  );
};

export default MainHeaderProfile;
