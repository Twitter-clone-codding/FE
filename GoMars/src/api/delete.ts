import { server } from "./server";

// DELETE /api/tweets/posts
export const deleteTweet = async (params: TweetDeleteParams): Promise<TweetDeleteResponse> => {
  const response = await server.delete("/api/tweets/posts", { data: params });
  return response.data;
};
