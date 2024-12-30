import { useEffect, useState } from "react";
import { AgreementDiv, AgreementDocumentDiv } from "../../pages/auth/login";
import BasicBtn from "../button/BasicBtn";
import CustomCheck from "../input/CustomCheck";
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

      <CustomCheck
        label={"agree01"}
        text={"본인은 만 14세 이상입니다"}
        checked={agreeChecked.agree01}
        onChange={() => handleCheckboxChange("agree01")}
      />
      <CustomCheck
        label={"agree02"}
        text={"개인정보 수집에 동의합니다"}
        checked={agreeChecked.agree02}
        onChange={() => handleCheckboxChange("agree02")}
      />
      <AgreementDocumentDiv>
        <p>Lorem ipsum dolor sit amet.</p>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          similique veritatis. Facilis non nihil aperiam reiciendis perferendis
          veritatis deserunt optio blanditiis. Nobis distinctio fuga
          consequuntur velit quasi. Magni, eaque.
        </span>
      </AgreementDocumentDiv>
      <CustomCheck
        label={"agree03"}
        text={"이용약관에 동의합니다"}
        checked={agreeChecked.agree03}
        onChange={() => handleCheckboxChange("agree03")}
      />
      <AgreementDocumentDiv>
        <p>Lorem ipsum dolor sit amet.</p>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          similique veritatis. Facilis non nihil aperiam reiciendis perferendis
          veritatis deserunt optio blanditiis. Nobis distinctio fuga
          consequuntur velit quasi. Magni, eaque.
        </span>
      </AgreementDocumentDiv>
      <CustomCheck
        text={"전체약관 동의를 모두 읽었으며, 위내용에 모두 동의합니다."}
        checked={isAllChecked}
        mt={"20px"}
        onChange={e => {
          handleAllAgree(e);
        }}
      />
      <BasicBtn
        type={"button"}
        btnname={"다음"}
        style={{
          backgroundColor: isAllChecked ? "#5469d4" : "#eee",
          color: isAllChecked ? "#fff" : "#777",
        }}
        onClick={() => {
          handleNext();
        }}
      />
    </AgreementDiv>
  );
};
export default Agreement;
