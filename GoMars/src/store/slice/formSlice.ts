import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectData {
  month: string;
  day: string;
  year: string;
}

interface FormData {
  nickname: string;
  email: string;
  password: string;
  successKey: string;
}
interface LoginFormData {
  email: string;
  password: string;
}

interface FormState {
  selectData: SelectData;
  formData: FormData;
  loginData: LoginFormData;
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
    password: "",
    successKey: "",
  },
  loginData: {
    email: "",
    password: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateSelectData: (state, action: PayloadAction<SelectData>) => {
      state.selectData = action.payload;
    },
    resetSelectData: (state, action: PayloadAction<SelectData>) => {
      state.selectData = initialState.selectData;
    },
    updateFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
    resetFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = initialState.formData;
    },
    updateLoginData: (state, action: PayloadAction<LoginFormData>) => {
      state.loginData = action.payload;
    },
    resetLoginData: (state, action: PayloadAction<LoginFormData>) => {
      state.loginData = initialState.loginData;
    },
  },
});

export const { updateSelectData, updateFormData, updateLoginData } = formSlice.actions;

export default formSlice.reducer;
