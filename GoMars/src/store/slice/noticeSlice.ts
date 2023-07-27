import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { value: 0 },
  reducers: {
    addNotification: (state) => {
      state.value += 1;
    },
    clearNotification: (state) => {
      state.value = 0;
    },
  },
});

export const { addNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
