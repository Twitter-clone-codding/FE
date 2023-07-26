import { getTweets } from "@/api/get";
import PostTweet from "@/components/home/PostTweet";
import MainCenterListItem from "@/components/layout/maincenter/MainCenterListItem";
import useInfiniteScroll from "@/hooks/useInfinityScroll";
import { useAppSelector } from "@/hooks/useRedux";
import { Spinner } from "@/utils";
import { includes } from "lodash";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Home = () => {

  const myTweet = useAppSelector((state) => state.root.myTweet.tweets);
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, status, error, isLoading } =
    useInfiniteQuery<TweetGetResponse, Error>(
      "tweets",
      ({ pageParam = 0 }) => getTweets({ page: pageParam }),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length; // 변경된 부분
          return nextPage < lastPage.result.totalPage ? nextPage : undefined;
        },
        staleTime: 30000,
        cacheTime: 30000,
      }
    );
  const lastPostRef = useInfiniteScroll({
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  });
  const myTweetIds = myTweet.map((tweet) => tweet.id);
  const content =
    status === "success" &&
    data?.pages.map((page) => {
      return page.result.tweetsList
        .filter((e) => !myTweetIds.includes(e.id))
        .map((pagedata, i) => {
          if (page.result.tweetsList.length === i + 1) {
            return <MainCenterListItem key={pagedata.id} {...pagedata} ref={lastPostRef} />;
          }
          return <MainCenterListItem key={pagedata.id} {...pagedata} />;
        });
    });

  // 에러 처리
  if (status === "error") return <div>...에러 </div>;

  return (
    <HomeContainer>
      <PostTweet />
      {myTweet && myTweet?.map((tweet) => <MainCenterListItem key={tweet.id} {...tweet} />)}
      {isLoading ? (
        <SpinnerContainer>
          <Spinner borderSize={3} color="#5585E8" size={25} spinColor="gray" />{" "}
        </SpinnerContainer>
      ) : (
        content
      )}
    </HomeContainer>
  );
};
export default Home;

const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 150px;
`;
