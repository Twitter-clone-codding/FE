import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectRoute";
import { useAppSelector } from "@/hooks/useRedux";
import {
  Detail,
  Explore,
  Home,
  Main,
  Messages,
  Notifications,
  Profile,
  Signin,
  Signup,
} from "@/pages";
import Authlayout from "@/layout/Authlayout";
import { ErrorPage, NotAuthRoutes, SocialAuth } from ".";

const Nav = () => {
  const user = useAppSelector((state) => Boolean(state.user.token));
  console.log(user);
  return (
    <Routes>
      {/* NotAuth */}
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
          <Route path="/:detail" element={<Detail />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:profileName" element={<Profile />} />
          <Route path="/error" element={<ErrorPage />} />
        </Route>
      </Route>
      {/* 404 handler */}
      <Route path={"/error"} element={<ErrorPage />} />
    </Routes>
  );
};

export default Nav;
