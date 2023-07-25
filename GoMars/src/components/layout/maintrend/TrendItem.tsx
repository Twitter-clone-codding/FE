import React from "react";
import styled from "styled-components";
import { threedot } from "@/assets/svg";
import { Icon } from "@/utils";
const TrendItemContainer = styled.div`
  height: 82px;
  width: 100%;
  padding: 12px 16px;
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .main-place {
    height: 16px;
    width: 100%;
    color: #536471;
    font-size: 14px;
  }
  .main-info-name {
    height: 20px;
    width: 100%;
    font-weight: 600;
    padding-top: 2px;
  }
  .main-total-tweets {
    height: 16px;
    color: #536471;
    font-size: 14px;
    width: 100%;
    margin-top: 4px;
  }
  .icon-box {
    width: 34.75px;
    height: 34.75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    transition: all 0.3s ease;
    &:hover {
      background-color: rgba(29, 155, 240, 0.1);
    }
  }
`;
const TrendItem = (props) => {
  return (
    <TrendItemContainer>
      <div className="wrapper">
        <div className="main">
          <div className="main-place">Trending in South Korea</div>
          <div className="main-info-name">계속 보는 누나</div>
          <div className="main-total-tweets">5,409 Tweets</div>
        </div>
        <div className="icon-box">
          <Icon
            color="rgb(15, 20, 25)"
            height={18.75}
            width={18.75}
            path={threedot}
            isHover={true}
          />
        </div>
      </div>
    </TrendItemContainer>
  );
};

export default TrendItem;
