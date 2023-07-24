import { calendar } from "@/assets/svg";
import Carousel from "@/components/common/Carousel";
import { Button, Icon } from "@/utils";
import HomeHeaderBottom from "./HomeHeaderBottom";
import MainHeaderProfile from "../mainheader/MainHeaderProfile";
import { Containor } from "@/styles/maincenter/maincenter";

const ProfileCenterList = () => {
  // 가시용
  const SelectorArray = ["Tweets", "Replies", "Highlights", "Media", "Likes"];
  const followArray = ["one", "two", "three"];

  return (
    <Containor>
      <div className="main">
        <div className="main-image"></div>
        <div className="main-profile">
          <div className="main-profile-circle"></div>
          <div className="main-profile-button">
            <div className="button">
              <Button
                backgroundColor="white"
                color="black"
                hoverColor="hoverLightBlack"
                size="editProfile"
                borderColor="gray"
                title={<span>Edit profile</span>}
              />
            </div>
          </div>
          <div className="main-profile-name">
            <div className="main-profile-name-username">강신범</div>
            <div className="main-profile-name-hashtag">@gangsinbeo72823</div>
          </div>
          <div className="main-profile-create">
            <div className="main-profile-create-icon">
              <Icon color="rgb(83, 100, 113)" path={calendar} height={18.75} width={18.75} />
            </div>
            <div>Joined July 2023</div>
          </div>
          <div className="main-profile-follow">
            <div className="main-profile-follow-info">
              <a href="">
                <div>3</div> <div>following</div>
              </a>
            </div>
            <div className="main-profile-follow-info">
              <a href="">
                <div>0</div>
                <div>followers</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="selector">
        {SelectorArray.map((title) => (
          <HomeHeaderBottom key={title} title={<span>{title}</span>} />
        ))}
      </div>
      <div className="more-info">
        <div className="more-info-title">
          <span>Let's get you set up</span>{" "}
        </div>
        <div className="more-info-caruosel">
          <Carousel />
        </div>
        <div className="more-info-title">
          <span>Who to follow</span>{" "}
        </div>
        <div className="more-info-follow">
          {followArray.map((data) => (
            <MainHeaderProfile key={data} type="follow" />
          ))}
        </div>
      </div>
    </Containor>
  );
};
export default ProfileCenterList;
