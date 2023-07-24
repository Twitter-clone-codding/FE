import { ChangeEventHandler, HTMLInputTypeAttribute, useRef } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";
import { explore } from "@/assets/svg";

interface StyledInputProps {
  size: "large" | "medium" | "small";
  type: "search" | "insult";
}

const sizeStyles = {
  large: css`
    width: 446px;
    height: 44px;
  `,
  medium: css`
    width: 404px;
    height: 56px;
  `,
  small: css``,
};

const typeStyles = {
  search: css`
    .icon-box {
      display: flex;
      height: 44px;
      width: 44px;
      justify-content: center;
      align-items: center;
    }
    border-radius: 9999px;
    background-color: rgb(239, 243, 244);
    > input {
      border: 1px solid rgba(0, 0, 0, 0);
      background-color: transparent;
      border-radius: 9999px;
      padding: 12px;
    }
  `,
  insult: css`
    position: relative;
  `,
};

const InputContainor = styled.div<StyledInputProps>`
  display: flex;
  font-size: inherit;
  > input {
    width: 100%;
    height: 100%;
    outline: none;
    color: blue;
  }
  label {
    position: absolute;
    font-size: 12px;
    transition: all 0.2s ease;
    top: 30%;
    left: 3%;
  }

  .input:focus {
    .label {
      color: blue;
    }
    color: red;
  }

  > input:focus {
    label {
      font-size: 18px;
      color: rgb(29, 155, 240);
      margin: 8px 8px;
    }
  }
  ${(props) => sizeStyles[props.size]};
  ${(props) => typeStyles[props.type]};
`;
export interface InputProps extends StyledInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelValue?: string;
  placeholder?: string;
  className?: string;
  insultAlert?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { size, type, placeholder } = props;
  const addContent =
    type === "search" ? (
      <>
        <InputContainor size={size} type={type}>
          <div className="icon-box">
            <Icon
              path={explore}
              width={15.59}
              height={15.59}
              color="rgb(83, 100, 113)"
            />
          </div>
          <input placeholder={placeholder} />
        </InputContainor>
        <div className="search-input"></div>
      </>

    ) : (
      <InputContainor size={size} type={type}>
        <label className="label">이름</label>
        <input className="input" />
      </InputContainor>
    );
  return <>{addContent}</>;
};

export default Input;
