import { getMainTweet, getTweets } from "@/api/get";
import MainCenterListItem from "@/components/layout/MainCenterListItem";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const BoardContainer = styled.div`
  width: 50px;
  height: 50px;
`;
const Home = () => {
  const [first, setfirst] = useState<TweetGetResponse>();
  useEffect(() => {
    const fetch = async () => {
      const respoense = await getTweets({ limit: 10, page: 0 });
      setfirst(respoense);
      console.log(respoense);
      // first.result.tweet.content;
    };
    // fetch();
  }, []);

  return (
    <div>
      {first?.result
        .map((e) => {
          return { ...e, key: uuidv4() };
        })
        .map((tweet) => <MainCenterListItem key={tweet.key} {...tweet} />)}
    </div>
  );
};
export default Home;
