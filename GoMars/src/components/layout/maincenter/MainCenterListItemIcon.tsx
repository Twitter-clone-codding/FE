import { postLike } from "@/api/get";
import { FillHeart, centerFooterArray, share } from "@/assets/svg";
import { IconBox } from "@/styles/maincenter/maincenter";
import { Icon } from "@/utils";
import { useState } from "react";
import MainCenterHeartIcon from "./MainCenterHeartIcon";

const MainCenterListItemIcon: React.FC<Tweet> = (props) => {
  const { hearts, views, id, heartCheck } = props;
  const array = [0, 0, hearts, views, 0];
  const [isLoading, setIsLoading] = useState(false);
  const hoverColors = [
    "rgb(29, 155, 240)",
    "rgb(0, 186, 124)",
    "rgb(249, 24, 128)",
    "rgb(29, 155, 240)",
    "rgb(29, 155, 240)",
  ];

  const defaultColor = "rgb(83, 100, 113)";

  const [playAnimation, setPlayAnimation] = useState(false);
  const [isLiked, setIsLiked] = useState(heartCheck);
  const likeHandler = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setPlayAnimation(!isLiked);
    await postLike(id).then((res) => {
      setIsLiked(!isLiked);
      setTimeout(() => setPlayAnimation(false), 1000);
      setIsLoading(false);
    });
  };

  return (
    <>
      {centerFooterArray.map((path, i) => (
        <MainCenterHeartIcon
          isLike={isLiked}
          playAnimation={playAnimation} // 애니메이션 재생 상태
          index={i}
          key={path}
          path={path}
          count={array[i]}
          defaultColor={defaultColor}
          hoverColor={hoverColors[i]}
          isLoading={isLoading}
          likeHandler={likeHandler}
        />
      ))}
    </>
  );
};
export default MainCenterListItemIcon;
