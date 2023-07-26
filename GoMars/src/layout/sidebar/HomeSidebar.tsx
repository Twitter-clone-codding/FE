import SidebarTrendList from "@/components/layout/sidebar/SidebarTrendList";
import { Button, Input } from "@/utils";

import styled from "styled-components";

const HomeSidebar = (props) => {
  return (
    <>
      <div className="sidebar-input">
        <Input placeholder="Search Twitter" size="medium" />
      </div>
      <div className="sidebar-verified">
        <div className="sidebar-first">Get Verified</div>
        <div className="">Subscribe to unlock new features.</div>
        <Button
          backgroundColor="black"
          color="white"
          size="getVerify"
          title={<span>Get Verified</span>}
        />
      </div>
      <div className="sidebar-trends">
        <SidebarTrendList />
      </div>
      <div className="sidebar-who to follow"></div>
      <div className="sidebar-links"></div>;
    </>
  );
};

export default HomeSidebar;
