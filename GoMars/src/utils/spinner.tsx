import styled, { keyframes } from "styled-components";

const spin = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

const LodingSpinner = styled.div<SpinnerStyleProp>`
  display: block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: ${(props) => props.borderSize}px solid ${(props) => props.color};
  border-radius: 50%;
  border-top-color: ${(props) => props.spinColor};
  animation: ${spin} 1s linear infinite;
`;
interface SpinnerStyleProp {
  size: number;
  borderSize: number;
  color: string;
  spinColor: string;
}

interface SpinnerProp extends SpinnerStyleProp {}

const Spinner: React.FC<SpinnerProp> = (props) => {
  const { size, borderSize, color, spinColor } = props;
  return <LodingSpinner borderSize={borderSize} color={color} spinColor={spinColor} size={size} />;
};
export default Spinner;
