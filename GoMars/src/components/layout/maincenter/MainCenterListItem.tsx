import { normal } from "@/assets/img";
import { centerFooterArray, refresh, share, threedot } from "@/assets/svg";
import {
  MainCenterListItemAvartar,
  MainCenterListItemContainor,
  MainCenterListItemContent,
  MainImgBox,
} from "@/styles/maincenter/maincenter";
import { Icon } from "@/utils";

const MainCenterListItem: React.FC<Tweet> = (props) => {
  const { content, createdAt, hashtag, hearts, imgList, views, id, heartCheck, user } = props;
  const detailNavigateHandler = () => {
    console.log("imgList", imgList);
  };
  const array = [0, 0, hearts, views, 0];
  const {} = props;
  return (
    <MainCenterListItemContainor>
      <MainCenterListItemAvartar
        userProfileImage={user.profileImageUrl ? user.profileImageUrl : normal}
      >
        <div className="avartar"></div>
        <img src={user.profileImageUrl ? user.profileImageUrl : normal} alt="asd" />
      </MainCenterListItemAvartar>
      <MainCenterListItemContent>
        <div className="main-header">
          <div className="main-header-span">
            <span>orign</span>
            <span className="hashtag">{hashtag}</span>
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

          {imgList[0] && (
            <MainImgBox image={imgList[0]}>
              <div className="image-box"></div>
              <img src={imgList[0]} alt="" />
            </MainImgBox>
          )}
          {/* 여기예요 은석님 */}
        </div>
        <div className="footer">
          <div className="footer-box">
            {centerFooterArray.map((path, i) => {
              const isPath = path === share ? false : true;
              return (
                <div className="footer-item" key={path}>
                  <div className="footer-item-icon">
                    <Icon path={path} color={"rgb(83, 100, 113)"} height={18.75} width={18.75} />
                  </div>

                  {isPath && array[i] !== 0 && <span>{array[i]}</span>}
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
