import { ChangeEventHandler, HTMLInputTypeAttribute, useRef } from "react";
import styled, { css } from "styled-components";

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
}

export interface InputProps extends StyledInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelValue: string;
  type: "search" | "input" | HTMLInputTypeAttribute;
  placeholder?: string;
  id?: string;
  icon?: string;
  className?: string;
}
const Containor = styled.div<StyledInputProps>`
  .input-wapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 404px;
    height: 56px;
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
      <Containor size="midium" hoverColor={hoverColor}>
        <div className="input-wapper">
          {labelValue === "이름" && <p className="conut">0 / 50</p>}
          <input type="text" onChange={(e) => onChange(e)} />
          <label htmlFor="">{labelValue}</label>
        </div>
        {labelValue === "이름" ? (
          <p className="comment">이름을 입력해 주세요.</p>
        ) : (
          <p className="comment">올바른 휴대폰 번호를 입력해주세요.</p>
        )}
      </Containor>
    </>
  );
};

export default Input;
