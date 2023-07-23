import MainLoginForm from "./signin/LoginForm";
import Modalloginform from "./signin/Modalloginform";

interface SignProps {
  ismain?: boolean;
}

const SignComponent: React.FC<SignProps> = (props) => {
  const { ismain = true } = props;
  const maincontent = <MainLoginForm />;
  const modalcontent = <Modalloginform />;

  return ismain ? maincontent : modalcontent;
};
export default SignComponent;
