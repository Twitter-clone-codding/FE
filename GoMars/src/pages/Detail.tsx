import { getMainTweet, getRetweets } from "@/api/get";
import PostTweet from "@/components/home/PostTweet";
import MainCenterListItem from "@/components/layout/maincenter/MainCenterListItem";
import useInfiniteScroll from "@/hooks/useInfinityScroll";
import { useAppSelector } from "@/hooks/useRedux";
import { HomeContainer, SpinnerContainer } from "@/styles/sidebar/sidebarStyle";
import { Spinner } from "@/utils";
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [detailData, setDetailData] = useState<Tweet>();
  const [Loading, setLoading] = useState(false);
  const myTweet = useAppSelector((state) => state.root.myTweet.tweets);
  const { detail } = useParams();
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, status, error, isLoading } =
    useInfiniteQuery<RetweetGetResponse, Error>(
      "details",
      ({ pageParam = 0 }) => getRetweets({ limit: 0, page: pageParam, MainTweetid: detail }),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length; // 변경된 부분
          return nextPage < lastPage.result.totalPage ? nextPage : undefined;
        },
        staleTime: 30000,
        cacheTime: 30000,
      }
    );
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await getMainTweet(detail)
        .then((res) => setDetailData(res.result))
        .finally(() => setLoading(false));
    };
    fetch();
    console.log(detailData);
  }, []);

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
      {detailData && <MainCenterListItem {...detailData} />}
      <PostTweet type="tweet" comment="Tweet your reply!" reply={true} />
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
export default Detail;
