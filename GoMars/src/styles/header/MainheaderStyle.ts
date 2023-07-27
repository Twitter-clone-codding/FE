import { Link } from "react-router-dom";
import styled from "styled-components";
const LinkContainer = styled(Link)`
  display: flex;
  width: 236.78px;
  height: 50.25px;

  * {
    color: black;
  }
  &:hover {
    .link-wrapper {
      background-color: rgba(15, 20, 25, 0.1);
    }
  }
  .link-wrapper {
    display: flex;
    padding: 12px;
    border-radius: 60px;
    cursor: pointer;
    transition: all 0.2s ease;
    > * span {
      font-size: 21px;
    }
    .title {
      display: flex;
      align-items: center;
      margin-left: 20px;
      margin-right: 16px;
    }
  }
  .bold {
    font-weight: 700;
  }
`;

const MainHeaderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  .bird-icon-wrapper {
    width: 50.22px;
    height: 50.22px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0;
    border-radius: 9999px;

    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: (15, 20, 25, 0.1);
    }
  }
  .button-box {
    margin: 4px 0;
  }
`;

export { LinkContainer, MainHeaderListContainer };
