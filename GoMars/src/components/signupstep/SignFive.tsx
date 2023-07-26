import { register } from "@/api/post";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { updateFormData } from "@/store/slice/formSlice";
import {
  SignfirstContainer,
  InputContainer,
  NextStepButtonDiv,
  ButtonTitleStyleNextButton,
} from "@/styles/sign/signupStyles";
import { DynamicInput, Button, Spinner } from "@/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignFive = () => {
  const formData = useAppSelector((state) => state.root.form.formData);
  const selectData = useAppSelector((state) => state.root.form.selectData);
  const dispatch = useAppDispatch();
  const [Lodoing, setLodoing] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { className, value } = event.target;
    dispatch(updateFormData({ ...formData, [className]: value }));
  };

  const navigate = useNavigate();
  const registerHandler = async () => {
    setLodoing(true);
    await register({
      birthday: `${selectData.year}-${selectData.month}-${selectData.day}`,
      email: formData.email,
      password: formData.password,
      nickname: formData.nickname,
      successKey: formData.successKey,
    })
      .then((res) => {
        alert(res.msg);
        navigate("/");
        // dispatch();
      })
      .catch((err) => alert(err.response.data.msg))
      .finally(() => setLodoing(false));
  };
  const SpinnerContent = Lodoing ? (
    <Spinner borderSize={3} color="#5585E8" size={18} spinColor="gray" />
  ) : (
    <span>가입</span>
  );
  return (
    <SignfirstContainer>
      <div className="title">
        <h1>
          <span>비밀번호를 입력하세요</span>
        </h1>
      </div>
      <InputContainer>
        <DynamicInput value={formData["email"]} placeholder="이메일" className={"email"} />
        <DynamicInput
          value={formData["password"]}
          handleInputChange={handleInputChange}
          placeholder="비밀번호"
          className={"password"}
        />
        <div className="change-input">
          <span>비밀번호 입력하세요</span>
        </div>
      </InputContainer>

      <NextStepButtonDiv>
        <Button
          backgroundColor="black"
          color="white"
          hoverColor="hoverBlack"
          size="register"
          // onClick={nextStep}
          onClick={registerHandler}
          title={<ButtonTitleStyleNextButton>{SpinnerContent}</ButtonTitleStyleNextButton>}
        />
      </NextStepButtonDiv>
    </SignfirstContainer>
  );
};
export default SignFive;
