import { calendar } from "@/assets/svg";
import Carousel from "@/components/common/Carousel";
import { Button, Icon } from "@/utils";
import styled from "styled-components";
import MainHeaderProfile from "./mainheader/MainHeaderProfile";
import HomeHeaderBottom from "./HomeHeaderBottom";

const DispalyRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Containor = styled.div`
  width: 600px;
  background-color: rgba(0, 0, 0, 0.03);

  .main {
    height: 413.67px;
  }
  .main-image {
    height: 199.33px;
    background-color: lightgray;
  }
  .main-profile {
    height: 198.34px;
    padding: 12px 16px 0 16px;
    margin-bottom: 16px;
    position: relative;
  }
  .main-profile-circle {
    width: 133.5px;
    height: 133.5px;
    background-color: red;
    border-radius: 9999px;
    position: absolute;
    top: -37%;
    border: 5px solid white;
    box-sizing: content-box;
  }
  .main-profile-button {
    display: flex;
    justify-content: flex-end;
    height: 68.61px;
    width: 100%;
  }
  .button {
    display: flex;
  }
  .main-profile-name {
    height: 49.73px;
    margin-top: 4px;
    margin-bottom: 12px;
  }
  .main-profile-name-username {
    height: 25.73px;
    font-size: 20px;
    font-weight: bold;
  }
  .main-profile-name-hashtag {
    height: 20px;
    color: rgb(83, 100, 113);
  }
  .main-profile-create {
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    color: rgb(83, 100, 113);
  }
  .main-profile-create-icon {
    margin-right: 4px;
  }
  .main-profile-follow {
    height: 20px;
    display: flex;
    flex-direction: row;
  }
  .main-profile-follow-info {
    > a {
      color: rgb(83, 100, 113);
      display: flex;
      flex-direction: row;
      gap: 4px;
      div:first-child {
        font-weight: 700;
      }
    }
    margin-right: 20px;
  }
  .selector {
    height: 54px;
    display: flex;
    flex-direction: row;
  }
  .more-info {
    height: 938px;
  }
  .more-info-title {
    height: 48px;
    padding: 12px 16px;
    font-size: 21.5px;
    font-weight: 700;
  }
  .more-info-more-info-caruosel {
    height: 172px;
  }
`;

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
              <Icon
                color="rgb(83, 100, 113)"
                path={calendar}
                height={18.75}
                width={18.75}
              />
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
