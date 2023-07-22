import { ChangeEventHandler, HTMLInputTypeAttribute, useRef } from "react";
import styled, { css } from "styled-components";

// interface StyledInputProps {
//   backgroundColor?: string;
//   valueSize?: number;
// }

const sizeStyles = {
  large: css`
    width: 502px;
    height: 43px;
  `,
  medium: css`
    width: 404px;
    height: 56px;
  `,
  small: css``,
};

// const colorStyles = {
//   black: css`
//     color: #000;
//     &::placeholder {
//       color: rgba(0, 0, 0, 0.2);
//     }
//     &:focus::placeholder {
//       color: rgba(0, 0, 0, 1);
//     }
//   `,
// };
interface StyledInputProps {
  size: "large" | "midium" | "small";
  hoverColor?: string;
}

export interface InputProps extends StyledInputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelValue?: string;
  type: "search" | "input" | HTMLInputTypeAttribute;
  placeholder?: string;
  id?: string;
  icon?: string;
  className?: string;
}

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
      {type === "input" ? (
        <Containor>
          <Wrapper size="midium" hoverColor={hoverColor}>
            {labelValue === "이름" && <p className="conut">0 / 50</p>}
            <input type="text" onChange={(e) => onChange(e)} />
            <label htmlFor="">{labelValue}</label>
          </Wrapper>
          {labelValue === "이름" ? (
            <p className="comment">이름을 입력해 주세요.</p>
          ) : (
            <p className="comment">올바른 휴대폰 번호를 입력해주세요.</p>
          )}
        </Containor>
      ) : (
        <SearchWrapper>
          <div className="icon">
            <path d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"></path>
          </div>
          <input type="text" placeholder="Search Twitter" />
        </SearchWrapper>
      )}
    </>
  );
};

export default Input;

const Wrapper = styled.div<StyledInputProps>`
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
`;

const Containor = styled.div`
  .comment {
    top: 0;
    font-size: 12px;
    margin: 0 10px;
    color: red;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  width: 502px;
  height: 53px;
  border-radius: 30px;
  background-color: lightgray;
  color: gray;
  align-items: center;
  > input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    border-radius: 30px;
    padding-left: 80px;
    &:focus {
      outline-color: rgb(29, 155, 240);
      background-color: white;
    }
  }
  .icon {
    width: 43px;
    height: 41px;
    position: absolute;
  }
`;
