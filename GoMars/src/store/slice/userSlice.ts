import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id: string | null;
  nickname: string | null;
  token: string | null; // 우리 서버
  picture?: string | null;
  tokens?: {
    kakao?: string | null; // 카카오
    google?: string | null; //구글
    naver?: string | null; // 네이버
  };
}

const initialState: UserState = {
  id: null,
  nickname: null,
  token: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userSet: (state, action: PayloadAction<UserState>) => {
      const { id, nickname, token } = action.payload;
      state.id = id;
      state.nickname = nickname;
      state.token = token;
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
