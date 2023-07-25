import { ChangeEvent } from "react";
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
  position: relative;
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
  .searchValue {
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

const AutoSearchContainor = styled.div`
  width: 502px;
  min-height: 100px;
  max-height: calc(80vh - 53px);
  position: absolute;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  font-size: 15px;
  overflow-y: auto;
  box-shadow:
    rgba(101, 119, 134, 0.2) 0px 0px 15px,
    rgba(101, 119, 134, 0.15) 0px 0px;

  .auto-search-placeholder {
    display: flex;
    flex-grow: 1;
    color: #536471;
    padding: 20px 12px 12px 12px;
    justify-content: center;
  }
`;
export interface InputProps extends InputStyleProps {
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  value: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { placeholder, size, value, handleInputChange } = props;
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
          <input
            className="searchValue"
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <AutoSearchContainor>
            <div className="auto-search-placeholder">
              Try searching for people, topics, or keywords
            </div>
          </AutoSearchContainor>
        </div>
      </InputContainor>
    </>
  );
};

export default Input;
