import styled from "styled-components";

const SidebarLikeContainer = styled.div`
  .profile-sidebar-button-box {
    padding-bottom: 12px;
  }
  .profile-sideber-like-box {
    display: flex;
    padding-bottom: 16px;
    height: 295.16px;
    background-color: rgb(247, 249, 249);
  }
`;

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
