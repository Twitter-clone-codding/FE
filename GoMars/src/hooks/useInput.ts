import React, { useState, ChangeEvent } from "react";

export interface FormState {
  [key: string]: string;
}

const useInput = (
  initialState: FormState
): [FormState, (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void] => {
  const [form, setForm] = useState<FormState>(initialState);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { className, value } = event.target;
    const newForm = {
      ...form,
      [className]: value,
    };
    setForm(newForm);
  };

  return [form, onChangeHandler];
};

export default useInput;
