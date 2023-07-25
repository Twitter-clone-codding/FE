import styled from "styled-components";
import { ButtonTitleStyle, StyledDivStyle } from "../main/mainstyles";

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
const NextStepSecondButtonDiv = styled.div`
  display: flex;
  margin-top: 229px;
`;
const NextStepThirdButtonDiv = styled.div`
  display: flex;
  margin: 24px 0;
`;
const NextStepFourthButtonDiv = styled.div`
  display: flex;
  margin-top: 315px;
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

export interface SignSecondStyleProp {
  toggle: boolean;
}

const SignSecondContainer = styled(StyledDivStyle)<SignSecondStyleProp>`
  flex-grow: 1;
  width: 100%;
  flex-shrink: 1;
  max-width: 600px;
  padding: 0 80px 0 80px;
  .title {
    margin: 20px 0;
    h1 {
      font-weight: 700;
      font-size: 31px;
      line-height: 36px;
      color: rgb(15, 20, 25);
      span {
        color: inherit;
        font: inherit;
        white-space: inherit;
        word-wrap: break-word;
        font-family: inherit;
      }
    }
  }
  .content {
    margin-top: 20px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: rgb(15, 20, 25);
    span {
      color: inherit;
      font: inherit;
      white-space: inherit;
      word-wrap: break-word;
      font-family: inherit;
    }
  }
  .information {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12px;
    .information-content {
      display: flex;
      position: relative;
      flex-shrink: 1;
      padding-right: 12px;
      line-height: 20px;
      color: rgb(15, 20, 25);
      span {
        letter-spacing: -0.2px;
        color: inherit;
        font: inherit;
        white-space: inherit;
        word-wrap: break-word;
        font-family: inherit;
      }
    }
  }
  .checkbox-div {
    display: flex;
    label {
      cursor: pointer;
      .check-container {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-between;
        gap: 8px;
        user-select: none;
        .hover-div {
          cursor: pointer;
          user-select: none;
          align-items: stretch;
          flex-direction: column;
          border-radius: 9999px;
          margin: -8px;
          padding: 8px;
          transition: all 0.2s;
          outline-style: none;
          &:hover {
            background-color: ${(props) =>
              props.toggle ? "rgb(29, 155, 240 , 0.1)" : "rgb(83, 100, 113 , 0.1)"};
          }
          .checkbox {
            cursor: pointer;
            position: relative;
            z-index: 0;
            border: 2px solid
              ${(props) => (props.toggle ? "rgb(29, 155, 240)" : "rgb(83, 100, 113)")};
            border-radius: 4px;
            align-items: center;
            height: 20px;
            width: 20px;
            background-color: ${(props) => (props.toggle ? "rgb(29, 155, 240)" : "#fff")};
          }
        }
      }
    }
  }
`;

const InformationDongeDiv = styled.div`
  display: inline;
  line-height: 20px;
  margin-top: 40px;
  color: rgb(83, 100, 113);
  letter-spacing: -0.2px;
  span {
    color: inherit;
    font: inherit;
    white-space: inherit;
    min-width: 0px;
    word-wrap: break-word;
    font-family: inherit;
  }
  a {
    list-style: none;
    text-align: inherit;
    text-decoration: none;
    display: inline;
    font: inherit;
    white-space: inherit;
    word-wrap: break-word;
    font-family: inherit;
    color: rgb(29, 155, 240);
    cursor: pointer;
  }
`;

const SignThirdContainer = styled(StyledDivStyle)`
  flex-grow: 1;
  width: 100%;
  flex-shrink: 1;
  max-width: 600px;
  padding: 0 80px 0 80px;
  .title {
    margin: 20px 0;
    h1 {
      font-weight: 700;
      font-size: 31px;
      line-height: 36px;
      color: rgb(15, 20, 25);
      span {
        color: inherit;
        font: inherit;
        white-space: inherit;
        word-wrap: break-word;
        font-family: inherit;
      }
    }
  }
  .information {
    display: flex;
    flex-direction: column;
    direction: ltr;
    letter-spacing: -0.2px;
    display: inline;
    margin-top: 74px;
    font-size: 13px;
    line-height: 16px;
    color: rgb(83, 100, 113);
    span {
      display: inline;
      color: inherit;
      font: inherit;
      white-space: inherit;
      min-width: 0px;
      word-wrap: break-word;
      font-family: inherit;
    }
    a {
      -webkit-box-direction: normal;
      background-color: rgba(0, 0, 0, 0);
      display: inline;
      font: inherit;
      white-space: inherit;
      min-width: 0px;
      word-wrap: break-word;
      font-family: inherit;
      color: rgb(29, 155, 240);
      cursor: pointer;
    }
  }
`;
const SignFourthContainer = styled(SignThirdContainer)`
  .subtitle {
    margin-top: 8px;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 20px;
    color: rgb(83, 100, 113);
    span {
      color: inherit;
      font: inherit;
      white-space: inherit;
      min-width: 0px;
      word-wrap: break-word;
      font-family: inherit;
    }
  }
  .email-question {
    align-items: stretch;
    display: flex;
    position: relative;
    padding-left: 8px;
    padding-right: 8px;
    flex-direction: row;
    padding-right: 20px;
    padding-top: 2px;
    div {
      white-space: pre-wrap;
      word-wrap: break-word;
      font-size: 13px;
      line-height: 16px;
      color: rgb(83, 100, 113);
      align-self: flex-start;
      span {
        font: inherit;
        white-space: inherit;
        min-width: 0px;
        word-wrap: break-word;
        font-family: inherit;
        color: rgb(29, 155, 240);
        top: 20px;
      }
    }
  }
`;
export {
  NextStepFourthButtonDiv,
  SignFourthContainer,
  NextStepThirdButtonDiv,
  SignThirdContainer,
  SignSecondContainer,
  InformationDongeDiv,
  BirthContainer,
  ButtonTitleStyle,
  ButtonTitleStyleNextButton,
  SignfirstContainer,
  SelectContainer,
  NextStepButtonDiv,
  InputContainer,
  NextStepSecondButtonDiv,
};
