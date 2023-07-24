import styled from "styled-components";

const CarouselItemContainor = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 148px;
    padding: 12px;
    border-radius: 12px;
    transition: all 0.2s ease;
    &:hover {
      background-color: rgba(26, 155, 240, 0.1);
    }
  }

  .content {
    width: 156px;
    height: 96px;
    background-color: red;
    border-radius: inherit;
  }
  .title {
    width: 156px;
    height: 16px;
    margin-top: 12px;
    background-color: blue;
  }
`;

const CarouselItem = (props) => {
  const {} = props;
  return (
    <CarouselItemContainor>
      <div className="wrapper">
        <div className="content"></div>
        <div className="title"></div>
      </div>
    </CarouselItemContainor>
  );
};

export default CarouselItem;
