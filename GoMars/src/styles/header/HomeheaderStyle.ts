import styled from "styled-components";

const HomeHeaderDiv = styled.div`
  position: relative;
  align-items: stretch;
  display: flex;
  flex-direction: column;
`;

const HomeHeaderContainer = styled(HomeHeaderDiv)`
  backface-visibility: hidden;
  align-items: stretch;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: sticky;
  top: -0.5px;
`;

const HomeHeaderTop = styled(HomeHeaderDiv)`
  z-index: 2;
  cursor: pointer;
  height: 53px;
  padding: 0 16px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const HomeHeaderTopTitle = styled(HomeHeaderDiv)`
  height: 100%;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-start;
  h2 {
    direction: ltr;
    unicode-bidi: isolate;
    background-color: rgba(0, 0, 0, 0);
    list-style: none;
    text-align: inherit;
    display: inline;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 2px;
    padding-top: 2px;
    word-wrap: break-word;
    font-weight: 700;
    color: rgb(15, 20, 25);
    font-size: 20px;
    line-height: 24px;
    span {
      white-space: inherit;
      word-wrap: break-word;
    }
  }
`;

const HomeHeaderBottom = styled(HomeHeaderDiv)`
  border-bottom: 1px solid rgb(239, 243, 244);
  flex-direction: row;
  align-items: center;
  flex-basis: 0%;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  outline-style: none;
  display: block;
  overflow: hidden;
  .scroll-padding {
    scroll-padding: 0 36px;
    overflow-x: auto;
    transform: translate3d(0px, 0px, 0px);
    scroll-snap-type: x mandatory;
    overflow-y: hidden;
    flex-wrap: nowrap;
    height: 100%;
    flex-direction: row;
    position: relative;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    .flex-row {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
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

export {
  HomeHeaderDiv,
  HomeHeaderContainer,
  HomeHeaderTop,
  HomeHeaderTopTitle,
  HomeHeaderBottom,
  HomeHeaderBottomLeft,
};
