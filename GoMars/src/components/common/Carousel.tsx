import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

interface CarouselProps {}

const CarouselContainor = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

const Carousel: React.FC<CarouselProps> = (props) => {
  const {} = props;
  const [position, setPosition] = useState(0);
  const slideRef = useRef(null);
  const nextPage = () => {
    setPosition((prev) => prev + 1);
  };
  const prevPage = () => {
    setPosition((prev) => prev - 1);
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease";
    slideRef.current.style.transform = `translateX(-${position}00%)`;
  }, [position]);
  return (
    <>
      <button onClick={prevPage}></button>
      <button onClick={nextPage}></button>
      <CarouselContainor ref={slideRef}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </CarouselContainor>
    </>
  );
};

export default Carousel;
