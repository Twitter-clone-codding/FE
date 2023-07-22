import styled from "styled-components";

const HomeHeaderContainer = styled.div`
  width: 100%;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  z-index: 3;
  backface-visibility: hidden;
  position: sticky;
  top: -0.5px;
  .homeheader-wrraper {
    width: 100%;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    position: relative;
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.85);
    .homeheader-top-container {
      width: 100%;
      align-items: stretch;
      display: flex;
      flex-direction: column;
      position: relative;
      cursor: pointer;
      z-index: 2;
      .homeheader-top-wrraper {
        cursor: pointer;
        width: 100%;
        align-items: stretch;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
        height: 53px;
        .homeheader-top-box {
          cursor: pointer;
          position: relative;
          display: flex;
          padding: 0 16px;
          align-items: center;
          flex-direction: row;
          width: 100%;
          height: 53px;
          .homeheader-top-title {
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: flex-start;
            h2 {
              direction: ltr;
              unicode-bidi: isolate;
              background-color: rgba(0, 0, 0, 0);
              list-style: none;
              text-align: inherit;
              text-decoration: none;
              display: inline;
              font:
                14px -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Helvetica,
                Arial,
                sans-serif;

              max-width: 100%;
              overflow-x: hidden;
              overflow-y: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding-bottom: 2px;
              padding-top: 2px;
              min-width: 0px;
              word-wrap: break-word;
              font-family:
                "TwitterChirp",
                -apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                Helvetica,
                Arial,
                sans-serif;
              font-weight: 700;
              color: rgb(15, 20, 25);
              font-size: 20px;
              line-height: 24px;
              .homeheader-title {
                cursor: pointer;
                list-style: none;
                text-align: inherit;
                display: inline;
                color: inherit;
                font: inherit;
                white-space: inherit;
                word-wrap: break-word;
                font-family: inherit;
              }
            }
          }
        }
      }
    }
    .homeheader-bottom-container {
      align-items: stretch;
      display: flex;
      flex-direction: column;
      position: relative;
      nav {
        display: flex;
        position: relative;
        z-index: 0;
        align-items: center;
        flex-direction: row;
        border-bottom: 1px solid rgb(239, 243, 244);
        .homeheader-bottom-wrraper {
          display: flex;
          flex-shrink: 0;
          position: relative;
          align-items: center;
          outline-style: none;
          flex-direction: row;
          flex-grow: 1;
          height: 100%;
          flex-basis: 0%;
          .homeheader-bottom-box {
            align-items: stretch;
            box-sizing: border-box;
            flex-direction: column;
            position: relative;
            z-index: 0;
            overflow: hidden;
            display: block;
            flex-grow: 1;
            height: 100%;
            flex-shrink: 1;
            .homeheader-scrollpadding {
              align-items: stretch;
              display: flex;
              flex-basis: auto;
              position: relative;
              z-index: 0;
              flex-direction: row;
              flex-grow: 1;
              height: 100%;
              flex-shrink: 1;
              flex-wrap: nowrap;
              overflow-y: hidden;
              scroll-snap-type: x mandatory;
              transform: translate3d(0px, 0px, 0px);
              overflow-x: auto;
              scroll-padding: 0px 36px;
              .homeheader-following-container,
              .homeheader-foryou-container {
                align-items: stretch;
                display: flex;
                position: relative;
                flex-grow: 1;
                scroll-snap-align: start;
              }
            }
          }
        }
      }
    }
  }
`;

const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      <div className="homeheader-wrraper">
        <div className="homeheader-top-container">
          <div className="homeheader-top-wrraper">
            <div className="homeheader-top-box">
              <div className="homeheader-top-title">
                <h2>
                  <span className="homeheader-title">Home</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="homeheader-bottom-container">
          <nav>
            <div className="homeheader-bottom-wrraper">
              <div className="homeheader-bottom-box">
                <div className="homeheader-scrollpadding">
                  <div className="homeheader-foryou-container"></div>
                  <div className="homeheader-following-container"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </HomeHeaderContainer>
  );
};
export default HomeHeader;
