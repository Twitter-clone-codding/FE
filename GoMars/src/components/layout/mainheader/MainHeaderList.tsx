import MainHeaderListItem from "./MainHeaderListItem";
import svgArray, { boldSvgArray } from "@/assets/svg";
import Button from "@/utils/Button";
import { useLocation } from "react-router-dom";
import { MainHeaderListContainer } from "@/styles/header/MainheaderStyle";
import useSSE from "@/hooks/useSSE";

const MainHeaderList = () => {
  const color = "rgb(29, 155, 240)";
  const title = [
    "",
    "Home",
    "Explore",
    "Notifications",
    "Messages",
    "Lists",
    "Bookmarks",
    "Communities",
    "Verified",
    "Profile",
    "More",
  ];

  const { pathname } = useLocation();

  return (
    <MainHeaderListContainer>
      {svgArray.map((svg, idx) => (
        <MainHeaderListItem
          path={svg}
          boldPath={boldSvgArray[idx]}
          title={title[idx]}
          key={svg}
          pathname={pathname}
        />
      ))}
      <div className="button-box">
        <Button
          backgroundColor="blue"
          color="white"
          hoverColor="hoverBlue"
          size="tweet1"
          title={<span>Tweet</span>}
        />
      </div>
    </MainHeaderListContainer>
  );
};

export default MainHeaderList;
