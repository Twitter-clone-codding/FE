import { Link } from "react-router-dom";
import Icon from "../utils/Icon";
import styled from "styled-components";

interface MainHeaderListItemProps {
  title: JSX.Element;
  path: string;
  link?: string;
}

const LinkContainer = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
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
      font-size: 24px;
    }
    .title {
      display: flex;
      align-items: center;
      margin-left: 20px;
      margin-right: 16px;
    }
  }
`;

const Containor = styled.div`
  display: flex;
  /* min-width: 100%;
  min-height: 100%; */
  padding: 12px;
  /* border: 1px solid black; */
  border-radius: 60px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease;
  }
  > * span {
    font-size: 24px;
  }
  .title {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 16px;
  }
`;

const MainHeaderListItem: React.FC<MainHeaderListItemProps> = (props) => {
  const { title, path, link } = props;

  return (
    <LinkContainer to="/">
      <div className="link-wrapper">
        <Icon path={path} width={50} height={50} />
        <div className="title">{title}</div>
      </div>
    </LinkContainer>
  );
};

export default MainHeaderListItem;
