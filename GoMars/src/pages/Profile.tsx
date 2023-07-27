import { getProfile } from "@/api/get";
import { useAppSelector } from "@/hooks/useRedux";
import { useState, useEffect } from "react";
import { Containor } from "@/styles/maincenter/maincenter";
import { Button, Icon } from "@/utils";
import Carousel from "@/components/common/Carousel";
import { calendar } from "@/assets/svg";
import { useNavigate } from "react-router-dom";
import MainCenterListItem from "@/components/layout/maincenter/MainCenterListItem";
import HomeHeaderBottom from "@/components/layout/maincenter/HomeHeaderBottom";
const Profile = () => {
  const [profileData, setProfileData] = useState<Profile>();
  const tagname = useAppSelector((state) => state.user.tagname);
  const navigate = useNavigate();
  const SelectorArray = ["Tweets", "Replies", "Media", "Likes"];
  useEffect(() => {
    const fetch = async () => {
      const response = await getProfile(tagname);
      setProfileData(response.result);
      console.log("response", response.result);
    };
    fetch();
  }, []);
  const onClickHandler = () => {
    navigate("/profile/retweet");
  };

  return (
    <>
      {profileData && (
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
                    onClick={onClickHandler}
                  />

                  <Button
                    backgroundColor="black"
                    color="white"
                    hoverColor="hoverBlack"
                    size="follow"
                    title={<span>follow</span>}
                    onClick={onClickHandler}
                  />
                </div>
              </div>
              <div className="main-profile-name">
                <div className="main-profile-name-username">
                  {profileData.nickname}
                </div>
                <div className="main-profile-name-hashtag">
                  {profileData.tagName}
                </div>
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
                <div>Joined {profileData.createdAt}</div>
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
            <div className="more-info-tweet">
              {profileData.myList?.map((tweet) => (
                <MainCenterListItem key={tweet.id} {...tweet} />
              ))}
            </div>
            <div className="more-info-follow">
              {/* {followArray.map((data) => (
          <MainHeaderProfile key={data} type="follow" />
        ))} */}
            </div>
          </div>
        </Containor>
      )}
    </>
  );
};
export default Profile;
