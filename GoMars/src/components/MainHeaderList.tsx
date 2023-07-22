import MainHeaderListItem from "./MainHeaderListItem";
import styled from "styled-components";
import svgArray from "@/assets/svg";
const MainHeaderList = () => {
  const title = [
    <span>Home</span>,
    <span>Explore</span>,
    <span>Notifications</span>,
    <span>Message</span>,
    <span>Lists</span>,
    <span>Communities</span>,
    <span>Verified</span>,
    <span>Profile</span>,
    <span>More</span>,
  ];
  return (
    <Container>
      {svgArray.map((svg, idx) => (
        <MainHeaderListItem path={svg} title={title[idx]} />
      ))}
    </Container>
  );
};

export default MainHeaderList;

const Container = styled.div`
  width: 270px;
`;
