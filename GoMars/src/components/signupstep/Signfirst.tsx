import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateFormData, updateSelectData } from "@/store/slice/formSlice";
import {
  SignfirstContainer,
  InputContainer,
  BirthContainer,
  SelectContainer,
  NextStepButtonDiv,
  ButtonTitleStyleNextButton,
} from "@/styles/sign/signupStyles";

import { Button } from "@/utils";
import Select from "@/utils/Select";
import DynamicInput from "@/utils/dynamicInput";
import React from "react";

interface SignFirstProps {
  nextStep: () => void;
}

const Signfirst: React.FC<SignFirstProps> = (props) => {
  const { nextStep } = props;

  const formData = useAppSelector((state) => state.form.formData);
  const selectData = useAppSelector((state) => state.form.selectData);
  const dispatch = useAppDispatch();
  const a = "";
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { className, value } = event.target;
    dispatch(updateSelectData({ ...selectData, [className]: value }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { className, value } = event.target;
    dispatch(updateFormData({ ...formData, [className]: value }));
  };
  console.log(formData, selectData, a);
  const currentYear = new Date().getFullYear();

  return (
    <SignfirstContainer>
      <div className="title">
        <h1>
          <span>계정을 생성하세요</span>
        </h1>
      </div>
      <InputContainer>
        <DynamicInput
          value={formData["nickname"]}
          handleInputChange={handleInputChange}
          placeholder="이름"
          className={"nickname"}
        />
        <DynamicInput
          value={formData["email"]}
          handleInputChange={handleInputChange}
          placeholder="이메일"
          className={"email"}
        />
        <div className="change-input">
          <span>대신 휴대폰 사용하기</span>
        </div>
      </InputContainer>

      <BirthContainer>
        <div className="birth-title">생년월일</div>
        <div className="information">
          <span>
            이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관없이 나의
            연령을 확인하세요.
          </span>
        </div>
        <SelectContainer>
          <Select
            selectValue={selectData.month}
            onChange={handleSelectChange}
            label="월"
            count={12}
            formatOption={(i) => `${i + 1}월`}
            flexGrow={2}
            className={"month"}
          />
          <Select
            onChange={handleSelectChange}
            selectValue={selectData.day}
            className={"day"}
            label="일"
            count={31}
            formatOption={(i) => `${i + 1}일`}
            flexGrow={1}
          />
          <Select
            selectValue={selectData.year}
            className={"year"}
            onChange={handleSelectChange}
            label="년"
            count={100}
            formatOption={(i) => `${currentYear - i}년`}
            flexGrow={1}
          />
        </SelectContainer>
      </BirthContainer>
      <NextStepButtonDiv>
        <Button
          backgroundColor="black"
          color="white"
          hoverColor="hoverBlack"
          size="register"
          // onClick={nextStep}
          onClick={nextStep}
          title={
            <ButtonTitleStyleNextButton>
              <span>다음</span>
            </ButtonTitleStyleNextButton>
          }
        />
      </NextStepButtonDiv>
    </SignfirstContainer>
  );
};
export default Signfirst;
