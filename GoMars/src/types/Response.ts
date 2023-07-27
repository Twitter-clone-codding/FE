interface User {
  id: number;
  nickname: string;
  tagName: string;
  profileImageUrl: string | null;
}

interface Image {
  imgid?: number;
  imgUrl: string;
}

interface Tweet {
  user: User;
  id: number;
  content: string;
  hashtag: string;
  hearts: number;
  heartCheck: boolean | false;
  views: number;
  imgList: string[];
  createdAt: string;
}

interface SearchResults {
  tweetsList: Tweet[];
}

interface TweetPost {
  mainTweetId: number;
  tweet: {
    content: string;
    hashtag?: string;
  };
  img: FormData;
}

interface Profile {
  nickname: string;
  tagName: string;
  profileImageUrl: string | null;
  profileBackgroundImageUrl: string | null;
  content: string | null;
  url: string | null;
  createdAt: string;
  myList: Tweet[];
}

interface ProfileUpdate {
  profileImageUrl: string;
  profileBackgroundUrl: string;
  nickname: string;
  url: string;
  content: string;
}

interface LoginResponse {
  msg: string;
  result: LoginUserResponse;
}

interface LoginUserResponse extends User {
  token: string;
}

interface LoginFailure {
  msg: string;
  result: string;
}

interface OAuthLoginResponse {
  msg: string;
}

interface RegisterResponse {
  msg: string;
  result: string;
}

interface EmailSendResponse {
  msg: string;
  result: null;
}

interface VerifyEmailResponse {
  msg: string;
  result: string;
}
interface MessageSearchResponse {
  msg: string;
  result: User[];
}

interface SearchResponse {
  msg: string;
  result: SearchResults;
}

interface TweetPostResponse {
  msg: string;
  result: Tweet;
}

interface TweetDeleteResponse {
  msg: string;
  result: string;
}

interface TweetGetResponse {
  msg: string;
  result: {
    totalPage: number;
    tweetsList: Tweet[];
  };
}

interface MainTweetGetResponse {
  msg: string;
  result: Tweet;
}

interface RetweetGetResponse {
  msg: string;
  result: {
    totalPage: number;
    tweetsList: Tweet[];
  };
}

interface ProfileGetResponse {
  msg: string;
  result: Profile;
}

interface ProfileUpdateResponse {
  msg: string;
  result: null;
}

interface NoticeGetResponse {
  msg: string;
  result: {
    totalPage: number;
    tweetsList: Tweet[];
  };
}
interface ChatRooms {
  id: number;
  nickname: string;
  tagName: string;
  profileImageUrl: string;
  roomKey: string;
}
interface ChatingRoomResponse {
  msg: string;
  result: ChatRooms[];
}
interface TrandGetResponse {
  mag: string;
  result: Trend[];
}
interface logoutResponse {
  msg: string;
  result: string | null;
}

interface Trend {
  hashTag: string;
  total: number;
}
