import TrendItem from "@/components/layout/maintrend/TrendItem";
import ExploreHeader from "@/layout/header/ExploreHeader";
import styled from "styled-components";

const ExploreContainer = styled.div`
  .main-title {
    height: 48px;
    padding: 12px 16px;
    font-size: 21.5px;
    font-weight: 700;
  }
  .show-more {
    height: 52px;
    color: rgb(29, 155, 240);
    padding: 16px;
  }
`;

const Explore = () => {
  return (
    <>
      <ExploreContainer>
        <div className="main">
          <div className="main-title">
            <span>Trends for you</span>{" "}
          </div>
          <div className="main-ternd-box">
            <TrendItem />
          </div>
          <div className="show-more">
            <span>Show more</span>
          </div>
          <div className="main-title">
            <span>What's happening</span>{" "}
          </div>
        </div>
      </ExploreContainer>
    </>
  );
};
export default Explore;
