import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectData {
  month: string;
  day: string;
  year: string;
}

interface FormData {
  nickname: string;
  email: string;
}

interface FormState {
  selectData: SelectData;
  formData: FormData;
}

const initialState: FormState = {
  selectData: {
    month: "",
    day: "",
    year: "",
  },
  formData: {
    nickname: "",
    email: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateSelectData: (state, action: PayloadAction<SelectData>) => {
      state.selectData = action.payload;
    },
    updateFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
  },
});

export const { updateSelectData, updateFormData } = formSlice.actions;

export default formSlice.reducer;
