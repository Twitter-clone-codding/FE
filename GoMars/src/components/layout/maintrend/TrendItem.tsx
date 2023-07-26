import { threedot } from "@/assets/svg";
import { Icon } from "@/utils";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useRedux";
import { inputSet } from "@/store/slice/inputSlice";
import { TrendItemContainer } from "@/styles/main/mainstyles";

interface TrendItemProps {
  hashTag: string;
  total: number;
}
const TrendItem: React.FC<TrendItemProps> = (props) => {
  const { hashTag, total } = props;
  const dispatch = useAppDispatch();
  const nevigate = useNavigate();
  const moveNavigateHandler = () => {
    dispatch(inputSet({ inputValue: hashTag }));
    nevigate("/explore");
  };
  return (
    <TrendItemContainer onClick={moveNavigateHandler}>
      <div className="wrapper">
        <div className="main">
          <div className="main-place">Trending in South Korea</div>
          <div className="main-info-name">{hashTag}</div>
          <div className="main-total-tweets">{total} Tweets</div>
        </div>
        <div className="icon-box">
          <Icon
            color="rgb(15, 20, 25)"
            height={18.75}
            width={18.75}
            path={threedot}
            isHover={true}
          />
        </div>
      </div>
    </TrendItemContainer>
  );
};

export default TrendItem;
