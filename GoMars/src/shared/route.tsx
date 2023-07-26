import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectRoute";
import { useAppSelector } from "@/hooks/useRedux";
import { Explore, Home, Main, Messages, Notifications, Profile, Signin, Signup } from "@/pages";
import Authlayout from "@/layout/Authlayout";
import { ErrorPage, NotAuthRoutes, SocialAuth } from ".";

const Nav = () => {
  const user = useAppSelector((state) => Boolean(state.user.token));
  return (
    <Routes>
      {/* NotAuth */}
      <Route path={"/*"} element={<ErrorPage />} />
      <Route element={<NotAuthRoutes user={user} />}>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/oauth/google" element={<SocialAuth />} />
      </Route>
      {/* YesAuth */}
      <Route element={<ProtectedRoutes user={user} />}>
        <Route element={<Authlayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:profileName" element={<Profile />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Route>
      {/* 404 handler */}
    </Routes>
  );
};

export default Nav;
