import { ChangeEventHandler, HTMLInputTypeAttribute, useRef } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";
import { explore } from "@/assets/svg";

interface InputStyleProps {
  size: "large" | "medium";
}

const sizeStyles = {
  large: css`
    width: 502px;
    height: 44px;
  `,
  medium: css`
    width: 350px;
    height: 42px;
  `,
};

const InputContainor = styled.div<InputStyleProps>`
  .input-wrapper {
    display: flex;
    flex-direction: row;
    background-color: rgb(239, 243, 244);

    ${(props) => sizeStyles[props.size]}
    border-radius: 9999px;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .input-wrapper:focus-within {
    border: 1px solid rgb(29, 155, 240);
    background-color: white;
  }
  .customInput {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 12px;
    font-size: 16px;
    ::placeholder {
      font-size: 15px;
      color: rgb(83, 100, 113);
    }
  }
  .icon-box {
    padding-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 42px;
  }
`;
export interface InputProps extends InputStyleProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { placeholder, size } = props;
  return (
    <>
      {" "}
      <InputContainor size={size}>
        <div className="input-wrapper">
          <div className="icon-box">
            <Icon
              path={explore}
              width={20}
              height={20}
              color="rgb(83, 100, 113)"
            />
          </div>
          <input className="customInput" placeholder={placeholder} />
        </div>
      </InputContainor>
    </>
  );
};

export default Input;
