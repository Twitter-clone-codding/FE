import React, { useState } from "react";

const useInput = (initialState: any) => {
  const [form, setForm] = useState(initialState);

  const onChangeHandler = (event: any) => {
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
