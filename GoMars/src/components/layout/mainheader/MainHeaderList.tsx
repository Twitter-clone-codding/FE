import MainHeaderListItem from "./MainHeaderListItem";
import styled from "styled-components";
import svgArray, { boldSvgArray } from "@/assets/svg";
import Icon from "@/utils/Icon";
import Button from "@/utils/Button";
import { useLocation } from "react-router-dom";
import { Container } from "@/styles/header/MainheaderStyle";

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
    <div>
      <Container>
        {svgArray.map((svg, idx) => (
          <MainHeaderListItem
            path={svg}
            boldPath={boldSvgArray[idx]}
            title={title[idx]}
            key={svg}
            pathname={pathname}
          />
        ))}
      </Container>
      <Button
        backgroundColor="blue"
        color="white"
        hoverColor="hoverBlue"
        size="tweet1"
        title={<span>Tweet</span>}
      />
    </div>
  );
};

export default MainHeaderList;
