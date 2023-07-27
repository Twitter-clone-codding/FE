import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id?: string | null;
  nickname: string | null;
  token: string | null; // 우리 서버
  tagname: string | null;
  picture?: string | null;
  email?: string | null;

  tokens?: {
    kakao?: string | null; // 카카오
    google?: string | null; //구글
    naver?: string | null; // 네이버
  };
}

const initialState: UserState = {
  nickname: null,
  token: null,
  tagname: null,
  email: null,
  picture: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userSet: (state, action: PayloadAction<UserState>) => {
      const { nickname, token, tagname, email, picture } = action.payload;
      state.email = email;
      state.picture = picture;
      state.nickname = nickname;
      state.token = token;
      state.tagname = tagname;
      console.log("데이터 리덕스에 들어왔다");
    },
    userLogOut: (state) => {
      state.id = null;
      state.nickname = null;
      state.token = null;
    },
  },
  extraReducers: () => {},
});
export const { userSet, userLogOut } = userSlice.actions;
export default userSlice.reducer;
