import axios from "axios";
import { useState } from "react";
// styled
import {
  BtnBasic,
  ErrorP,
  InitMessageP,
  InputBtnArea,
  TextForm,
} from "../common";

// import { postEmailCode } from "../../../fetch/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일 형식이 아닙니다."),

  authCode: yup.string().required("인증번호를 입력해주세요."),
});

const FindPw = ({ setShowResetPw, setPutPwEmail }) => {
  const [code, setCode] = useState(""); // 서버에서 발송된 인증번호
  const [inputCode, setInputCode] = useState(""); // 인증번호 입력 값
  const [btnDisabled, setBtnDisabled] = useState(true); // 확인버튼 비활성화
  const [sendMessage, setSendMessage] = useState(
    "가입시 등록한 이메일 주소를 입력해주세요.",
  ); // input 메세지 관리(이메일 버튼 인증)
  const [inputEmail, setInputEmail] = useState("");
  const [putData, setPutData] = useState({
    email: "",
    authCode: "",
  });

  console.log(putData);
  // 인증코드 == 인풋코드 맞는지 요청
  const handleCheckAuthCode = async data => {
    console.log("data-------", data);

    try {
      console.log(putData);
      const res = await axios.put(
        `/api/auth-check?email=${putData.email}&authCode=${putData.authCode}`,
      );

      console.log("서버 응답:", res);
      if (inputCode === code) {
        console.log("이메일 코드 인증 성공");
        setShowResetPw(true);
      } else {
        alert("인증번호가 틀렸습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  // 이메일 인증 요청 api 호출
  const handleSendCode = async email => {
    console.log("이메일 인증코드 요청", email);
    try {
      const res = await axios.post("/api/email-check", { email: email });
      setSendMessage("인증번호가 발송되었습니다.");
      setPutData({ ...putData, email: email });
      setPutPwEmail({ ...putPwEmail, email: email });
      console.log(res.data);
      setCode(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 버튼 활성화
  const handleInputChange = e => {
    console.log(e);
    setInputCode(e.target.value);
    setPutData({ ...putData, authCode: e.target.value });
    if (e.target.value === code) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      upw: "12345687!!GG",
      pwconfirm: "12345687!!GG",
    },
  });

  const onSubmit = async data => {
    console.log("data---!!", data);

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
              setInputEmail(e.target.value);
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
        type="button"
        disabled={inputCode !== code || btnDisabled}
        style={{
          marginTop: "20px",
          backgroundColor: btnDisabled ? "#d3d3d3" : "#5469D4",
        }}
        onClick={() => {
          handleCheckAuthCode(inputCode);
        }}
      >
        확인 인증
      </BtnBasic>
    </form>
  );
};

export default FindPw;
