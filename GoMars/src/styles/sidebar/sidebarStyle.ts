import styled from "styled-components";

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
`;

export { TrendItemContainer };
