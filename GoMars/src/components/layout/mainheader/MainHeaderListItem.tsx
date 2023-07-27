import { useAppSelector } from "@/hooks/useRedux";
import { LinkContainer } from "@/styles/header/MainheaderStyle";
import { Icon } from "@/utils";
import styled from "styled-components";

interface MainHeaderListItemProps {
  title?: string;
  path: string;
  boldPath?: string;
  link?: string;
  color?: string;
  pathname?: string;
}

const MainHeaderListItem: React.FC<MainHeaderListItemProps> = (props) => {
  const { title, path, boldPath, color, pathname } = props;
  const lowerTitle = title && title.toLowerCase();
  const notice = useAppSelector((state) => state.notice.value);
  const sameTitle = title && pathname && title.toLowerCase() === pathname.substring(1);
  const boldIcon = sameTitle ? (
    <>
      {boldPath && (
        <NoticeContainer>
          {pathname === "Notifications" && notice > 0 && <Notice />}
          <Icon path={boldPath} width={26.25} height={26.25} color={color} />
        </NoticeContainer>
      )}

      {title && (
        <div className="title">
          <span className="bold">{title}</span>
        </div>
      )}
    </>
  ) : (
    <>
      <NoticeContainer>
        {pathname === "Notifications" && notice > 0 && <Notice />}
        <Icon path={path} width={26.25} height={26.25} color={color} />
      </NoticeContainer>
      {title && (
        <div className="title">
          <span>{title}</span>
        </div>
      )}
    </>
  );

  return (
    <LinkContainer to={`/${lowerTitle}`} color={color}>
      <div className="link-wrapper">{boldIcon}</div>
    </LinkContainer>
  );
};

export default MainHeaderListItem;

const Notice = styled.div`
  display: flex;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  border-width: 0px;
  user-select: none;
  position: absolute;
  background-color: rgb(29, 155, 240);
  height: 7px;
  width: 7px;
  right: 1px;
  top: -4px;
`;

const NoticeContainer = styled.div`
  position: relative;
`;
