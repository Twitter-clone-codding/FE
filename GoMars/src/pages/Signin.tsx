import MainComponent from "@/components/ModalComponent";
import { Modal } from "@/utils";

const Signin = () => {
  return (
    <>
      <Modal element={<MainComponent />} height="650" width="600" />
    </>
  );
};
export default Signin;
