import { HomeHeaderBottomLeft } from "@/styles/maincenter/maincenter";

interface HomeHeaderBottomProps {
  title: JSX.Element;
}

const HomeHeaderBottom: React.FC<HomeHeaderBottomProps> = (props) => {
  const { title } = props;
  return (
    <HomeHeaderBottomLeft>
      <div className="leftbutton-title">
        {title}
        <div className="bottom-color" />
      </div>
    </HomeHeaderBottomLeft>
  );
};

export default HomeHeaderBottom;
