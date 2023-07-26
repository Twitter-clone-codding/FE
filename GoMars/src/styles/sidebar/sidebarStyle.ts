import styled from "styled-components";

const TrendItemContainer = styled.div`
  height: 82px;
  width: 100%;
  padding: 12px 16px;
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .main-place {
    height: 16px;
    width: 100%;
    color: #536471;
    font-size: 14px;
  }
  .main-info-name {
    height: 20px;
    width: 100%;
    font-weight: 600;
    padding-top: 2px;
  }
  .main-total-tweets {
    height: 16px;
    color: #536471;
    font-size: 14px;
    width: 100%;
    margin-top: 4px;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NotificationSidebarContainer = styled.div`
  background-color: rgb(247, 249, 249);
  .profile-sideber-title {
    height: 48px;
    padding: 12px 16px;
    font-size: 21.5px;
    font-weight: 700;
  }
  .profile-sidebar-button-box {
    padding-bottom: 12px;
  }
  .profile-sideber-like-box {
    display: flex;
    padding-bottom: 16px;
    height: 295.16px;
    background-color: rgb(247, 249, 249);
  }
`;

const SidebarTrendListContainer = styled.div`
  background-color: rgb(247, 249, 249);
  .profile-sideber-title {
    height: 48px;
    padding: 12px 16px;
    font-size: 21.5px;
    font-weight: 700;
  }
`;

const SidebarLikeContainer = styled.div`
  .profile-sidebar-button-box {
    padding-bottom: 12px;
  }
  .profile-sideber-like-box {
    display: flex;
    padding-bottom: 16px;
    height: 295.16px;
    background-color: rgb(247, 249, 249);
  }
`;
export {
  TrendItemContainer,
  SpinnerContainer,
  HomeContainer,
  NotificationSidebarContainer,
  SidebarTrendListContainer,
  SidebarLikeContainer,
};
