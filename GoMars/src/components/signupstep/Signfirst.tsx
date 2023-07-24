import { register } from "@/api/post";
import { down } from "@/assets/svg";
import { FormState } from "@/hooks/useInput";
import { ButtonTitleStyle, ButtonTitleStyleApple } from "@/styles/main/mainstyles";
import { Button, Icon } from "@/utils";
import Select from "@/utils/Select";
import DynamicInput from "@/utils/dynamicInput";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

const SignfirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 80px;
  max-width: 600px;
  padding-right: 80px;
  flex-grow: 1;
  .title {
    display: flex;
    position: relative;
    margin-bottom: 20px;
    margin-top: 20px;
    h1 {
      direction: ltr;
      unicode-bidi: isolate;
      background-color: rgba(0, 0, 0, 0);
      font-weight: 700;
      font-size: 31px;
      line-height: 36px;
      color: rgb(15, 20, 25);
      span {
        color: inherit;
        font: inherit;
        white-space: inherit;
        min-width: 0px;
        word-wrap: break-word;
        font-family: inherit;
      }
    }
  }
`;

const BirthContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  .birth-title {
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 8px;
    color: rgb(15, 20, 25);
    span {
      color: inherit;
      font: inherit;
      white-space: inherit;
      min-width: 0px;
      word-wrap: break-word;
      font-family: inherit;
    }
  }
  .information {
    display: inline;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 16px;
    font-size: 14px;
    margin-bottom: 4px;
    color: rgb(83, 100, 113);
    span {
      display: inline;
      color: inherit;
      font: inherit;
      white-space: inherit;
      min-width: 0px;
      word-wrap: break-word;
      font-family: inherit;
      letter-spacing: -0.2px;
    }
  }
`;
const SelectContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-basis: auto;
  position: relative;
  z-index: 0;
  margin: 16px 0;
  flex-direction: row;
`;
const NextStepButtonDiv = styled.div`
  display: flex;
  margin-top: 83px;
`;
const ButtonTitleStyleNextButton = styled(ButtonTitleStyle)`
  font-size: 17px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .change-input {
    cursor: pointer;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 20px;
    color: rgb(29, 155, 240);
    text-align: right;
    z-index: 100;
    &:hover {
      text-decoration-line: underline;
      text-decoration-thickness: 1px;
    }
    span {
      cursor: pointer;
      text-align: right;
      color: inherit;
      font: inherit;
      white-space: inherit;
      word-wrap: break-word;
      font-family: inherit;
    }
  }
`;
interface SignFirstProps {
  value: FormState;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nextStep: () => void;
  select: FormState;
  handleSelectChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Signfirst: React.FC<SignFirstProps> = (props) => {
  const { value, onChange, nextStep, select, handleSelectChange } = props;
  const currentYear = new Date().getFullYear();
  const registerHandler = async () => {
    await register({
      email: "ty_ty123@naver.com",
      password: "1234",
      name: "지방뚱댕이",
      birthday: "2002-06-11",
    });
  };
  return (
    <SignfirstContainer>
      <div className="title">
        <h1>
          <span>계정을 생성하세요</span>
        </h1>
      </div>
      <InputContainer>
        <DynamicInput
          value={value["nickname"]}
          handleInputChange={onChange}
          placeholder="이름"
          className={"nickname"}
        />
        <DynamicInput
          value={value["email"]}
          handleInputChange={onChange}
          placeholder="이메일"
          className={"email"}
        />
        <div className="change-input">
          <span>대신 휴대폰 사용하기</span>
        </div>
      </InputContainer>
      {/* <Button
          hoverColor="hoverBlack"
          size="login2"
          color="white"
          backgroundColor="black"
          onClick={registerHandler}
          title={<ButtonTitleStyleApple>회원가입하기</ButtonTitleStyleApple>}
        /> */}
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
            selectValue={select["month"]}
            onChange={handleSelectChange}
            label="월"
            count={12}
            formatOption={(i) => `${i + 1}월`}
            flexGrow={2}
            className={"month"}
          />
          <Select
            onChange={handleSelectChange}
            selectValue={select["day"]}
            className={"day"}
            label="일"
            count={31}
            formatOption={(i) => `${i + 1}일`}
            flexGrow={1}
          />
          <Select
            selectValue={select["year"]}
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
          onClick={() => {
            console.log(select, value);
          }}
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
export default React.memo(Signfirst);
