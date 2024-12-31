import { useState } from "react";

// comp
import Agreement from "../../components/auth/Agreement";
import SignupForm from "../../components/auth/SignupForm";

// styled
import { LoginDiv, WrapDiv } from "../../components/common";

function SignupPage() {
  const [isAgreementStep, setIsAgreementStep] = useState(true);

  return (
    <LoginDiv>
      <WrapDiv>
        {/* 동의서 */}
        {isAgreementStep && (
          <Agreement
            isAgreementStep={isAgreementStep}
            setIsAgreementStep={setIsAgreementStep}
          />
        )}
        {/* 회원가입 */}
        {!isAgreementStep && <SignupForm />}
      </WrapDiv>
    </LoginDiv>
  );
}

export default SignupPage;
