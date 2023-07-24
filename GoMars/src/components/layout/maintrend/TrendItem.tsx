import React from "react";
import styled from "styled-components";
import Icon from "@/utils/Icon";
import { threedot } from "@/assets/svg";
import { TrendItemContainer } from "@/styles/sidebar/sidebarStyle";

const TrendItem = (props) => {
  return (
    <TrendItemContainer>
      <div className="wrapper">
        <div className="main">
          <div className="main-place">Trending in South Korea</div>
          <div className="main-info-name">계속 보는 누나</div>
          <div className="main-total-tweets">5,409 Tweets</div>
        </div>
        <div>
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
