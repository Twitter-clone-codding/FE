import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Modalstate {
  modalChecked: boolean;
}

const initialState: Modalstate = {
  modalChecked: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<Modalstate>) => {
      const { modalChecked } = action.payload;
      state.modalChecked = !modalChecked;
    },
  },
});
export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
