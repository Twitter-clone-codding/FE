import TrendItem from "../maintrend/TrendItem";
import { useEffect, useState } from "react";
import { getTrands } from "@/api/get";
import { SidebarTrendListContainer } from "@/styles/sidebar/sidebarStyle";

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
        <div className="profile-sideber-title">Trends for you</div>
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
