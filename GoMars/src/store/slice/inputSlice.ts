import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface inputState {
  inputValue: string;
}

const initialState: inputState = {
  inputValue: null,
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    inputSet: (state, action: PayloadAction<inputState>) => {
      const { inputValue } = action.payload;
      state.inputValue = inputValue;
    },
  },
});
export const { inputSet } = inputSlice.actions;
export default inputSlice.reducer;
