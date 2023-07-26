import SidebarTrendList from "@/components/layout/sidebar/SidebarTrendList";
import { Input } from "@/utils";
import styled from "styled-components";
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
const NotificationsSidebar = () => {
  return (
    <NotificationSidebarContainer>
      <div>
        <Input size="medium" placeholder="Search Twitter" />
      </div>
      <SidebarTrendList />
    </NotificationSidebarContainer>
  );
};

export default NotificationsSidebar;
