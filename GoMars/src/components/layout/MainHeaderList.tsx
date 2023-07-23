import MainHeaderListItem from "./MainHeaderListItem";
import styled from "styled-components";
import svgArray, { boldSvgArray } from "@/assets/svg";
import Icon from "@/utils/Icon";
import Button from "@/utils/Button";
import { useLocation } from "react-router-dom";

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

const Container = styled.div`
  .bird-icon-wrapper {
    width: 50.22px;
    height: 50.22px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0;
    border-radius: 9999px;

    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: (15, 20, 25, 0.1);
    }
  }
`;
