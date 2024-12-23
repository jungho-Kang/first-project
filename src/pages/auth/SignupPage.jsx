import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import BasicBtn from "../../components/button/BasicBtn";
import { JoinDiv, WrapDiv } from "../../components/common";
import CustomCheck from "../../components/input/CustomCheck";
import CustomInput from "../../components/input/CustomInput";
import CustomInputBtn from "../../components/input/CustomInputBtn";
import LayerLogo from "../../components/layer/LayerLogo";

import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  nickname: yup
    .string()
    .required("닉네임은 필수입니다.")
    .min(3, "닉네임은 최소 3자 이상이어야 합니다")
    .max(20, "닉네임은 최대 20자까지 입력할 수 있습니다"),
  name: yup
    .string()
    .required("이름은 필수입니다.")
    .min(2, "이름은 최소 2자 이상입니다."),
  email: yup
    .string()
    .required("이메일은 필수입니다.")
    .email("올바른 이메일 형식이 아닙니다."),
  pw: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(8, "비밀번호는 8자 이상입니다.")
    .max(16, "비밀번호는 16자까지 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "비밀번호는 영문, 숫자, 특수문자가 포함되어야 합니다.",
    ),

  pwconfirm: yup
    .string()
    .required("비밀번호 확인을 입력해주세요")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),

  policy: yup.boolean().oneOf([true], "이용약관에 동의해 주세요"),
  emailassign: yup.string().required("인증번호를 입력해주세요"),
});

const AgreementDiv = styled.div`
  border: 1px solid #eee;
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 60px 100px 100px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;
const AgreementDocumentDiv = styled.div`
  border: 1px solid #dbdbdb;
  padding: 30px;
  line-height: 1.35em;
`;

function SignupPage() {
  const [agreeChecked, setAgreeChecked] = useState({
    agree01: false,
    agree02: false,
    agree03: false,
  });
  const [isAgreementStep, setIsAgreementStep] = useState(true);

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
  const isAllChecked =
    agreeChecked.agree01 && agreeChecked.agree02 && agreeChecked.agree03;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      nickname: "",
      name: "",
      email: "",
      pw: "",
      pwconfirm: "",
      // policy: false,
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = async data => {
    console.log(data);
    // try {
    //   if (result.data) {
    //     navigate("/login");
    //   } else {
    //     alert("회원가입을 다시 시도해주세요.");
    //   }
    // } catch (error) {
    //   console.log("회원가입 실패", error);
    // }
  };
  const handleNext = () => {
    if (isAllChecked) {
      setIsAgreementStep(false);
    } else {
      alert("모든항목에 동의해주세요.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WrapDiv>
        {/* 동의서 */}
        {isAgreementStep && (
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                nesciunt similique veritatis. Facilis non nihil aperiam
                reiciendis perferendis veritatis deserunt optio blanditiis.
                Nobis distinctio fuga consequuntur velit quasi. Magni, eaque.
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                nesciunt similique veritatis. Facilis non nihil aperiam
                reiciendis perferendis veritatis deserunt optio blanditiis.
                Nobis distinctio fuga consequuntur velit quasi. Magni, eaque.
              </span>
            </AgreementDocumentDiv>
            <CustomCheck
              text={"전체약관 동의를 모두 읽었으며, 위내용에 모두 동의합니다."}
              mt={"20px"}
              onChange={e => {
                handleAllAgree(e);
              }}
            />
            <BasicBtn
              type={"button"}
              btnname={"다음"}
              Bg={isAllChecked ? "#5469d4" : "#eee"}
              color={isAllChecked ? "#fff" : "#777"}
              onClick={() => {
                handleNext();
              }}
            />
          </AgreementDiv>
        )}
        {/* 회원가입 */}
        {!isAgreementStep && (
          <AgreementDiv style={{ padding: "30px 200px 100px" }}>
            <LayerLogo />
            <h2>회원가입</h2>
            <div className="form">
              <CustomInput
                label={"NickName"}
                type={"text"}
                name={"nickname"}
                register={register}
                errors={errors}
              />
              <CustomInput
                label={"Name"}
                type={"text"}
                name={"name"}
                errors={errors}
                register={register}
              />
              <CustomInputBtn
                label={"Email"}
                type={"email"}
                btntxt={"인증번호"}
                name={"email"}
                register={register}
                errors={errors}
              />
              <CustomInputBtn
                name={"emailassign"}
                label={"인증코드"}
                type={"text"}
                btntxt={"확인"}
                register={register}
                errors={errors}
              />
              <CustomInput
                label={"Password"}
                type={"password"}
                name={"pw"}
                register={register}
                errors={errors}
              />
              <CustomInput
                label={"Password 확인"}
                type={"password"}
                name={"pwconfirm"}
                register={register}
                errors={errors}
              />
              <BasicBtn btnname={"확인"} />
              <JoinDiv>
                <Link to={"/auth"}>로그인화면 이동</Link>
              </JoinDiv>
            </div>
          </AgreementDiv>
        )}
      </WrapDiv>
    </form>
  );
}

export default SignupPage;
