import { getTweets } from "@/api/get";
import MainCenterListItem from "@/components/layout/maincenter/MainCenterListItem";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [first, setfirst] = useState<TweetGetResponse>();
  useEffect(() => {
    const fetch = async () => {
      const respoense = await getTweets({ limit: 10, page: 0 });
      setfirst(respoense);
      // first.result.tweet.content;
    };
    fetch();
  }, []);

  return (
    <div>
      {first?.result
        .map((e) => {
          return { ...e, key: uuidv4() };
        })
        .map((tweet, idx) => <MainCenterListItem key={idx} {...tweet} />)}
    </div>
  );
};
export default Home;
