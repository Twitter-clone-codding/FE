import { centerFooterArray, refresh, threedot } from "@/assets/svg";
import { Wrapper } from "@/styles/maincenter/maincenter";
import { Icon } from "@/utils";

const MainCenterListItem: React.FC<Tweet> = (props) => {
  const { content, createdAt, hashtag, hearts, imgList, views, TweetId, heartCheck, user } = props;
  const detailNavigateHandler = () => {
    console.log("imgList", imgList);
  };

  console.log(
    "content: ",
    content,
    "createdAt: ",
    createdAt,
    "hashtag: ",
    hashtag,
    "hearts: ",
    hearts,
    "imgList: ",
    imgList,
    "views: ",
    views,
    "TweetId: ",
    TweetId,
    "heartCheck: ",
    heartCheck,
    "user: ",
    user
  );
  return (
    <Wrapper>
      <div className="avartar-wrapper">
        <div className="avartar" />
      </div>
      <div className="main">
        <div className="main-header">
          <div className="main-header-span">
            <span>{user?.nickname}</span>
            <span className="hashtag">@{user?.nickname}</span>
            <span>·jul 22</span>
          </div>
          <Icon color={"rgb(83, 100, 113)"} height={18.75} width={18.75} path={threedot} />
        </div>
        <div className="main-contnet">
          <div className="main-contnet-comment">
            <span>{content}</span>
          </div>
          <div className="main-content-item" />
        </div>
        <div className="footer">
          <div className="footer-box">
            {centerFooterArray.map((path) => (
              <div className="footer-item">
                <Icon path={path} color={"rgb(83, 100, 113)"} height={18.75} width={18.75} />
                <span>000</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainCenterListItem;

{
  /* <div className="avartar-wrapper">
        <div className="avartar"></div>
        <div />
        <div className="center-wrapper">
          <div className="cneter-header"></div>
          <div className="center-header-span">
            <span className="center-user-id">orign</span>
            <span className="center-info">
              {hashtag} · {createdAt}
            </span>

            <Icon
              color={"rgb(83, 100, 113)"}
              height={18.75}
              width={18.75}
              path={threedot}
            />
          </div>
          <div className="center-main-comment">{content}</div>
          <div className="center-main-content">asdfasdf</div>
          <div className="footer-wrapper">
            {centerFooterArray.map((path) => (
              <Icon
                path={path}
                color={"rgb(83, 100, 113)"}
                height={18.75}
                width={18.75}
              />
            ))}
          </div>
        </div>
      </div> */
}
