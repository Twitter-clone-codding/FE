import _ from "lodash";
import { useState, useEffect } from "react";

const useWindowHeight = (): number => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = _.debounce(() => {
    setWindowHeight(window.innerHeight);
  }, 50);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowHeight;
};

export default useWindowHeight;
