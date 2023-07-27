import { normal } from "@/assets/img";
import { centerFooterArray, refresh, share, threedot } from "@/assets/svg";
import {
  MainCenterListItemAvartar,
  MainCenterListItemContainor,
  MainCenterListItemContent,
  MainImgBox,
} from "@/styles/maincenter/maincenter";
import { Icon } from "@/utils";
import { forwardRef } from "react";
import MainCenterListItemIcon from "./MainCenterListItemIcon";
import { useNavigate } from "react-router-dom";

const MainCenterListItem = forwardRef<HTMLDivElement, Tweet>((props, ref) => {
  const {
    content,
    createdAt,
    hashtag,
    hearts,
    imgList,
    views,
    id,
    heartCheck,
    user,
  } = props;

  const detailNavigateHandler = () => {
    console.log("imgList", imgList);
  };
  const convertToJSDate = (javaDate: string): Date => {
    const date = new Date(javaDate);
    date.setHours(date.getHours() + 9);
    return date;
  };

  const getTimeAgo = (javaDate: string): string => {
    const date = convertToJSDate(javaDate);
    const now = new Date();

    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${monthNames[date.getMonth()]} ${date.getDate()}`;
    }
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClickMoveHandler = (e) => {
    navigate(`/profile/${user.tagName}`);
    dispatch(profileSet({ tagName: user.tagName }));
    e.stopPropagation();
  };
  const profileImg = normal;
  // const profileImage = user
  const ItemContents = (
    <MainCenterListItemContainor
      onClick={() => {
        navigate(`/${id}`);
      }}
    >
      <MainCenterListItemAvartar userProfileImage={profileImg}>
        <div className="avartar"></div>
        <img src={profileImg} alt="asd" />
      </MainCenterListItemAvartar>
      <MainCenterListItemContent>
        <div className="main-header">
          <div className="main-header-span">
            <span onClick={onClickMoveProfileHandler}>{user?.nickname}</span>
            <span className="hashtag">{hashtag}</span>
            <span>{user?.nickname}</span>
            <span className="hashtag">@{user?.nickname}</span>
            <span className="date">·{getTimeAgo(createdAt)}</span>
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
          {imgList[0] && (
            <MainImgBox image={imgList[0]}>
              <div className="image-box"></div>
              <img src={imgList[0]} alt="" />
            </MainImgBox>
          )}
        </div>
        <div className="footer">
          <div className="footer-box">
            <MainCenterListItemIcon {...props} />
          </div>
        </div>
      </MainCenterListItemContent>
    </MainCenterListItemContainor>
  );
  const isLastItem = ref ? (
    <div ref={ref}>{ItemContents}</div>
  ) : (
    <div>{ItemContents}</div>
  );
  return isLastItem;
});

export default MainCenterListItem;
