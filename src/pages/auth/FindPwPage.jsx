import { Link } from "react-router-dom";
import { JoinDiv, LayerDiv, LoginDiv } from "../../components/common";
import LayerLogo from "../../components/layer/LayerLogo";
import FindPw from "../../components/auth/FindPw";
import ResetPw from "../../components/auth/ResetPw";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// yup
const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일 형식이 아닙니다."),

  authCode: yup.string().required("인증번호를 입력해주세요."),

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
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});

function FindPwPage() {
  const [showResetPw, setShowResetPw] = useState(false);

  // react-hook-form
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    // mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    console.log("data", data);

    try {
      const res = await axios.patch("/api/user", { data });
      console.log("서버 응답:", res);

      if (res.data) {
        console.log("비밀번호 수정");
      } else {
        alert("인증번호가 틀렸습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LoginDiv>
        <LayerDiv>
          {/* 로고 */}
          <LayerLogo />

          {/* 비밀번호 찾기  & 비밀번호 변경*/}
          {!showResetPw ? (
            <FindPw
              trigger={trigger}
              register={register}
              errors={errors}
              schema={schema}
              showResetPw={showResetPw}
              setShowResetPw={setShowResetPw}
            />
          ) : (
            <ResetPw></ResetPw>
          )}

          {/* 로그인 링크 */}
          <JoinDiv>
            <Link to={"/auth"}>로그인화면 가기</Link>
          </JoinDiv>
        </LayerDiv>
      </LoginDiv>
    </form>
  );
}

export default FindPwPage;
