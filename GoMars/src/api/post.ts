import { FormdataHeader } from "./get";
import { server } from "./server";

// POST /auth/login

interface login {
  email: string;
  password: string;
}

export const login = async (params: login): Promise<LoginResponse> => {
  const response = await server.post("/auth/login", params);
  return response.data;
};

// POST /oauth/login
export const oauthLogin = async (params: OAuthLoginParams): Promise<OAuthLoginResponse> => {
  const response = await server.post("/oauth/login", params);
  return response.data;
};

// POST /register
export const register = async (params: RegisterParams): Promise<RegisterResponse> => {
  const response = await server.post("/register", params);
  return response.data;
};

// POST /register/send/email
export const sendEmail = async (params: EmailSendParams): Promise<EmailSendResponse> => {
  const response = await server.post("/register/send/email", params);
  return response.data;
};

// POST /register/verify/email
export const verifyEmail = async (params: VerifyEmailParams): Promise<VerifyEmailResponse> => {
  const response = await server.post("/register/verify/email", params);
  return response.data;
};

export const getChatRoomJoin = async (): Promise<ChatingRoomResponse> => {
  const response = await server.post("/api/chatroom");
  return response.data;
};

// POST /api/tweets/posts
export const postTweet = async (params): Promise<TweetPostResponse> => {
  const response = await server.post("/api/tweets/posts", params, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
export const logout = async (): Promise<logoutResponse> => {
  const response = await server.post("/api/logout");
  return response.data;
};
