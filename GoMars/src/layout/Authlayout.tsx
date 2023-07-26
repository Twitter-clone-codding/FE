import useWindowHeight from "@/hooks/useWindowHeight";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import MainHeaderList from "@/components/layout/mainheader/MainHeaderList";
import MainHeaderProfile from "@/components/layout/mainheader/MainHeaderProfile";
import Sidebar from "./Sidebar";
import {
  AuthLoyOutContainer,
  SidebarContainer,
  MainContentContainer,
  MainContentsBoardContainer,
  RightContentBoardContainer,
} from "@/styles/layout/layoutstyle";
import useSSE from "@/hooks/useSSE";

const Authlayout = () => {
  const widowHeight = useWindowHeight();
  const serverData = useSSE(`${import.meta.env.VITE_SERVER_ENDPOINT}/notice`, ["addComment"]);
  return (
    <AuthLoyOutContainer widowHeight={widowHeight}>
      <SidebarContainer>
        <div className="sidebar-wrraper">
          <div className="sidebar">
            <div className="sidebar-linkprofle-container">
              <MainHeaderList />
              <MainHeaderProfile type="profile" />
            </div>
          </div>
        </div>
      </SidebarContainer>
      <MainContentContainer>
        <div className="contents-wrraper">
          <div className="contents-box">
            <MainContentsBoardContainer>
              <div className="hometimeline-container">
                <Header />
                <Outlet />
              </div>
            </MainContentsBoardContainer>
            <RightContentBoardContainer>
              <Sidebar />
            </RightContentBoardContainer>
          </div>
        </div>
      </MainContentContainer>
    </AuthLoyOutContainer>
  );
};
export default Authlayout;
