import { useEffect, useState } from "react";
// comp
import LayerLogo from "../ui/logo/LayerLogo";
import AgreementDetail from "./AgreementDetail";
// styled
import { AgreementDocumentDiv, SignupDiv } from "../../pages/auth/login";
import { BtnBasic, CheckBoxDiv } from "../common";
// icon
import { FaCheck } from "react-icons/fa";

// 체크박스 상태 관리: 각 항목의 동의 여부를 저장
const Agreement = ({ setIsAgreementStep }) => {
  // 전체 동의 여부를 관리하는 상태
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState({
    agree01: false,
    agree02: false,
    agree03: false,
  });
  // 전체 동의 체크박스를 체크했을 때
  const handleAllAgree = e => {
    const { checked } = e.target;
    if (checked) {
      setAgreeChecked({
        agree01: true,
        agree02: true,
        agree03: true,
      });
    } else {
      setAgreeChecked({
        agree01: false,
        agree02: false,
        agree03: false,
      });
    }
  };
  // 각 체크박스 변경 > 해당 항목의 동의 여부 변경
  const handleCheckboxChange = label => {
    setAgreeChecked(prev => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // '다음' 버튼 클릭 > 모든 필수 항목에 동의한 경우  >다음 단계로 진행
  const handleNext = () => {
    if (isAllChecked) {
      setIsAgreementStep(false);
    } else {
      alert("모든항목에 동의해주세요.");
    }
  };

  useEffect(() => {
    if (agreeChecked.agree01 && agreeChecked.agree02 && agreeChecked.agree03) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [agreeChecked.agree01, agreeChecked.agree02, agreeChecked.agree03]);

  return (
    <SignupDiv>
      <LayerLogo />
      <h2>다녀올 회원약관동의</h2>
      {/* 체크박스 1 */}
      <CheckBoxDiv>
        <label htmlFor="agree01">
          <input
            type="checkbox"
            id="agree01"
            checked={agreeChecked.agree01}
            onChange={() => handleCheckboxChange("agree01")}
          />
          <em>
            <FaCheck />
          </em>
          <span>
            본인은 만 14세 이상입니다 <b>(필수)</b>
          </span>
        </label>
      </CheckBoxDiv>

      {/* 체크박스 2 */}
      <CheckBoxDiv>
        <label htmlFor="agree02">
          <input
            type="checkbox"
            id="agree02"
            checked={agreeChecked.agree02}
            onChange={() => handleCheckboxChange("agree02")}
          />
          <em>
            <FaCheck />
          </em>
          <span>
            개인정보 수집에 동의합니다 <b>(필수)</b>
          </span>
        </label>
      </CheckBoxDiv>
      <AgreementDocumentDiv style={{ height: 150 }}>
        <p className="item">
          <b>목적</b>
          <em>개인식별, 회원자격 유지·관리</em>
        </p>
        <p className="item">
          <b>항목</b>
          <em>이름,이메일,닉네임,비밀번호</em>
        </p>
        <p className="item">
          <b>보유기간</b>
          <em>회원탈퇴시 즉시 파기</em>
        </p>
      </AgreementDocumentDiv>

      {/* 체크박스 3 */}
      <CheckBoxDiv>
        <label htmlFor="agree03">
          <input
            type="checkbox"
            id="agree03"
            checked={agreeChecked.agree03}
            onChange={() => handleCheckboxChange("agree03")}
          />
          <em>
            <FaCheck />
          </em>
          <span>
            이용약관에 동의합니다 <b>(필수)</b>
          </span>
        </label>
      </CheckBoxDiv>
      <AgreementDetail />

      {/* 전체동의 체크박스 */}
      <CheckBoxDiv>
        <label htmlFor="agree04">
          <input
            id="agree04"
            type="checkbox"
            name="agreement"
            checked={isAllChecked}
            onChange={e => {
              handleAllAgree(e);
            }}
            style={{ marginTop: "20px" }}
          />
          <em>
            <FaCheck />
          </em>
          <span>
            전체약관 동의를 모두 읽었으며, 위내용에 모두 동의합니다.
            <b>(필수)</b>
          </span>
        </label>
      </CheckBoxDiv>

      {/* 회원가입폼으로 이동 버튼 */}
      <BtnBasic
        type={"button"}
        style={{
          backgroundColor: isAllChecked ? "#5469d4" : "#eee",
          color: isAllChecked ? "#fff" : "#777",
        }}
        onClick={() => {
          handleNext();
        }}
      >
        다음
      </BtnBasic>
    </SignupDiv>
  );
};
export default Agreement;
