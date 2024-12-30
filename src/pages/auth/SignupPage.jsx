import { useState } from "react";
import axios from "axios";
// comp
import Agreement from "../../components/auth/Agreement";
import SignupForm from "../../components/auth/SignupForm";
// yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// styled
import { LoginDiv, WrapDiv } from "../../components/common";
import { useNavigate } from "react-router-dom";
// import { postLoginMember } from "../../../fetch/auth";

const schema = yup.object({
  nickName: yup
    .string()
    .required("닉네임은 필수입니다.")
    .min(3, "닉네임은 최소 3자 이상이어야 합니다")
    .max(20, "닉네임은 최대 20자까지 입력할 수 있습니다"),
  email: yup
    .string()
    .required("이메일은 필수입니다.")
    .email("올바른 이메일 형식이 아닙니다."),
  upw: yup
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
    .oneOf([yup.ref("upw")], "비밀번호가 일치하지 않습니다."),

  agreement: yup.boolean().oneOf([true], "이용약관에 동의해 주세요"),
  authCode: yup.string().required("인증번호를 입력해주세요."),
});

function SignupPage() {
  const [isAgreementStep, setIsAgreementStep] = useState(true);
  const navigate = useNavigate();

  const initData = {
    nickName: "",
    email: "",
    upw: "",
    agreement: false,
  };
  const [formData, setFormData] = useState(initData);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      nickname: "",
      email: "",
      upw: "",
      agreement: false,
    },
    // 나중에 onSubmit으로 전체 바꾸기
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    console.log(data);
    const { pwconfirm, authCode, ...submitData } = data;
    console.log("보내는데이터", submitData);
    try {
      // const result = await postLoginMember(data);
      const res = await axios.post("/api/user/sign-up", submitData);
      console.log("회원가입 성공시 받아온 데이터 : ", res.data);
      if (res.data.resultData) {
        alert("회원가입이 완료되었습니다.");
        navigate("/login");
      } else {
        alert("회원가입을 다시 시도해주세요.");
      }
    } catch (error) {
      console.log("회원가입 실패", error);
      alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleChangeFormData = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <LoginDiv>
      <form onSubmit={handleSubmit(onSubmit)}>
        <WrapDiv>
          {/* 동의서 */}
          {isAgreementStep && (
            <Agreement
              isAgreementStep={isAgreementStep}
              setIsAgreementStep={setIsAgreementStep}
              control={control}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {/* 회원가입 */}
          {!isAgreementStep && (
            <SignupForm
              formData={formData}
              handleChangeFormData={handleChangeFormData}
              handleSubmit={handleSubmit}
              control={control}
              errors={errors}
            />
          )}
        </WrapDiv>
      </form>
    </LoginDiv>
  );
}

export default SignupPage;
