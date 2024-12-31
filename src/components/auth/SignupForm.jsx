import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
// comp
import LayerLogo from "../ui/logo/LayerLogo";
// yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// styled
import { SignupDiv } from "../../pages/auth/login";
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
    .oneOf([yup.ref("upw")], "비밀번호가 일치하지 않습니다."),
});

const SignupForm = () => {
  const initData = {
    nickName: "",
    email: "",
    upw: "",
  };
  const [formData, setFormData] = useState(initData);
  const navigate = useNavigate();

  const [code, setCode] = useState(""); // 서버에서 발송된 인증번호
  const [inputCode, setInputCode] = useState(""); // 인증번호 입력 값

  const [inputEmail, setInputEmail] = useState("");
  const [sendMessage, setSendMessage] = useState(
    "가입시 등록한 이메일 주소를 입력해주세요.",
  );
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

  // 이메일 인증 요청 api 호출
  const handleSendCode = async email => {
    console.log("이메일 인증코드 요청", email);
    try {
      const res = await axios.post("/api/email-check", { email: email });
      setSendMessage("해당 이메일로 인증번호가 발송되었습니다.");
      console.log(res.data);
      setCode(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 인증버튼 체크확인
  const handleInputChange = e => {
    setInputCode(e.target.value);
    setIsCodeCorrect(e.target.value === code);
  };

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
    setInputEmail(e.target.value);
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <SignupDiv>
      <LayerLogo />
      <h2>회원가입</h2>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBtnArea>
            <label htmlFor="email">Email</label>
            <div>
              <input
                name="email"
                type="email"
                id="email"
                {...register("email")}
                onChange={e => {
                  handleChangeFormData(e);
                }}
              />

              <button
                type="button"
                onClick={() => {
                  handleSendCode(inputEmail);
                }}
              >
                인증번호
              </button>
            </div>
            {errors?.email ? (
              <ErrorP>{errors.email?.message}</ErrorP>
            ) : (
              <InitMessageP>{sendMessage}</InitMessageP>
            )}
          </InputBtnArea>

          <TextForm>
            <label htmlFor="">
              <p>인증번호</p>
              <div className="code">
                <input
                  name={"authCode"}
                  type="text"
                  value={formData.authCode}
                  {...register("authCode")}
                  onChange={e => {
                    handleInputChange(e);
                  }}
                />

                <em
                  className="codecheck"
                  style={{ color: isCodeCorrect ? "#17A1FA" : "#ddd" }}
                >
                  <FaRegCircleCheck />
                </em>
              </div>
              {errors?.authCode ? (
                <ErrorP>{errors.authCode?.message}</ErrorP>
              ) : (
                <InitMessageP>이메일로 받은 인증번호를 입력하세요</InitMessageP>
              )}
            </label>
          </TextForm>
        </form>
        {/* ----------------------------------------------------------- */}
        <form>
          {/* 닉네임 */}
          <TextForm>
            <label htmlFor="">
              <p>Name</p>
              <input
                name="Name"
                type="text"
                {...register("username")}
                // onChange={e => {
                //   handleChangeFormData(e);
                // }}
              />

              {errors?.nickName ? (
                <ErrorP>{errors.nickName?.message}</ErrorP>
              ) : (
                <InitMessageP>4자 이상 닉네임을 입력해주세요.</InitMessageP>
              )}
            </label>
          </TextForm>
          {/* 닉네임 */}
          <TextForm>
            <label htmlFor="">
              <p>NickName</p>
              <input
                name="nickName"
                type="text"
                {...register("nickName")}
                // onChange={e => {
                //   handleChangeFormData(e);
                // }}
              />

              {errors?.nickName ? (
                <ErrorP>{errors.nickName?.message}</ErrorP>
              ) : (
                <InitMessageP>4자 이상 닉네임을 입력해주세요.</InitMessageP>
              )}
            </label>
          </TextForm>

          {/* 비밀번호 */}
          <TextForm>
            <label htmlFor="">
              <p>비밀번호</p>
              <input
                name="upw"
                type="password"
                {...register("upw")}
                // value={formData.upw}
                // onChange={e => {
                //   handleChangeFormData(e);
                // }}
              />

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
              <input
                name="pwconfirm"
                type="password"
                value={formData.pwconfirm}
                // onChange={e => {}}
              />
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
