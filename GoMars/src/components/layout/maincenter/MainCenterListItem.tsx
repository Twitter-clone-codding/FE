import { centerFooterArray, refresh, threedot } from "@/assets/svg";
import Icon from "@/utils/Icon";
import styled from "styled-components";

interface CenterItemProps {
  tweet: Tweet;
}

const Wrapper = styled.div`
  padding: 0 16px;
  padding-top: 12px;
  width: 100%;
  padding-bottom: 12px;
  display: flex;
  flex-direction: row;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  .avartar-wrapper {
    width: 40px;
    margin-right: 12px;
  }
  .avartar {
    width: 40px;
    height: 40px;
    background-color: red;
    border-radius: 9999px;
  }
  .main-header {
    display: flex;
    justify-content: space-between;
  }
  .main-header-span {
    > span:first-child {
      font-weight: 700;
    }
  }

  .hashtag {
    margin-left: 4px;
  }
  .main-content-item {
    min-height: 300px;
    background-color: lightgray;
    border-radius: 16px;
    margin-top: 12px;
  }

  .footer {
    width: 100%;
    padding-top: 12px;
    height: 32px;
  }
  .footer-box {
    display: flex;
    max-width: 425px;
    justify-content: space-between;
  }
  .footer-item {
    display: flex;
    flex-direction: row;
    > span {
      padding: 0 12px;
    }
  }
`;

const MainCenterListItem: React.FC<Tweet> = (props) => {
  const { content, createdAt, hashtag, hearts, imgList, views } = props;
  const detailNavigateHandler = () => {
    console.log("imgList", imgList);
  };
  console.log("imgList", imgList);
  const {} = props;
  return (
    <Wrapper>
      <div className="avartar-wrapper">
        <div className="avartar" />
      </div>
      <div className="main">
        <div className="main-header">
          <div className="main-header-span">
            <span>orign</span>
            <span className="hashtag">@helloworld</span>
            <span>·jul 22</span>
          </div>
          <Icon color={"rgb(83, 100, 113)"} height={18.75} width={18.75} path={threedot} />
        </div>
        <div className="main-contnet">
          <div className="main-contnet-comment">
            <span>
              여기에 가지가지 얘기다 전부 다 담길 예정인데여기에 가지가지 얘기다 전부 다 담길
              예정인데여기에 가지가지 얘기다 전부 다 담길 예정인데여기에 가지가지 얘기다 전부 다
              담길 예정인데여기에 가지가지 얘기다 전부 다 담길 예정인데여기에 가지가지 얘기다 전부
              다 담길 예정인데
            </span>
          </div>
          <div className="main-content-item" />
        </div>
        <div className="footer">
          <div className="footer-box">
            {centerFooterArray.map((path) => (
              <div className="footer-item">
                <Icon path={path} color={"rgb(83, 100, 113)"} height={18.75} width={18.75} />
                <span>000</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainCenterListItem;

{
  /* <div className="avartar-wrapper">
        <div className="avartar"></div>
        <div />
        <div className="center-wrapper">
          <div className="cneter-header"></div>
          <div className="center-header-span">
            <span className="center-user-id">orign</span>
            <span className="center-info">
              {hashtag} · {createdAt}
            </span>

            <Icon
              color={"rgb(83, 100, 113)"}
              height={18.75}
              width={18.75}
              path={threedot}
            />
          </div>
          <div className="center-main-comment">{content}</div>
          <div className="center-main-content">asdfasdf</div>
          <div className="footer-wrapper">
            {centerFooterArray.map((path) => (
              <Icon
                path={path}
                color={"rgb(83, 100, 113)"}
                height={18.75}
                width={18.75}
              />
            ))}
          </div>
        </div>
      </div> */
}
