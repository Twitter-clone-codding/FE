import { FormState } from "@/hooks/useInput";
import { useAppSelector } from "@/hooks/useRedux";
import {
  ButtonTitleStyleNextButton,
  NextStepButtonDiv,
  NextStepThirdButtonDiv,
  SignThirdContainer,
} from "@/styles/sign/signupStyles";
import { Button, DynamicInput } from "@/utils";

interface SignFirstProps {
  nextStep: () => void;
}

const SignThird: React.FC<SignFirstProps> = (props) => {
  const { nextStep } = props;
  const { formData } = useAppSelector((state) => state.form);
  const { selectData } = useAppSelector((state) => state.form);
  return (
    <SignThirdContainer>
      <div className="title">
        <h1>
          <span>계정을 생성하세요</span>
        </h1>
      </div>
      <DynamicInput value={formData.nickname} placeholder="이름" />
      <DynamicInput value={formData.email} placeholder="이메일" />
      <DynamicInput
        value={`${selectData.year}.${selectData.month}.${selectData.day}`}
        placeholder="생년월일"
      />
      <div className="information">
        <span>
          <span>가입하면 </span>
        </span>
        <a
          href="https://support.twitter.com/articles/20170514"
          rel="noopener noreferrer nofollow"
          target="_blank"
          role="link"
        >
          <span>
            <span>쿠키 사용</span>
          </span>
        </a>
        <span>
          <span>을 포함해 </span>
        </span>
        <a
          href="https://twitter.com/tos#new"
          rel="noopener noreferrer nofollow"
          target="_blank"
          role="link"
        >
          <span>
            <span>이용약관</span>
          </span>
        </a>
        <span>
          <span> 및 </span>
        </span>
        <a
          href="https://twitter.com/privacy"
          rel="noopener noreferrer nofollow"
          target="_blank"
          role="link"
        >
          <span>
            <span>개인정보 처리방침</span>
          </span>
        </a>
        <span>
          <span>
            에 동의하게 됩니다. 트위터는 계정을 안전하게 보호하고 광고를 포함한 맞춤 서비스를
            제공하는 등 트위터 개인정보 처리방침에 명시된 목적을 위해 이메일 주소 및 전화번호 등의
            내 연락처 정보를 사용할 수 있습니다.{" "}
          </span>
        </span>
        <a
          href="https://twitter.com/privacy"
          rel="noopener noreferrer nofollow"
          target="_blank"
          role="link"
        >
          <span>
            <span>자세히 알아보기</span>
          </span>
        </a>
        <span>
          <span>
            . 이메일 또는 전화번호를 제공하시면 다른 사람들이 이 정보로 내 계정을 찾을 수 있게
            됩니다. 해당 정보를 제공하지 않으시려면{" "}
          </span>
        </span>
        <span role="button">
          <span>
            <span>여기</span>
          </span>
        </span>
        <span>
          <span>에서 변경하세요. </span>
        </span>
      </div>
      <NextStepThirdButtonDiv>
        <Button
          backgroundColor="blue"
          color="white"
          hoverColor="hoverBlue"
          size="register"
          // onClick={nextStep}
          onClick={nextStep}
          title={
            <ButtonTitleStyleNextButton>
              <span>가입</span>
            </ButtonTitleStyleNextButton>
          }
        />
      </NextStepThirdButtonDiv>
    </SignThirdContainer>
  );
};
export default SignThird;
