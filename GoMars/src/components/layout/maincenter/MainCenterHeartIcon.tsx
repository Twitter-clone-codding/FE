import { FillHeart } from "@/assets/svg";
import { IconBox } from "@/styles/maincenter/maincenter";
import { Icon, Modal } from "@/utils";
import { FC, useState } from "react";
import heartlottietwo from "@/assets/lottie/hearttwo.json";
import LottieAnimation from "lottie-react";
import TweetComponent from "./TweetComponent";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toggleModal } from "@/store/slice/modalSlice";
interface IconWrapperProps {
  path: string;
  count: number;
  defaultColor: string;
  hoverColor: string;
  index: number;
  playAnimation: boolean;
  isLike: boolean;
  isLoading: boolean;
  likeHandler: () => void;
}

const MainCenterHeartIcon: FC<IconWrapperProps> = ({
  path,
  count,
  defaultColor,
  hoverColor,
  index,
  playAnimation,
  isLike,
  isLoading,
  likeHandler,
}) => {
  const [color, setColor] = useState(defaultColor);
  const hoverBgColors = [
    "rgba(29, 155, 240,0.1)",
    "rgba(0, 186, 124,0.1)",
    "rgba(249, 24, 128,0.1)",
    "rgba(29, 155, 240,0.1)",
    "rgba(29, 155, 240,0.1)",
  ];
  const iconElement =
    index === 2 ? (
      playAnimation ? (
        <LottieAnimation
          animationData={heartlottietwo}
          // play={isLike}
          loop={false}
          style={{
            position: "absolute",
            top: "-14px",
            width: "65px",
            height: "65px",
            border: "none",
          }}
        />
      ) : isLike ? (
        <Icon
          path={FillHeart}
          color={"rgb(249, 24, 128)"}
          height={18.75}
          width={18.75}
        />
      ) : (
        <Icon path={path} color={color} height={18.75} width={18.75} />
      )
    ) : (
      <Icon path={path} color={color} height={18.75} width={18.75} />
    );

  const modalChecked = useAppSelector((state) => state.modal.modalChecked);
  const dispatch = useAppDispatch();
  const onClickIconHandler = () => {
    dispatch(toggleModal());
  };
  return (
    <>
      <IconBox
        hoverBgColors={hoverBgColors[index]}
        onMouseEnter={() => setColor(hoverColor)}
        onMouseLeave={() => setColor(defaultColor)}
        onClick={
          index === 2 && !isLoading
            ? likeHandler
            : index === 0 && !isLoading
            ? onClickIconHandler
            : () => {}
        }
      >
        <div className="footer-item-icon">{iconElement}</div>
        {count !== 0 && <span>{count}</span>}
      </IconBox>
    </>
  );
};
export default MainCenterHeartIcon;
