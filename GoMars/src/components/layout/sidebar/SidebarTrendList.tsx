import styled from "styled-components";
import TrendItem from "../maintrend/TrendItem";
import { useEffect, useState } from "react";
import { getTrands } from "@/api/get";

const SidebarTrendListContainer = styled.div`
  background-color: rgb(247, 249, 249);
  .sideber-ternds-title {
    height: 48px;
    padding: 12px 16px;
    font-size: 21.5px;
    font-weight: 700;
  }
`;

const SidebarTrendList = () => {
  const [trendData, setTrendData] = useState<Trend[]>();

  useEffect(() => {
    const fetch = async () => {
      const response = await getTrands();
      setTrendData(response.result);
    };
    fetch();
  }, []);
  return (
    <>
      <SidebarTrendListContainer>
        <div className="sideber-ternds-title">Trends for you</div>
        {trendData?.map((data, idx) => (
          <TrendItem
            key={`${idx}+ ${data.hashTag}`}
            hashTag={data.hashTag}
            total={data.total}
          />
        ))}
      </SidebarTrendListContainer>
    </>
  );
};

export default SidebarTrendList;
