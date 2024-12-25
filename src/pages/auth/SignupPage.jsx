import { WrapDiv } from "../../components/common";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Agreement from "../../components/auth/Agreement";
import LoginForm from "../../components/auth/LoginForm";

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


function SignupPage() {
  const [isAgreementStep, setIsAgreementStep] = useState(true);


  const initData = {
    upw: "",
    nickName: "",
    name: "",
    email: "",
    agreement: false,

  };
  const [formData, setFormData] = useState(initData);


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

  const handleChangeFormData = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WrapDiv>
        {/* 동의서 */}
        {isAgreementStep && (

          <Agreement
            isAgreementStep={isAgreementStep}
            setIsAgreementStep={setIsAgreementStep}
          />

        )}
        {/* 회원가입 */}
        {!isAgreementStep && (
          <LoginForm
            formData={formData}
            handleChangeFormData={handleChangeFormData}
            register={register}
            errors={errors}
          />
        )}
      </WrapDiv>
    </form>
  );
}

export default SignupPage;
