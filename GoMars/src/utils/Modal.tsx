import { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";

const ModalContainer = styled.div<{ width: string; height: string }>`
  position: fixed;
  display: flex;

  //모달중앙
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // 크기
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  max-height: 90vh;
  height: auto;
  background-color: #fff;
  border-radius: 16px;
  z-index: 10000;
  color: black;
  display: flex;
  overflow: hidden;
`;

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Wrapper = styled.div`
  background-color: transparent;
  transition: all 0.5s;
`;

interface ModalProps {
  type?: "default" | "twobutton";
  modal?: any;
  width?: string;
  height?: string;
  element: JSX.Element;
  setModal?: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}

const Modal = ({
  width,
  height,
  element,
  setModal,
  type = "default",
}: ModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <ModalContainer ref={ref} width={width} height={height}>
        <Wrapper>{element}</Wrapper>
      </ModalContainer>
      <ModalBackGround />
    </>
  );
};

export default Modal;
