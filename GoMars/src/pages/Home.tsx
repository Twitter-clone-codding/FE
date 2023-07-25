import { getTweets } from "@/api/get";
import { normal } from "@/assets/img";
import MainCenterListItem from "@/components/layout/maincenter/MainCenterListItem";
import { useAppSelector } from "@/hooks/useRedux";
import { useEffect, useState } from "react";
import styled from "styled-components";
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Home = () => {
  const [first, setfirst] = useState<TweetGetResponse>();
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    const fetch = async () => {
      const respoense = await getTweets({ limit: 10, page: 0 });
      setfirst(respoense);
      console.log(respoense);
    };
    fetch();
  }, []);

  return (
    <HomeContainer>
      <PostContainer img={user.picture ? user.picture : normal}>
        <div className="avatar-container">
          <div className="avatar-wrraper">
            <div className="avatar-box"></div>
            <img src={normal} alt="" />
          </div>
        </div>
        <div className="content-container"></div>
      </PostContainer>
      {first?.result?.tweetsList.map((tweet) => <MainCenterListItem {...tweet} key={tweet.id} />)}
    </HomeContainer>
  );
};
export default Home;

interface ProfileImageProps {
  img: string;
}

const PostContainer = styled.div<ProfileImageProps>`
  position: relative;
  display: flex;
  padding: 0 16px;
  background-color: rgba(255, 255, 255, 1);
  padding-top: 4px;
  z-index: 1;
  .avatar-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-right: 12px;
    flex-basis: 40px;
    padding-top: 12px;
    .avatar-wrraper {
      pointer-events: auto;
      flex-direction: column;
      position: relative;
      z-index: 0;
      height: 40px;
      bottom: 0px;
      left: 0px;
      top: 0px;
      width: 100%;
      border-radius: 9999px;
      overflow: hidden;
      .avatar-box {
        bottom: 0px;
        left: 0px;
        right: 0px;
        top: 0px;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        background-image: url(${(props) => props.img});
      }
      img {
        inset: 0px;
        height: 100%;
        opacity: 0;
        position: absolute;
        width: 100%;
        z-index: -1;
      }
    }
  }
  .content-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    padding-top: 4px;
    position: static;
    transition-duration: 0.1s;
    transition-property: opacity, color;
    transition-timing-function: ease-out;
    .content-wrraper {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: 15px;
      pointer-events: auto;
      border-bottom-style: solid;
      border-left-style: solid;
      border-right-style: solid;
      border-top-style: solid;
      display: flex;
      border-color: rgba(0, 0, 0, 0);
      border-radius: 4px;
      border-width: 2px;
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      flex-direction: column;
    }
    .button-container {
    }
  }
`;
