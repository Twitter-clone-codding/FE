import styled from "styled-components";

interface IconProps extends PathStyleProps {
  path: string;
  isHover?: boolean;
}
interface PathStyleProps {
  width: number;
  height: number;
  color: string;
}
const Containor = styled.div<PathStyleProps>`
  display: flex;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  .path {
    pointer-events: auto; //svg 전용
    list-style: none;
    cursor: pointer;
    white-space: pre-wrap;
    text-align: center;
    word-wrap: break-word; //글자 안잘리게 해줌
    fill: currentcolor; // 색을 바꾸게 도움을 줌
    user-select: none; // 드래그해서 선택불가
    color: ${(props) => props.color};
    width: 100%;
    height: 100%;
  }
`;
const IconOutline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.75px;
  height: 34.75px;
  border-radius: 9999px;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;
const Icon: React.FC<IconProps> = (props) => {
  const { path, width, height, color, isHover } = props;
  const hoverIcon = (
    <Containor width={width} height={height} color={color}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path className="path" d={path}></path>
        </g>
      </svg>
    </Containor>
  );
  return <>{isHover ? <IconOutline>{hoverIcon}</IconOutline> : hoverIcon}</>;
};

export default Icon;
