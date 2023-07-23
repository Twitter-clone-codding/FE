import { refresh, threedot } from "@/assets/svg";
import Icon from "@/utils/Icon";
import styled from "styled-components";

interface CenterItemProps {
  onClick?: () => void;
}

const Wrapper = styled.div`
  padding: 0 16px;
  padding-top: 12px;
  width: 100%;

  .avartar-wrapper {
    width: 40px;
  }
  .avartar {
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 9999px;
  }
`;

const MainCenterListItem: React.FC<CenterItemProps> = (props) => {
  const {} = props;
  return (
    <Wrapper>
      <div className="avartar-wrapper">
        <div className="avartar"></div>
      </div>
      <div className="center-wrapper">
        <div className="cneter-header">
          <span>DIFF</span>
          <span>@diff_1234</span>
          <span>23h</span>
          <Icon
            color={"rgb(83, 100, 113)"}
            height={18.75}
            width={18.75}
            path={threedot}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainCenterListItem;
