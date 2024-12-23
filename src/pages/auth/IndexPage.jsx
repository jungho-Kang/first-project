import {
  FindPwDiv,
  JoinDiv,
  LayerDiv,
  LoginDiv,
} from "../../components/common";
import BasicBtn from "../../components/button/BasicBtn";
import CustomInput from "../../components/input/CustomInput";
import { Link } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import LayerLogo from "../../components/layer/LayerLogo";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일 형식이 아닙니다."),
  pw: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .min(8, "비밀번호는 8자 이상입니다.")
    .max(16, "비밀번호는 16자까지 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "비밀번호는 영문, 숫자, 특수문자가 포함되어야 합니다.",
    ),
});
function IndexPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log("data", data);
    try {
      console.log("잘되는중");
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
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

          {/* input 태그 */}
          {/* email */}
          <CustomInput
            label={"Email"}
            type={"email"}
            name={"email"}
            register={register}
            errors={errors}
            initmessage={"이메일 주소에 '@'가 포함하여 입력해주세요."}
          ></CustomInput>
          {/* 비밀번호 */}
          <CustomInput
            label={"Password"}
            type={"password"}
            name={"pw"}
            register={register}
            errors={errors}
            initmessage={
              "영문, 숫자, 특수문자가 포함한 비밀번호를 입력해주세요."
            }
          ></CustomInput>

          {/* 비밀번호찾기 - 링크 */}
          <FindPwDiv>
            <Link to={"/auth/findpw"}>비밀번호 찾기</Link>
          </FindPwDiv>

          {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
          <BasicBtn btnname={"로그인"} type={"submit"}></BasicBtn>

          {/* 회원가입 링크 */}
          <JoinDiv>
            <span>아직 회원이 아니신가요?</span>
            <Link to={"/auth/signup"}>회원가입</Link>
          </JoinDiv>
        </LayerDiv>
      </LoginDiv>
    </form>
  );
}

export default IndexPage;
