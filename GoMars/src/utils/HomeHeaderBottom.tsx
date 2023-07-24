import styled from "styled-components";

const HomeHeaderDiv = styled.div`
  position: relative;
  align-items: stretch;
  display: flex;
  flex-direction: column;
`;

const HomeHeaderBottomLeft = styled(HomeHeaderDiv)`
  flex-grow: 1;
  align-items: center;
  transition: all 0.2s;
  outline-style: none;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  height: 53px;
  min-width: 56px;
  padding: 0 16px;
  &:hover {
    background-color: rgba(15, 20, 25, 0.1);
  }

  .rightbutton-title {
    height: 100%;
    padding-bottom: 16px;
    padding-top: 16px;
    font-weight: 500;
    color: rgb(83, 100, 113);
  }
  .leftbutton-title {
    font-weight: 700;
    color: rgb(15, 20, 25);
  }
  .rightbutton-title,
  .leftbutton-title {
    direction: ltr;
    unicode-bidi: isolate;
    white-space: pre-wrap;
    display: flex;
    position: relative;
    align-items: center;
    word-wrap: break-word;
    line-height: 20px;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    span {
      text-align: inherit;
      color: inherit;
      font: inherit;
      white-space: inherit;
      min-width: 0px;
      word-wrap: break-word;
      font-family: inherit;
    }
    .bottom-color {
      border-bottom-left-radius: 9999px;
      border-bottom-right-radius: 9999px;
      border-top-left-radius: 9999px;
      border-top-right-radius: 9999px;
      display: inline-flex;
      bottom: 0px;
      position: absolute;
      width: 100%;
      min-width: 56px;
      height: 4px;
      align-self: center;
      background-color: rgb(29, 155, 240);
    }
  }
`;
interface HomeHeaderBottomProps {
  title: JSX.Element;
}

const HomeHeaderBottom: React.FC<HomeHeaderBottomProps> = (props) => {
  const { title } = props;
  return (
    <HomeHeaderBottomLeft>
      <div className="leftbutton-title">
        {title}
        <div className="bottom-color" />
      </div>
    </HomeHeaderBottomLeft>
  );
};

export default HomeHeaderBottom;
