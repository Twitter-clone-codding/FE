import { LinkContainer } from "@/styles/header/MainheaderStyle";
import { Icon } from "@/utils";

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

  const sameTitle = title && pathname && title.toLowerCase() === pathname.substring(1);
  const boldIcon = sameTitle ? (
    <>
      {boldPath && <Icon path={boldPath} width={26.25} height={26.25} color={color} />}
      {title && (
        <div className="title">
          <span className="bold">{title}</span>
        </div>
      )}
    </>
  ) : (
    <>
      <Icon path={path} width={26.25} height={26.25} color={color} />
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
