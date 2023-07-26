import SidebarTrendList from "@/components/layout/sidebar/SidebarTrendList";
import useInput from "@/hooks/useInput";
import { useAppDispatch } from "@/hooks/useRedux";
import { inputSet } from "@/store/slice/inputSlice";
import { Button, Input } from "@/utils";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeSidebarContainer = styled.div`
  .sidebar-verified {
    gap: 10px;
    height: 126px;
  }
  .sidebar-first {
    font-size: 20px;
    font-weight: 700;
  }
  .sidebar-second {
    font-size: 15px;
    font-weight: 700;
  }
`;
const HomeSidebar = () => {
  const [searchValue, onChangesearchDataHandler] = useInput({
    searchValue: "",
  });
  const nevigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmitMoveExpolreHandler = (e) => {
    e.preventDefault();
    dispatch(inputSet({ inputValue: searchValue.searchValue }));
    nevigate("/explore");
    console.log("이건 실행이 되나?");
  };

  return (
    <HomeSidebarContainer>
      <div className="sidebar-input">
        <Input
          placeholder="Search Twitter"
          size="medium"
          handleInputSubmit={onSubmitMoveExpolreHandler}
          handleInputChange={onChangesearchDataHandler}
        />
      </div>
      <div className="sidebar-verified">
        <div className="sidebar-first">Get Verified</div>
        <div className="sidebar-second">Subscribe to unlock new features.</div>
        <Button
          backgroundColor="black"
          color="white"
          size="getVerify"
          title={<span>Get Verified</span>}
        />
      </div>
      <div className="sidebar-trends">
        <SidebarTrendList />
      </div>
      <div className="sidebar-who to follow"></div>
      <div className="sidebar-links"></div>;
    </HomeSidebarContainer>
  );
};

export default HomeSidebar;
