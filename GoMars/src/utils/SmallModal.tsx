import styled from "styled-components";

interface SmallModalProps {
  onClick: () => void;
  height: number;
  width: number;
}
const SmallModalContainer = styled.div`
  position: fixed;
  display: flex;
  width: ${(props) => props.width}px;
  height: 100px;
  background-color: gray;
`;
const SmallModal: React.FC<SmallModalProps> = ({ onClick, height, width }) => {
  return (
    <SmallModalContainer height={height} width={width}>
      <button onClick={onClick}>cancel</button>
    </SmallModalContainer>
  );
};

export default SmallModal;
