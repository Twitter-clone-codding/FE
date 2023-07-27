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
      state.modalChecked = !state.modalChecked;
    },
  },
});
export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
