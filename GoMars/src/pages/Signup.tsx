import MainComponent from "@/components/ModalComponent";
import RegisterComponent from "@/components/RegisterComponent";
import { Modal } from "@/utils";

const Signup = () => {
  return <Modal element={<RegisterComponent />} height="650" width="600" />;
};
export default Signup;
