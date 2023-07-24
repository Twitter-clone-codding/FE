import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 16px;
  padding-top: 12px;
  width: 100%;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  .avartar-wrapper {
    width: 40px;
    margin-right: 12px;
  }
  .avartar {
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 9999px;
  }
  .main-header {
    display: flex;
    justify-content: space-between;
  }
  .main-header-span {
    > span:first-child {
      font-weight: 700;
    }
  }

  .hashtag {
    margin-left: 4px;
  }
  .main-content-item {
    min-height: 300px;
    background-color: lightgray;
    border-radius: 16px;
    margin-top: 12px;
  }

  .footer {
    width: 100%;
    padding-top: 12px;
    height: 32px;
  }
  .footer-box {
    display: flex;
    max-width: 425px;
    justify-content: space-between;
  }
  .footer-item {
    display: flex;
    flex-direction: row;
    > span {
      padding: 0 12px;
    }
  }
`;

export { Wrapper };
