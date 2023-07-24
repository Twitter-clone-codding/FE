import { centerFooterArray, refresh, threedot } from "@/assets/svg";
import { Wrapper } from "@/styles/maincenter/maincenter";
import Icon from "@/utils/Icon";

const MainCenterListItem: React.FC<Tweet> = (props) => {
  const { content, createdAt, hashtag, hearts, imgList, views } = props;
  const detailNavigateHandler = () => {
    console.log("imgList", imgList);
  };
  console.log("imgList", imgList);
  const {} = props;
  return (
    <Wrapper>
      <div className="avartar-wrapper">
        <div className="avartar" />
      </div>
      <div className="main">
        <div className="main-header">
          <div className="main-header-span">
            <span>orign</span>
            <span className="hashtag">@helloworld</span>
            <span>·jul 22</span>
          </div>
          <Icon color={"rgb(83, 100, 113)"} height={18.75} width={18.75} path={threedot} />
        </div>
        <div className="main-contnet">
          <div className="main-contnet-comment">
            <span>
              여기에 가지가지 얘기다 전부 다 담길 예정인데여기에 가지가지 얘기다 전부 다 담길
              예정인데여기에 가지가지 얘기다 전부 다 담길 예정인데여기에 가지가지 얘기다 전부 다
              담길 예정인데여기에 가지가지 얘기다 전부 다 담길 예정인데여기에 가지가지 얘기다 전부
              다 담길 예정인데
            </span>
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
