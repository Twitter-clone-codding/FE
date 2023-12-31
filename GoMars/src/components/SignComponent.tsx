import { useLocation } from "react-router-dom";
import { Modalloginform } from "./sign";
import MainLoginForm from "./main/Loginform";
import ModalSignupform from "./sign/ModalSignupform";
import RegisterComponent from "./RegisterComponent";

interface SignProps {
  ismain?: boolean;
  nextStep: () => void;
}

const SignComponent: React.FC<SignProps> = (props) => {
  const { nextStep = () => {} } = props;
  const location = useLocation();
  const maincontent = <MainLoginForm />;
  const modalcontent = <Modalloginform nextStep={nextStep} />;
  const modalsignup = <RegisterComponent />;

  switch (location.pathname) {
    case "/login":
      return modalcontent;
    case "/signup":
      return modalsignup;
    case "/":
      return maincontent;
    default:
      return;
  }
};
export default SignComponent;
