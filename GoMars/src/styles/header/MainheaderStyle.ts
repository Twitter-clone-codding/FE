import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileContainor = styled.div`
  display: flex;
  margin: 12px 0;
  /* width: 259px; */
  justify-content: space-between;
  width: 100%;
  height: 64.06px;
  border-radius: 9999px;
  padding: 12px;
  align-items: center;

  .main-info {
    display: flex;
    flex-direction: row;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    background-color: red;
  }
  .info {
    margin: 0 12px;
    width: 159.5px;
  }

  .side-item {
    width: 35.5px;
  }
`;

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

const Container = styled.div`
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
`;
export { ProfileContainor, LinkContainer, Container };
