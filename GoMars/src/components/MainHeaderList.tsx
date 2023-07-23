import MainHeaderListItem from "./MainHeaderListItem";
import styled from "styled-components";
import svgArray from "@/assets/svg";
import Icon from "@/utils/Icon";
import Button from "@/utils/Button";

const MainHeaderList = () => {
  const bird =
    "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";
  const color = "rgb(29, 155, 240)";
  const title = [
    <span>Home</span>,
    <span>Explore</span>,
    <span>Notifications</span>,
    <span>Messages</span>,
    <span>Lists</span>,
    <span>Bookmarks</span>,
    <span>Communities</span>,
    <span>Verified</span>,
    <span>Profile</span>,
    <span>More</span>,
  ];

  return (
    <div>
      <Container>
        <div className="bird-icon-wrapper">
          <Icon color={color} path={bird} height={26.25} width={26.25} />
        </div>
        {svgArray.map((svg, idx) => (
          <MainHeaderListItem path={svg} title={title[idx]} />
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
    display: flex;
    width: 259px;
    height: 58.25px;
    padding: 4px 0;
    padding: 12px;
    border-radius: 60px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
`;
