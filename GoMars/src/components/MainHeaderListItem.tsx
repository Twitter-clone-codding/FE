import { Link } from "react-router-dom";
import Icon from "../utils/Icon";
import styled from "styled-components";

interface MainHeaderListItemProps {
  title?: JSX.Element;
  path: string;
  link?: string;
  color?: string;
}

const LinkContainer = styled(Link)`
  display: flex;
  width: 259px;
  height: 58.25px;
  padding: 4px 0;

  * {
    color: black;
  }
  &:hover {
    .link-wrapper {
      background-color: lightgray;
    }
  }
  .link-wrapper {
    display: flex;
    padding: 12px;
    border-radius: 60px;
    cursor: pointer;
    transition: all 0.2s ease;
    > * span {
      font-size: 21px;
    }
    .title {
      display: flex;
      align-items: center;
      margin-left: 20px;
      margin-right: 16px;
    }
  }
`;

const MainHeaderListItem: React.FC<MainHeaderListItemProps> = (props) => {
  const { title, path, color } = props;

  return (
    <LinkContainer to="/" color={color}>
      <div className="link-wrapper">
        <Icon path={path} width={26.25} height={26.25} color={color} />
        <div className="title">{title}</div>
      </div>
    </LinkContainer>
  );
};

export default MainHeaderListItem;
