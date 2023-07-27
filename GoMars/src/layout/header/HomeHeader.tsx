import {
  HomeHeaderContainer,
  HomeHeaderTop,
  HomeHeaderTopTitle,
  HomeHeaderBottom,
} from "@/styles/header/HomeheaderStyle";
import { HomeHeaderBottomLeft } from "@/styles/maincenter/maincenter";

const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <HomeHeaderTop>
        <HomeHeaderTopTitle>
          <h2>
            <span>Home</span>
          </h2>
        </HomeHeaderTopTitle>
      </HomeHeaderTop>
      <HomeHeaderBottom>
        <div className="scroll-padding">
          {/*  */}
          <div className="flex-row">
            <HomeHeaderBottomLeft>
              <div className="leftbutton-title">
                <span>For you</span>
                <div className="bottom-color" />
              </div>
            </HomeHeaderBottomLeft>
            <HomeHeaderBottomLeft>
              <div className="rightbutton-title">
                <span>Following</span>
                {/* <div /> */}
              </div>
            </HomeHeaderBottomLeft>
          </div>
          {/*  */}
        </div>
      </HomeHeaderBottom>
    </HomeHeaderContainer>
  );
};
export default HomeHeader;
