import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyTweetState {
  tweets: Tweet[]; // 대신에 실제 tweet 타입을 사용하세요.
}

const initialState: MyTweetState = {
  tweets: [],
};

const myTweetSlice = createSlice({
  name: "myTweet",
  initialState,
  reducers: {
    addTweet: (state, action: PayloadAction<Tweet>) => {
      state.tweets = [action.payload, ...state.tweets];
    },
  },
});

export const { addTweet } = myTweetSlice.actions;

export default myTweetSlice.reducer;
