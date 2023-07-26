import { register, verifyEmail } from "@/api/post";
import useInput from "@/hooks/useInput";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateFormData } from "@/store/slice/formSlice";
import {
  ButtonTitleStyleNextButton,
  NextStepFourthButtonDiv,
  NextStepThirdButtonDiv,
  SignFourthContainer,
} from "@/styles/sign/signupStyles";
import { Button, DynamicInput, Spinner } from "@/utils";
import { FC, useState } from "react";
interface SignFirstProps {
  nextStep: () => void;
}

const SignFourth: FC<SignFirstProps> = (props) => {
  const { nextStep } = props;
  const { formData } = useAppSelector((state) => state.root.form);
  const [Loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const emailverifyHandelr = async () => {
    setLoading(true);
    await verifyEmail({ email: formData.email, successKey: formData.successKey })
      .then((res) => {
        console.log(res.result);
        nextStep();
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const SpinnerContent = Loading ? (
    <Spinner borderSize={3} color="#5585E8" size={18} spinColor="gray" />
  ) : (
    <span>다음</span>
  );
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { className, value } = event.target;
    dispatch(updateFormData({ ...formData, [className]: value }));
  };
  return (
    <SignFourthContainer>
      <div className="title">
        <h1>
          <span>코드를 보내 드렸습니다</span>
        </h1>
        <div className="subtitle">
          <span>{formData.email}</span>
          <span> 인증을 위해 아래에 입력하세요.</span>
        </div>
      </div>
      <DynamicInput
        placeholder="인증 코드"
        value={formData.successKey}
        handleInputChange={handleInputChange}
        className="successKey"
      />
      <div className="email-question">
        <div>
          <span>이메일을 받지 못하셨나요?</span>
        </div>
      </div>
      <NextStepFourthButtonDiv>
        <Button
          backgroundColor="black"
          color="white"
          hoverColor="hoverBlack"
          size="register"
          onClick={emailverifyHandelr}
          title={<ButtonTitleStyleNextButton>{SpinnerContent}</ButtonTitleStyleNextButton>}
        />
      </NextStepFourthButtonDiv>
    </SignFourthContainer>
  );
};
export default SignFourth;
