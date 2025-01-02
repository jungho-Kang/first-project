import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
// comp
import LayerLogo from "../ui/logo/LayerLogo";
// yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// styled
import { NameNickNameDiv, SignupDiv } from "../../pages/auth/login";
import {
  BtnBasic,
  ErrorP,
  InitMessageP,
  InputBtnArea,
  JoinDiv,
  TextForm,
} from "../common";
// icon
import { FaRegCircleCheck } from "react-icons/fa6";
import CodeCheck from "./CodeCheck";

const schema = yup.object({
  name: yup
    .string()
    .required("이름은 필수입니다.")
    .min(2, "이름은 최소 2자 이상이어야 합니다"),
  nickName: yup
    .string()
    .required("닉네임은 필수입니다.")
    .min(3, "닉네임은 최소 3자 이상이어야 합니다")
    .max(20, "닉네임은 최대 20자까지 입력할 수 있습니다"),
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
});

const SignupForm = () => {
  const [email, setEmail] = useState({ email: "" });
  const navigate = useNavigate();

  const [isCodeCorrect, setIsCodeCorrect] = useState(false); // 인증번호 일치 여부

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      nickname: "",
      email: "",
      upw: "",
      name: "",
    },
    // 나중에 onSubmit으로 전체 바꾸기
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // email에 객체로 담겨있나요?
  useEffect(() => {
    console.log("email 객체인가", email);
  }, [email]);
  const onSubmit = async data => {
    console.log("보내는데이터!!!", data);
    const { pwconfirm, ...submitData } = data;
    console.log("email의 정체는:", typeof email);
    submitData.email = email.email;
    console.log(submitData);

    console.log("보내는데이터--1", submitData);
    try {
      const res = await axios.post("/api/user/sign-up", submitData);
      console.log("회원가입 성공시 받아온 데이터 : ", res.data);
      if (res.data.resultData) {
        alert("회원가입이 완료되었습니다.");
        navigate("/auth");
      } else {
        alert("회원가입을 다시 시도해주세요.");
      }
    } catch (error) {
      console.log("회원가입 실패", error);
      alert("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  console.log("aaaaaaa", email);
  return (
    <SignupDiv>
      <LayerLogo />
      <h2>회원가입</h2>
      <div className="form">
        <CodeCheck email={email} setEmail={setEmail} />
        {/* ----------------------------------------------------------- */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <NameNickNameDiv>
            {/* 이름 */}
            <TextForm>
              <label htmlFor="">
                <p>Name</p>
                <input name="name" type="text" {...register("name")} />

                {errors?.name ? (
                  <ErrorP>{errors.name?.message}</ErrorP>
                ) : (
                  <InitMessageP>이름을 입력해주세요.</InitMessageP>
                )}
              </label>
            </TextForm>
            {/* 닉네임 */}
            <TextForm>
              <label htmlFor="">
                <p>NickName</p>
                <input name="nickName" type="text" {...register("nickName")} />

                {errors?.nickName ? (
                  <ErrorP>{errors.nickName?.message}</ErrorP>
                ) : (
                  <InitMessageP>3자 이상 닉네임을 입력해주세요.</InitMessageP>
                )}
              </label>
            </TextForm>
          </NameNickNameDiv>
          {/* 비밀번호 */}
          <TextForm>
            <label htmlFor="">
              <p>비밀번호</p>
              <input name="upw" type="password" {...register("upw")} />

              {errors?.upw ? (
                <ErrorP>{errors.upw?.message}</ErrorP>
              ) : (
                <InitMessageP>
                  영문, 숫자, 특수문자가 포함한 비밀번호를 입력해주세요.
                </InitMessageP>
              )}
            </label>
          </TextForm>

          {/* 비밀번호 확인 */}
          <TextForm>
            <label htmlFor="">
              <p>비밀번호 확인</p>
              <div className="pw">
                <input
                  name="pwconfirm"
                  type="password"
                  {...register("pwconfirm")}
                />
                <em
                  className="pwcheck"
                  style={{ color: isCodeCorrect ? "#17A1FA" : "#ddd" }}
                >
                  <FaRegCircleCheck />
                </em>
              </div>
              {errors?.pwconfirm ? (
                <ErrorP>{errors.pwconfirm?.message}</ErrorP>
              ) : (
                <InitMessageP>비밀번호를 한 번 더 입력해주세요.</InitMessageP>
              )}
            </label>
          </TextForm>

          {/* 확인 */}
          <BtnBasic type="submit">확인</BtnBasic>
        </form>

        <JoinDiv>
          <Link to={"/auth"}>로그인화면 이동</Link>
        </JoinDiv>
      </div>
    </SignupDiv>
  );
};
export default SignupForm;
