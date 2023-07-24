import { useLocation } from "react-router-dom";
import ExploreHeader from "./header/ExploreHeader";
import HomeHeader from "./header/HomeHeader";
import MessagesHeader from "./header/MessagesHeader";
import NotificationsHeader from "./header/NotificationsHeader";
import ProfileHeader from "./header/ProfileHeader";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation();

  switch (location.pathname) {
    case "/explore":
      return <ExploreHeader />;
    case "/notifications":
      return <NotificationsHeader />;
    case "/messages":
      return <MessagesHeader />;
    case "/profile":
      return <ProfileHeader />;
    case "/home":
      return <HomeHeader />;
    default:
      return <div>header</div>;
  }
};

export default Header;
