import useWindowHeight from "@/hooks/useWindowHeight";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
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
import { Modal } from "@/utils";
import TweetComponent from "@/components/layout/maincenter/TweetComponent";
import { useAppSelector } from "@/hooks/useRedux";

const Authlayout = () => {
  const widowHeight = useWindowHeight();
  const modalChecked = useAppSelector((state) => state.modal.modalChecked);
  const serverData = useSSE(`${import.meta.env.VITE_SERVER_ENDPOINT}/notice`, ["addComment"]);
  const location = useLocation();
  const MessageNotContent = (
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
  );
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
          {location.pathname === "/messages" ? <Outlet /> : MessageNotContent}
        </div>
      </MainContentContainer>

      {modalChecked && <Modal reply element={<TweetComponent reply={true} />} width="600" />}
    </AuthLoyOutContainer>
  );
};
export default Authlayout;
