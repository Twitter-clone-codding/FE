import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTrands } from "@/api/get";
import TrendItem from "@/components/layout/maintrend/TrendItem";
import { Input } from "@/utils";
import SidebarLike from "@/components/layout/sidebar/SidebarLike";
import SidebarTrendList from "@/components/layout/sidebar/SidebarTrendList";

const SidebarTrendListContainer = styled.div`
  background-color: rgb(247, 249, 249);
  .profile-sideber-title {
    height: 48px;
    padding: 12px 16px;
    font-size: 21.5px;
    font-weight: 700;
  }
`;

const ProfileSidebar = () => {
  const [trendData, setTrendData] = useState<Trend[]>();

  useEffect(() => {
    const fetch = async () => {
      const response = await getTrands();
      setTrendData(response.result);
    };
    fetch();
  }, []);
  return (
    <>
      <SidebarTrendListContainer>
        <div className="profile-sidebar-button-box">
          <Input size="medium" placeholder="Search Twitter" />
        </div>
        <SidebarLike />
        <SidebarTrendList />
      </SidebarTrendListContainer>
    </>
  );
};

export default ProfileSidebar;
