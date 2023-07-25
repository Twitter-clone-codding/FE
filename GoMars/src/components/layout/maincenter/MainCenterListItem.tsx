import { centerFooterArray, refresh, share, threedot } from "@/assets/svg";
import {
  MainCenterListItemAvartar,
  MainCenterListItemContainor,
  MainCenterListItemContent,
  MainImgBox,
} from "@/styles/maincenter/maincenter";
import { Icon } from "@/utils";

const MainCenterListItem: React.FC<Tweet> = (props) => {
  const { content, createdAt, hashtag, hearts, imgList, views } = props;
  const detailNavigateHandler = () => {
    console.log("imgList", imgList);
  };
  console.log("imgList", imgList[0]);
  const {} = props;
  return (
    <MainCenterListItemContainor>
      <MainCenterListItemAvartar>
        <div className="avartar" />
      </MainCenterListItemAvartar>
      <MainCenterListItemContent>
        <div className="main-header">
          <div className="main-header-span">
            <span>orign</span>
            <span className="hashtag">{hashtag}</span>
            <span>·jul 22</span>
          </div>
          <Icon
            color={"rgb(83, 100, 113)"}
            height={18.75}
            width={18.75}
            path={threedot}
          />
        </div>
        <div className="main-contnet">
          <div className="main-contnet-comment">
            <span>{content}</span>
          </div>
          <MainImgBox imgUrl={imgList[0]} />
          {/* 여기예요 은석님 string으로 못준다고 하는데 살짝 헷갈려서 일단 적어놉니다.. ㄷㄷ*/}
        </div>
        <div className="footer">
          <div className="footer-box">
            {centerFooterArray.map((path) => {
              const isPath = path === share ? false : true;
              return (
                <div className="footer-item">
                  <div className="footer-item-icon">
                    <Icon
                      path={path}
                      color={"rgb(83, 100, 113)"}
                      height={18.75}
                      width={18.75}
                    />
                  </div>

                  {isPath && <span>000</span>}
                </div>
              );
            })}
          </div>
        </div>
      </MainCenterListItemContent>
    </MainCenterListItemContainor>
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
