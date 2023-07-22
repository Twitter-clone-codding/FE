import styled from "styled-components";

interface IconProps extends PathStyleProps {
  path: string;
}
interface PathStyleProps {
  width: number;
  height: number;
}
const Containor = styled.div<PathStyleProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
const Path = styled.path`
  pointer-events: auto; //svg 전용
  list-style: none;
  cursor: pointer;
  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word; //글자 안잘리게 해줌
  fill: currentcolor; // 색을 바꾸게 도움을 줌
  user-select: none; // 드래그해서 선택불가
`;

const Icon: React.FC<IconProps> = (props) => {
  const { path, width, height } = props;

  return (
    <Containor width={width} height={height}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <Path d={path}></Path>
        </g>
      </svg>
    </Containor>
  );
};

export default Icon;
