import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { AgreementDiv, AgreementDocumentDiv } from "../../pages/auth/login";
import { BtnBasic, CheckBoxDiv } from "../common";
import LayerLogo from "../layer/LayerLogo";

const Agreement = ({ setIsAgreementStep }) => {
  const [agreeChecked, setAgreeChecked] = useState({
    agree01: false,
    agree02: false,
    agree03: false,
  });

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

  const handleCheckboxChange = label => {
    setAgreeChecked(prev => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNext = () => {
    if (isAllChecked) {
      setIsAgreementStep(false);
    } else {
      alert("모든항목에 동의해주세요.");
    }
  };

  const [isAllChecked, setIsAllChecked] = useState(false);
  useEffect(() => {
    if (agreeChecked.agree01 && agreeChecked.agree02 && agreeChecked.agree03) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [agreeChecked.agree01, agreeChecked.agree02, agreeChecked.agree03]);

  return (
    <AgreementDiv>
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
      <AgreementDocumentDiv>
        <p>Lorem ipsum dolor sit amet.</p>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          similique veritatis. Facilis non nihil aperiam reiciendis perferendis
          veritatis deserunt optio blanditiis. Nobis distinctio fuga
          consequuntur velit quasi. Magni, eaque.
        </span>
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
      <AgreementDocumentDiv>
        <p>Lorem ipsum dolor sit amet.</p>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          similique veritatis. Facilis non nihil aperiam reiciendis perferendis
          veritatis deserunt optio blanditiis. Nobis distinctio fuga
          consequuntur velit quasi. Magni, eaque.
        </span>
      </AgreementDocumentDiv>

      {/* 전체동의 체크박스 */}
      <CheckBoxDiv>
        <label htmlFor="agree04">
          <input
            type="checkbox"
            id="agree04"
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
            전체약관 동의를 모두 읽었으며, 위내용에 모두 동의합니다.{" "}
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
    </AgreementDiv>
  );
};
export default Agreement;
