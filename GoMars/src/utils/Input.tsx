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
    > input {
      border-radius: 9999px;
      background-color: rgb(239, 243, 244);
      border: 1px solid rgba(0, 0, 0, 0);
    }
  `,
  insult: css`
    > input {
      border-radius: 4px;
      border: 1px solid rgb(207, 217, 222);
    }
    position: relative;
    > label {
      position: absolute;
      top: 18px;
      transition: all 0.2s ease;
    }
    > input:focus + label {
      font-size: 12px;
      color: rgb(29, 155, 240);
      top: 8px;
    }
  `,
};

const InputContainor = styled.div<StyledInputProps>`
  ${(props) => sizeStyles[props.size]};
  > input {
    width: 100%;
    height: 100%;
    outline-color: rgb(29, 155, 240);
  }
  ${(props) => typeStyles[props.type]};
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
  const addContent =
    type === "search" ? (
      <InputContainor size={size} type={type}>
        <Icon
          path={explore}
          width={26.25}
          height={26.25}
          color="rgb(83, 100, 113)"
          isSearch={true}
        />
        <input />
      </InputContainor>
    ) : (
      <InputContainor size={size} type={type}>
        <label>입력해주세요</label>
        <input />
      </InputContainor>
    );
  return <>{addContent}</>;
};

export default Input2;

{
  /* <>
  <div className="input-wapper">
    {labelValue === "이름" && <p className="conut">0 / 50</p>}
    <input type="text" onChange={(e) => onChange(e)} />
    
  </div>
  {labelValue === "이름" ? (
    
  ) : (
    <p className="comment">올바른 휴대폰 번호를 입력해주세요.</p>
  )}
</> */
}

{
  /* "
        /> */
}
