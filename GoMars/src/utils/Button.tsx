// import styled, {css} from "styled-components";

// export interface ButtonProps = {
//   title: JSX.Element;
//   color: string;
//   size:
// }

// const Button: ButtonProps = (props) => {
//   const {title, color, size } = props;

//   return (
//     <MyButton color={color} size={size} >{title}</MyButton>
//   )
// }
// export default Button;
// const MyButton = styled.button`
//   border-radius: 30px;
//   background-color: rgb(29, 155, 240);
//   padding: 0 32px;
//   border: 1px solid rgba(0, 0, 0, 0);
//   box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
//   color: white;
//   width: 214px;
//   height: 52px;

//   min-width: 214px;
//   min-height: 52px;
// `;

import styled, { css } from "styled-components";

interface StyledButtonProps {
  color:
    | "blue"
    | "black"
    | "gray"
    | "reverseBlue"
    | "lightGray"
    | "blur"
    | "white";
  size:
    | "tweet2"
    | "tweet1"
    | "register"
    | "message"
    | "follow"
    | "getVerify"
    | "main"
    | "logout"
    | "login";
}
export interface ButtonProps extends StyledButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  title: JSX.Element;
  type?: "button" | "submit";
}
const sizeStyles = {
  tweet2: css`
    width: 75px;
    height: 36px;
  `,
  tweet1: css`
    width: 200px;
    height: 52px;
  `,
  logout: css`
    width: 238px;
    height: 42px;
  `,
  login: css`
    width: 300px;
    height: 36px;
  `,
  register: css`
    width: 420px;
    height: 50px;
  `,
  message: css`
    width: 200px;
    height: 50px;
  `,
  follow: css`
    width: 78px;
    height: 32px;
  `,
  getVerify: css`
    width: 86px;
    height: 32px;
  `,
  main: css`
    width: 300px;
    height: 40px;
  `,
};

const colorStyles = {
  blue: css`
    background-color: rgb(29, 155, 240);
    border: 1px solid rgba(0, 0, 0, 0);
    color: white;
    &:hover {
      background-color: gray;
      /* 색을 뽑아내야할듯 못찾겠네 */
    }
  `,
  black: css`
    background-color: black;
    border: 1px solid rgba(0, 0, 0, 0);
    color: white;
  `,
  gary: css`
    background-color: gary;
    border: 1px solid rgba(0, 0, 0, 0);
    color: white;
  `,
  reverseBlue: css`
    background-color: white;
    border: 1px solid rgb(29, 155, 240);
    color: rgb(29, 155, 240);
  `,
  lightGray: css`
    background-color: lightgray;
    border: 1px solid rgba(0, 0, 0, 0);
    color: black;
  `,
  blur: css`
    background-color: rgb(29, 155, 240);
    border: 1px solid rgba(0, 0, 0, 0);
    color: white;
  `,
  white: css`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover {
      background-color: lightgray;
      border: 1px solid lightgray;
    }
  `,
};

const MyButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 10px;
  font-size: 15px;
  font-weight: 500;
  transition:
    background-color 0.2s,
    color 0.2s;

  ${(props) => sizeStyles[props.size]}
  ${(props) => colorStyles[props.color]}
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, title, type, color, size } = props;

  return (
    <MyButton onClick={onClick} color={color} size={size} type={type}>
      {title}
    </MyButton>
  );
};
export default Button;
