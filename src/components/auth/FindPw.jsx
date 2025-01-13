import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// styled
import {
  BtnBasic,
  ErrorP,
  InitMessageP,
  InputBtnArea,
  TextForm,
} from "../common";
// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// schema
const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일 형식이 아닙니다."),

  authCode: yup.string().required("인증번호를 입력해주세요."),
});

const FindPw = ({ setShowResetPw, setPutPwEmail, putPwEmail }) => {
  const [code, setCode] = useState(""); // 서버에서 발송된 인증번호
  const [inputCode, setInputCode] = useState(""); // 인증번호 입력 값
  const [sendMessage, setSendMessage] = useState(
    "가입시 등록한 이메일 주소를 입력해주세요.",
  ); // input 메세지 관리(이메일 버튼 인증)
  const [inputEmail, setInputEmail] = useState("");
  const [putData, setPutData] = useState({
    email: "",
    authCode: "",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      authCode: "",
    },
  });

  // 이메일 인증 요청 api 호출
  const handleSendCode = async email => {
    // console.log("이메일 인증코드 요청", email);
    try {
      const res = await axios.post("/api/email-check", { email: email });
      // console.log(res.data);
      alert("해당 이메일로 인증번호가 발송되었습니다.");
      setSendMessage("해당 이메일로 인증번호가 발송되었습니다.");
      setPutData({ ...putData, email: email });
      setPutPwEmail({ ...putPwEmail, email: email });
      setCode(res.data);
      // console.log("PutData updated:", putData);
    } catch (error) {
      console.log("인증코드 발송 실패", error);
      alert("인증번호 발송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  // 이메일,코드 보내기
  const onSubmit = async data => {
    // console.log("제출된 데이터", data);
    try {
      console.log(putData);
      const res = await axios.put(
        `/api/auth-check?email=${putData.email}&authCode=${putData.authCode}`,
      );
      if (res.data.resultData) {
        // console.log("코드 인증:", res.data.resultMessage);
        setShowResetPw(true);
      } else {
        // console.log("코드 인증:", res.data.resultMessage);
        alert("코드인증에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다. 잠시후 다시 시도해주세요.");
    }
  };

  const handleEmailChange = e => {
    setInputEmail(e.target.value);
  };

  // 버튼 활성화
  const handleInputChange = e => {
    setInputCode(e.target.value);
    setPutData({ ...putData, authCode: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>비밀번호 찾기</h3>
      <span>가입시 등록한 이메일 주소로 인증번호를 발송해 드립니다.</span>

      {/* 이메일 입력 */}
      <InputBtnArea>
        <label htmlFor="email">Email</label>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email")}
            onChange={e => {
              handleEmailChange(e);
            }}
            value={inputEmail}
          />
          <button type="button" onClick={() => handleSendCode(inputEmail)}>
            인증코드
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
        <label htmlFor="authcode">
          <p>인증번호</p>
          <input
            type="text"
            id="authcode"
            name="authCode"
            {...register("authCode")}
            value={inputCode}
            onChange={e => {
              handleInputChange(e);
            }}
          />

          {errors?.authCode ? (
            <ErrorP>{errors.authCode?.message}</ErrorP>
          ) : (
            <InitMessageP>인증번호를 입력해주세요.</InitMessageP>
          )}
        </label>
      </TextForm>

      {/* 확인버튼*/}
      <BtnBasic
        type="submit"
        disabled={inputCode !== code}
        style={{
          marginTop: "20px",
          backgroundColor:
            inputCode === "" || inputCode !== code ? "#d3d3d3" : "#5469D4",
        }}
      >
        확인 인증
      </BtnBasic>
    </form>
  );
};

export default FindPw;
