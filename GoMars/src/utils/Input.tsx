import { ChangeEventHandler, HTMLInputTypeAttribute, useRef } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";
import { explore } from "@/assets/svg";
const sizeStyles = {
  large: css`
    width: 500px;
    height: 42px;
  `,
  medium: css`
    width: 404px;
    height: 56px;
  `,
  small: css``,
};

interface StyledInputProps {
  size: "large" | "midium" | "small";
  hoverColor?: string;
  type: "search" | "input" | HTMLInputTypeAttribute;
}

export interface InputProps extends StyledInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelValue: string;
  placeholder?: string;
  id?: string;
  icon?: string;
  className?: string;
}

const inputStyles = css`
  .input-wapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 404px; //
    height: 56px; //
    border-radius: 4px;
    > label {
      position: absolute;
      font-size: 18px;
      transition: all 0.2s ease;
      margin-left: 8px;
      margin-top: 16px;
    }
    > input:focus + label {
      font-size: 12px;
      color: rgb(29, 155, 240);
      margin: 8px 8px;
    }
    > input {
      outline-color: rgb(29, 155, 240);
      border: none;
      height: 100%;
      width: 100%;
      border: 1px solid black;
      border-radius: 4px;
      padding-left: 10px;
      padding-top: 16px;
      font-size: 18px;
    }
    .conut {
      position: absolute;
      margin: 8px 8px;
      right: 0;
      font-size: 12px;
    }
    ${(props) => sizeStyles[props.size]}
  }
  .comment {
    top: 0;
    font-size: 12px;
    margin: 0 10px;
    color: red;
  }
`;

const searchStyles = css`
  display: flex;
  flex-direction: row;
  ${(props) => sizeStyles[props.size]}
  border-radius: 9999px;
  background-color: rgb(239, 243, 244);
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgb(29, 155, 240);
  }
  .input-wrapper {
    height: 42px;
    width: 456px;
    > input {
      background-color: transparent;
      outline: none;
      border: none;
      height: 100%;
      width: 100%;
      color: rgb(83, 100, 113);
    }
  }
  .icon-wrapper {
    height: 41.78px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  };
`;

const Containor = styled.div<StyledInputProps>`
  ${(props) => (props.type === "input" ? inputStyles : searchStyles)};
  ${(props) => sizeStyles[props.size]}
  .input-wapper {
    width: 404px;
    height: 56px;

    > input {
      outline-color: rgb(29, 155, 240);
      border: none;
      height: 100%;
      width: 100%;
    }
  }
`;

const Input: React.FC<InputProps> = (props) => {
  const {
    hoverColor,
    labelValue,
    type,
    placeholder,
    id,
    icon,
    className,
    onChange,
  } = props;
  return (
    <>
      <Containor size="midium" hoverColor={hoverColor} type={type}>
        <div className="input-wapper">
          {labelValue === "이름" && <p className="conut">0 / 50</p>}
          <input type="text" onChange={(e) => onChange(e)} />
          <label htmlFor="">{labelValue}</label>
        </div>
        {labelValue === "이름" ? (

        ) : (
          <p className="comment">올바른 휴대폰 번호를 입력해주세요.</p>
        )}
      </Containor>
    </>
  );
};

export default Input;
