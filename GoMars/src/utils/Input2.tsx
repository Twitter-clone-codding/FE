import { ChangeEventHandler, HTMLInputTypeAttribute, useRef } from "react";
import styled, { css } from "styled-components";

interface StyledInputProps {
  size: "large" | "medium" | "small";
  type: "search" | "insult";
}

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

const typeStyles = {
  search: css`
    border-radius: 9999px;
    background-color: rgb(207, 217, 222);
  `,
  insult: css`
    border-radius: 4px;
  `,
};
const InputContainor = styled.div<StyledInputProps>`
  border: 1px solid black;
  ${(props) => sizeStyles[props.size]};
  > input {
    width: 100%;
    height: 100%;
    outline-color: rgb(29, 155, 240);
    ${(props) => typeStyles[props.type]};
  }
`;
export interface InputProps extends StyledInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelValue?: string;
  placeholder?: string;
  id?: string;
  icon?: string;
  className?: string;
  insultAlert?: string;
}

const Input2: React.FC<InputProps> = (props) => {
  const { size, type, insultAlert } = props;
  return (
    <>
      <InputContainor size={size} type={type}>
        <input />
      </InputContainor>
      {/* {insultAlert && } */}
    </>
  );
};

export default Input2;
