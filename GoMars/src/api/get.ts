import { server } from "./server";

export type FormdataHeader = {
  "Content-Type": "multipart/form-data";
};

// GET /api/search
export const search = async (params: SearchParams): Promise<SearchResponse> => {
  const response = await server.get("/api/search", { params });
  return response.data;
};
export const messageSearch = async (search: string): Promise<MessageSearchResponse> => {
  const response = await server.get("/api/search/profile", {
    params: {
      search,
    },
  });
  return response.data;
};

export const postLike = async (tweetId: number): Promise<TweetPostResponse> => {
  const response = await server.get(`/api/tweets/heart/${tweetId}`);
  return response.data;
};

// GET /api/tweets/posts
export const getTweets = async (params: TweetGetParams): Promise<TweetGetResponse> => {
  const response = await server.get("/api/tweets/posts", {
    params: {
      page: params.page,
      limit: 10,
    },
  });

  return response.data;
};

// GET /api/tweets/{MainTweetid}
export const getMainTweet = async (MainTweetid: string): Promise<MainTweetGetResponse> => {
  const response = await server.get(`/api/tweets/${MainTweetid}`);
  return response.data;
};

// GET /api/retweets/{MainTweetid}
export const getRetweets = async (params: RetweetGetParams): Promise<RetweetGetResponse> => {
  const response = await server.get(`/api/retweets/${params.MainTweetid}`, {
    params: {
      limit: 10,
      page: params.page,
    },
  });
  return response.data;
};

// GET /api/profile//{MainTweetid}

export const getProfile = async (tagname: string): Promise<ProfileGetResponse> => {
  const response = await server.get(`/api/profile/${tagname}`);

  return response.data;
};

// GET /api/notice
export const getNotices = async (params: NoticeGetParams): Promise<NoticeGetResponse> => {
  const response = await server.get("/api/notice", { params });
  return response.data;
};
export const getChatRoom = async (receiver): Promise<any> => {
  const response = await server.get("/api/chatroom", {
    params: {
      receiver,
    },
  });
  return response.data;
};

// /api/api/hashtag/rank
export const getTrands = async (): Promise<TrandGetResponse> => {
  const response = await server.get("/api/hashtag/rank");
  return response.data;
};
