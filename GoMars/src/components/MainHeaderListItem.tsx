import { Link } from "react-router-dom";
import Icon from "../utils/Icon";
import styled from "styled-components";

interface MainHeaderListItemProps {
  title?: string;
  path: string;
  boldPath: string;
  link?: string;
  color?: string;
  pathname?: string;
}

const LinkContainer = styled(Link)`
  display: flex;
  width: 236.78px;
  height: 50.25px;

  * {
    color: black;
  }
  &:hover {
    .link-wrapper {
      background-color: rgba(15, 20, 25, 0.1);
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
  .bold {
    font-weight: 700;
  }
`;

const MainHeaderListItem: React.FC<MainHeaderListItemProps> = (props) => {
  const { title, path, boldPath, color, pathname } = props;
  const lowerTitle = title.toLowerCase();

  const sameTitle = title.toLowerCase() === pathname.substring(1);
  const boldIcon = sameTitle ? (
    <>
      <Icon path={boldPath} width={26.25} height={26.25} color={color} />
      <div className="title">
        <span className="bold">{title}</span>
      </div>
    </>
  ) : (
    <>
      <Icon path={path} width={26.25} height={26.25} color={color} />
      <div className="title">
        <span>{title}</span>
      </div>
    </>
  );
  return (
    <LinkContainer to={`/${lowerTitle}`} color={color}>
      <div className="link-wrapper">{boldIcon}</div>
    </LinkContainer>
  );
};

export default MainHeaderListItem;
