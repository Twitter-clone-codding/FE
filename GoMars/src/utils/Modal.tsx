import { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";

const ModalContainer = styled.div<{ width: string; height: string; reply: boolean }>`
  position: fixed;
  display: flex;

  //모달중앙
  top: ${(props) => (props.reply ? "25" : "50")}%;
  left: 50%;
  transform: translate(-50%, -50%);
  // 크기
  width: ${(props) => props.width}px;

  max-height: 90vh;
  height: auto; // 자동 높이 설정
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
  background-color: rgba(82, 82, 82, 0.7);
  z-index: 1000;
`;

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  height: 100%;
  transition: all 0.5s;
`;

interface ModalProps {
  type?: "default" | "twobutton";
  modal?: any;
  width?: string;
  reply?: boolean;
  height?: string;
  element: JSX.Element;
  setModal?: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}

const Modal = ({
  reply,
  width,
  height,
  element,
  setModal,
  type = "default",
  onClick,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <ModalContainer ref={ref} reply={reply} width={width} height={height}>
        <Wrapper>{element}</Wrapper>
      </ModalContainer>
      <ModalBackGround />
    </>
  );
};

export default Modal;
