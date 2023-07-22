import { Navigate, Outlet } from "react-router-dom";

interface AuthRouteProps {
  user: boolean;
}

const NotAuthRoutes = ({ user }: AuthRouteProps) => {
  return user ? <Navigate to={"/home"} /> : <Outlet />;
};
export default NotAuthRoutes;
