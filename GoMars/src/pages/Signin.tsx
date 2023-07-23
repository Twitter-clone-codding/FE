import Signinform from "@/components/main/MainComponent";
import { Modal } from "@/utils";

const Signin = () => {
  return (
    <>
      <Modal element={<Signinform />} height="650" width="600" />
    </>
  );
};
export default Signin;
