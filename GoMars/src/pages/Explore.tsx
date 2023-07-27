import { search } from "@/api/get";
import MainCenterListItem from "@/components/layout/maincenter/MainCenterListItem";
import TrendItem from "@/components/layout/maintrend/TrendItem";
import SidebarTrendList from "@/components/layout/sidebar/SidebarTrendList";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import ExploreHeader from "@/layout/header/ExploreHeader";
import { inputSet } from "@/store/slice/inputSlice";

import { useEffect, useState } from "react";
import styled from "styled-components";

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
const ExploreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
interface Tweet {
  user: User;
  id: number;
  content: string;
  hashtag: string;
  hearts: number;
  heartCheck: boolean;
  views: number;
  imgList: string[];
  createdAt: string;
}

const NonSearchContainer = styled.div`
  .main-title {
    height: 48px;
    padding: 12px 16px;
    font-size: 21.5px;
    font-weight: 700;
  }
  .show-more {
    height: 52px;
    color: rgb(29, 155, 240);
    padding: 16px;
  }
`;

const Explore = () => {
  const inputValue = useAppSelector((state) => state.input.inputValue);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<Tweet[]>();
  useEffect(() => {
    const fetch = async (inputValue: string) => {
      const response = await search({
        search: inputValue,
        page: 0,
        limit: 10,
      });
      setData(response.result.tweetsList);
    };
    if (inputValue) {
      fetch(inputValue);
    } else {
      console.log("없다");
    }

    console.log("sideEffect");
    return () => {
      dispatch(inputSet({ inputValue: null }));
      console.log("clean up");
    };
    // 이건 알아봐야 왜 이럻게 되는지
  }, [dispatch, inputValue]);
  return (
    <>
      {!data && (
        <NonSearchContainer>
          <div className="main">
            <div className="main-ternd-box">
              <SidebarTrendList />
            </div>
            <div className="show-more">
              <span>Show more</span>
            </div>
            <div className="main-title">
              <span>What's happening</span>{" "}
            </div>
          </div>
        </NonSearchContainer>
      )}
      <ExploreContainer>
        <PostContainer img="">
          <div className="avatar-container">
            <div className="avatar-wrraper">
              <div className="avatar-box"></div>
              <img alt="" />
            </div>
          </div>
          <div className="content-container"></div>
        </PostContainer>
        {data?.map((tweet) => <MainCenterListItem {...tweet} key={tweet.id} />)}
      </ExploreContainer>
    </>
  );
};
export default Explore;
