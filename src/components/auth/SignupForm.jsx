import { useState } from "react";
import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import axios from "axios";
// comp
import LayerLogo from "../ui/logo/LayerLogo";
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

const SignupForm = ({ formData, handleChangeFormData, control, errors }) => {
  const [code, setCode] = useState(""); // 서버에서 발송된 인증번호
  const [inputCode, setInputCode] = useState(""); // 인증번호 입력 값
  const [inputEmail, setInputEmail] = useState("");
  const [sendMessage, setSendMessage] = useState(
    "가입시 등록한 이메일 주소를 입력해주세요.",
  );
  const [isCodeCorrect, setIsCodeCorrect] = useState(false); // 인증번호 일치 여부

  // 이메일 인증 요청 api 호출
  const handleSendCode = async email => {
    console.log("이메일 인증코드 요청", email);
    try {
      const res = await axios.post("/api/emailCheck", { email: email });
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

  return (
    <SignupDiv>
      <div className="signup-form">
        <LayerLogo />
        <h2>회원가입</h2>
        <div className="form">
          {/* 닉네임 */}
          <TextForm>
            <label htmlFor="">
              <p>NickName</p>
              <Controller
                name="nickName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    value={formData.nickName}
                    onChange={e => {
                      field.onChange(e);
                      handleChangeFormData(e);
                    }}
                  />
                )}
              />
              {errors?.nickName ? (
                <ErrorP>{errors.nickName?.message}</ErrorP>
              ) : (
                <InitMessageP>4자 이상 닉네임을 입력해주세요.</InitMessageP>
              )}
            </label>
          </TextForm>

          {/* 이메일 입력 */}
          <InputBtnArea>
            <label htmlFor="">Email</label>
            <div>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="email"
                    value={inputEmail}
                    {...field}
                    onChange={e => {
                      field.onChange(e);
                      setInputEmail(e.target.value);
                      handleChangeFormData(e);
                    }}
                  />
                )}
              />
              {/* <button type="button" onClick={handleSendCode}> */}
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

          {/* 인증코드 입력 */}
          <TextForm>
            <label htmlFor="">
              <p>인증번호</p>
              <div className="code">
                <Controller
                  name={"authCode"}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      value={formData.authCode}
                      {...field}
                      onChange={e => {
                        handleInputChange(e);
                        field.onChange(e);
                      }}
                    />
                  )}
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

          {/* 비밀번호 */}
          <TextForm>
            <label htmlFor="">
              <p>비밀번호</p>
              <Controller
                name="upw"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="password"
                    value={formData.upw}
                    {...field}
                    onChange={e => {
                      field.onChange(e);
                      handleChangeFormData(e);
                    }}
                  />
                )}
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
              <Controller
                name="pwconfirm"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="password"
                    value={formData.pwconfirm}
                    {...field}
                    onChange={e => {
                      field.onChange(e);
                    }}
                  />
                )}
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
          <JoinDiv>
            <Link to={"/auth"}>로그인화면 이동</Link>
          </JoinDiv>
        </div>
      </div>
    </SignupDiv>
  );
};
export default SignupForm;
