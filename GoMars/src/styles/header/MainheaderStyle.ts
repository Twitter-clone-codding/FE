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

const ProfileContainor = styled.div`
  margin: 12px 0;
  /* width: 259px; */

  width: 100%;
  height: 64.06px;
  border-radius: 9999px;
  padding: 12px;
  align-items: center;
  .profile-wrapper {
    display: flex;
    justify-content: space-between;
  }
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
  }
  .info-name {
    font-weight: 600;
  }
  .info-tag-name {
    color: rgb(83, 100, 113);
  }
  .side-item {
    display: flex;
    align-items: center;
  }
  .icon-box {
    width: 34.75px;
    height: 34.75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    transition: all 0.3s ease;
  }
`;
export { ProfileContainor, LinkContainer, MainHeaderListContainer };
