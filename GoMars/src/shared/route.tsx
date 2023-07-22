import { Routes, Route } from "react-router-dom";
import NotAuthRoutes from "./authRoute";
import ProtectedRoutes from "./protectRoute";
import ErrorPage from "./404";
import { useAppSelector } from "@/hooks/useRedux";
import { Explore, Home, Main, Messages, Notifications, Profile, Signin, Signup } from "@/pages";
import Authlayout from "@/layout/Authlayout";

const Nav = () => {
  const user = useAppSelector((state) => Boolean(state.user.token));
  return (
    <Routes>
      {/* NotAuth */}
      <Route element={<NotAuthRoutes user={user} />}>
        <Route path="/" element={<Main />}>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Route>

      {/* YesAuth */}
      <Route element={<ProtectedRoutes user={user} />}>
        <Route element={<Authlayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Route>

      {/* 404 handler */}
      <Route path={"/*"} element={<ErrorPage />} />
    </Routes>
  );
};

export default Nav;
