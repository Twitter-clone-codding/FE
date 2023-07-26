import { SidebarLikeContainer } from "@/styles/sidebar/sidebarStyle";

interface SIdebarLikeProps {}
function SidebarLike() {
  return (
    <SidebarLikeContainer>
      <div className="profile-sideber-like-box">
        <div className="profile-sideber-title">You might like</div>
      </div>
    </SidebarLikeContainer>
  );
}

export default SidebarLike;
