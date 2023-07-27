import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface profileState {
  tagName: string;
}

const initialState: profileState = {
  tagName: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileSet: (state, action: PayloadAction<profileState>) => {
      const { tagName } = action.payload;
      state.tagName = tagName;
    },
  },
});
export const { profileSet } = profileSlice.actions;
export default profileSlice.reducer;
