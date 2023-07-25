import styled, { css } from "styled-components";

interface ButtonProps extends MyButtonProps {
  onClick?: () => void;
  title: JSX.Element;
  type?: "button" | "submit" | "reset";
}
interface MyButtonProps {
  color: "white" | "blue" | "hoverBlue" | "hoverBlack" | "lightBlack" | "black";
  backgroundColor: "white" | "blue" | "lightBlack" | "black";
  hoverColor?:
    | "hoverBlue"
    | "hoverBlack"
    | "hoverLightBlue"
    | "hoverLightBlack";
  size:
    | "tweet1"
    | "tweet2"
    | "getVerify"
    | "follow"
    | "logout"
    | "login1"
    | "login2"
    | "register"
    | "message"
    | "main"
    | "editProfile";
  borderColor?: "blue" | "gray";
}

const colorStyles = {
  white: "#ffffff",
  blue: "rgb(29, 155, 240)",
  hoverBlue: "rgb(26, 140, 216)",
  hoverLightBlue: "rgba(29, 155, 240, 0.1)",
  hoverBlack: "rgb(39, 44, 48)",
  lightblack: "rgba(15, 20, 25, 0.1)",
  hoverLightBlack: "rgba(15, 20, 25, 0.1)",
  black: "rgb(15, 20, 25)",
  gray: "rgb(207, 217, 222)",
};

const sizeStyles = {
  tweet1: css`
    width: 90%; //210.59px
    height: 52px;
    padding: 0 32px;
    font-size: 17px;
    font-weight: 700;
  `,
  tweet2: css`
    width: 75px;
    height: 36px;
    padding: 0 16px;
  `,
  getVerify: css`
    width: 120.16px;
    height: 36px;
    padding: 0 16px;
  `,
  follow: css`
    width: 78px;
    height: 32px;
    padding: 0 16px;
  `,
  logout: css`
    width: 256px;
    height: 44px;
    padding: 0 24px;
  `,
  login1: css`
    width: 300px;
    height: 40px;
    padding: 0 16px;
  `,
  login2: css`
    width: 300px;
    height: 36px;
    padding: 0 16px;
  `,
  register: css`
    width: 440px;
    height: 52px;
    padding: 0 32px;
  `,
  message: css`
    width: 200px;
    height: 52px;
  `,
  main: css`
    width: 300px;
    height: 40px;
  `,
  editProfile: css`
    width: 113.73px;
    height: 36px;
    font-weight: 700;
  `,
};

const MyButton = styled.button<MyButtonProps>`
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: (0, 0, 0, 0.08) 0px 8px 28px;
  border-radius: 9999px;
  outline-style: none;
  transition-duration: 0.2s;
  font-size: inherit;
  border-color: ${(props) => colorStyles[props.borderColor]};
  background-color: ${(props) => colorStyles[props.backgroundColor]};
  color: ${(props) => colorStyles[props.color]};
  ${(props) => sizeStyles[props.size]};
  &:hover {
    background-color: ${(props) => colorStyles[props.hoverColor]};
  }
`;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    onClick,
    title,
    type,
    color,
    size,
    backgroundColor,
    hoverColor,
    borderColor,
  } = props;
  return (
    <MyButton
      type={type}
      color={color}
      size={size}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      borderColor={borderColor}
      onClick={onClick}
    >
      {title}
    </MyButton>
  );
};
export default Button;
