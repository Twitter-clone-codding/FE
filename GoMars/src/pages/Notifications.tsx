import { getNotices } from "@/api/get";
import MainCenterListItem from "@/components/layout/maincenter/MainCenterListItem";
import useInfiniteScroll from "@/hooks/useInfinityScroll";
import { Spinner } from "@/utils";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Notifications = () => {
  // const { fetchNextPage, hasNextPage, isFetchingNextPage, data, status, error, isLoading } =
  //   useInfiniteQuery<NoticeGetResponse, Error>(
  //     "notifications",
  //     ({ pageParam = 0 }) => getNotices({ page: pageParam, limit: 10 }),
  //     {
  //       getNextPageParam: (lastPage, allPages) => {
  //         const nextPage = allPages.length + 1; // 변경된 부분
  //         return nextPage < lastPage.result.length ? nextPage : undefined;
  //       },
  //       staleTime: 30000,
  //       cacheTime: 30000,
  //       keepPreviousData: true,
  //     }
  //   );
  // const lastPostRef = useInfiniteScroll({
  //   isFetchingNextPage,
  //   fetchNextPage,
  //   hasNextPage,
  // });

  // const content =
  //   status === "success" &&
  //   data?.pages.map((page) => {
  //     return page.result.map((pagedata, i) => {
  //       if (page.result.length === i + 1) {
  //         return <MainCenterListItem key={pagedata.id} {...pagedata} ref={lastPostRef} />;
  //       }
  //       return <MainCenterListItem key={pagedata.id} {...pagedata} />;
  //     });
  //   });

  // 에러 처리
  if (status === "error") return <div>...에러 </div>;

  return (
    <NotificationsContainer>
      {/* {isLoading ? (
        <SpinnerContainer>
          <Spinner borderSize={3} color="#5585E8" size={25} spinColor="gray" />{" "}
        </SpinnerContainer>
      ) : (
        content
      )} */}
    </NotificationsContainer>
  );
};

export default Notifications;

const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 150px;
`;
