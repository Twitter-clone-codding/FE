interface MainTweetGetParams {
  MainTweetid: number;
}
interface RetweetGetParams {
  page: number;
  limit: number;
  MainTweetid: number;
}
interface ProfileUpdateParams {
  body: ProfileUpdate;
}
interface NoticeGetParams {
  page: number;
  limit: number;
}
interface TweetPostParams {
  body: TweetPost;
}
interface TweetDeleteParams {
  tweetId: number;
}
interface TweetGetParams {
  page: number;
  limit: number;
}

interface VerifyEmailParams {
  email: string;
  successKey: string;
}

interface SearchParams {
  name: string;
}

interface LoginParams {
  email: string;
  password: string;
}

interface OAuthLoginParams {
  code: string;
}

interface RegisterParams {
  email: string;
  password: string;
  name: string;
  birthday: string;
  successKey: string;
}
interface EmailSendParams {
  email: string;
}
