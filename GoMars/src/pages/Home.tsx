import { getMainTweet, getTweets } from "@/api/get";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BoardContainer = styled.div`
  width: 50px;
  height: 50px;
`;
const Home = () => {
  const [first, setfirst] = useState<MainTweetGetResponse>();
  useEffect(() => {
    const fetch = async () => {
      const respoense = await getTweets({ limit: 10, page: 0 });
      // setfirst(respoense);
      console.log(respoense);
      // first.result.tweet.content;
    };
    fetch();
  }, []);
  return (
    <BoardContainer>
      {/* <h2>{first.result.tweet.user.nickname}</h2>
      <span>{first.result.tweet.hearts}</span> */}
    </BoardContainer>
  );
};
export default Home;
