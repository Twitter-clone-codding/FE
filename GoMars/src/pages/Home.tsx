import { getTweets } from "@/api/get";
import MainCenterListItem from "@/components/layout/maincenter/MainCenterListItem";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Home = () => {
  const [first, setfirst] = useState<TweetGetResponse>();
  useEffect(() => {
    const fetch = async () => {
      const respoense = await getTweets({ limit: 5, page: 0 });
      setfirst(respoense);
      // first.result.tweet.content;
    };
    fetch();
    console.log(first);
  }, []);

  return (
    <HomeContainer>
      {first?.result
        .map((e) => {
          return { ...e, key: uuidv4() };
        })
        .map((tweet) => <MainCenterListItem {...tweet} key={tweet.TweetId} />)}
    </HomeContainer>
  );
};
export default Home;
