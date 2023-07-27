import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ExploreSidebar from "./sidebar/ExploreSidebar";
import NotificationsSidebar from "./sidebar/NotificationsSidebar";
import MessagesSidebar from "./sidebar/MessagesSidebar";
import ProfileSidebar from "./sidebar/ProfileSidebar";
import HomeSidebar from "./sidebar/HomeSidebar";

const Sidebar = () => {
  const location = useLocation();

  switch (location.pathname) {
    case "/explore":
      return <ExploreSidebar />;
    case "/notifications":
      return <NotificationsSidebar />;
    case "/messages":
      return <MessagesSidebar />;
    case "/profile":
      return <ProfileSidebar />;
    case "/home":
      return <HomeSidebar />;
    default:
      return <div>header</div>;
  }
};

export default Sidebar;
