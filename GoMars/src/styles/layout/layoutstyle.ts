import styled from "styled-components";
interface AuthLoyOutContainerProps {
  widowHeight: number;
}

const AuthLoyOutContainer = styled.div<AuthLoyOutContainerProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: ${(props) => props.widowHeight}px;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  z-index: 3;
  align-items: flex-end;
  .sidebar-wrraper {
    display: flex;
    align-items: stretch;
    position: relative;
    z-index: 0;
    width: 275px;
    .sidebar {
      align-items: stretch;
      display: flex;
      position: fixed;
      top: 0px;
      backface-visibility: hidden;
      height: 100%;
      .sidebar-linkprofle-container {
        align-items: stretch;
        display: flex;
        position: relative;
        padding: 0 8px;
        width: 275px;
        height: 100%;
        gap: 8px;
        justify-content: space-between;
        flex-direction: column;
        overflow-y: auto;
      }
    }
  }
`;
const MainContentContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-start;
  .contents-wrraper {
    align-items: stretch;
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    width: 990px;
    backface-visibility: hidden;
    .contents-box {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      min-height: 100%;
      width: 100%;
      justify-content: space-between;
      align-items: stretch;
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;
const MainContentsBoardContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgba(255, 255, 255, 1);
  flex-grow: 1;
  width: 100%;
  border-style: solid;
  border-color: rgb(239, 243, 244);
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 0px;
  z-index: 1;
  max-width: 600px;
`;
const RightContentBoardContainer = styled.div`
  align-items: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  backface-visibility: hidden;
  margin-right: 10px;
  width: 350px;

  .sidebar-input {
    display: flex;
    height: 53px;
    margin-bottom: 12px;
    align-items: end;
  }
  .sidebar-verified {
    display: flex;
    flex-direction: column;
    height: 100px;
    gap: 10px;
    padding: 12px 16px;
    background-color: rgb(247, 249, 249);
    margin-bottom: 16px;
  }
  .sidebar-trends {
  }
`;

export {
  AuthLoyOutContainer,
  SidebarContainer,
  MainContentContainer,
  MainContentsBoardContainer,
  RightContentBoardContainer,
};
