import { check } from "@/assets/svg";
import {
  ButtonTitleStyleNextButton,
  InformationDongeDiv,
  NextStepSecondButtonDiv,
  SignSecondContainer,
  SignSecondStyleProp,
} from "@/styles/sign/signupStyles";
import { Button, Icon } from "@/utils";
import { Dispatch } from "react";

interface SignSecondProps extends SignSecondStyleProp {
  nextStep: () => void;
  setToggle: Dispatch<React.SetStateAction<boolean>>;
}

const SignSecond: React.FC<SignSecondProps> = (props) => {
  const { toggle, nextStep, setToggle } = props;
  return (
    <SignSecondContainer toggle={toggle}>
      <div className="title">
        <h1>
          <span>트위터 환경을 맞춤 설정하세요</span>
        </h1>
      </div>
      <div className="content">
        <span>웹에서 트위터 콘텐츠가 표시되는 위치를 추적하세요</span>
      </div>
      <label className="information">
        <div className="information-content">
          <span>
            트위터는 이 데이터를 이용해 사용자 경험을 맞춤 설정합니다. 이 웹 브라우징 기록은 절대
            사용자 이름, 이메일 또는 전화번호와 함께 저장되지 않습니다.
          </span>
        </div>
        <div className="checkbox-div" onClick={() => setToggle((prev) => !prev)}>
          <label>
            <div className="check-container">
              <div className="hover-div">
                <div className="checkbox">
                  {toggle && <Icon path={check} height={16} width={16} color="white" />}
                </div>
              </div>
            </div>
          </label>
        </div>
      </label>
      <InformationDongeDiv dir="ltr">
        <span>
          <span>가입하면 트위터의 </span>
        </span>
        <a
          href="https://twitter.com/tos#new"
          rel="noopener noreferrer nofollow"
          target="_blank"
          role="link"
        >
          <span>
            <span>운영원칙</span>
          </span>
        </a>
        <span>
          <span>, </span>
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
          <span> 및 </span>
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
          <span>
            에 동의하게 됩니다. 트위터에서는 개인정보 처리방침에 명시된 목적에 따라 이메일 주소 및
            전화번호 등 내 연락처 정보를 사용할 수 있습니다.{" "}
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
      </InformationDongeDiv>
      <NextStepSecondButtonDiv>
        <Button
          backgroundColor="black"
          color="white"
          hoverColor="hoverBlack"
          size="register"
          // onClick={nextStep}
          onClick={nextStep}
          title={
            <ButtonTitleStyleNextButton>
              <span>다음</span>
            </ButtonTitleStyleNextButton>
          }
        />
      </NextStepSecondButtonDiv>
    </SignSecondContainer>
  );
};
export default SignSecond;
