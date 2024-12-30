import BasicBtn from "../button/BasicBtn";
import CustomInputBtn from "../input/CustomInputBtn";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import CustomInput from "../input/CustomInput";
// import { sendEmailCode } from "../../../apis/auth";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일 형식이 아닙니다."),
  emailCode: yup.string().required("인증번호가 틀렸습니다. 다시 시도해주세요."),
});
// 1. 사용자가 이메일을 입력하고 인증번호 버튼을 누른다.
// 2. 이메일로 코드를 발송한다(버튼을 누르는 동시에 인증번호를 백엔드로부터 받아와??)
// 3. 사용자는 이메일로부터 받아온 코드를 인증번호 입력창에 입력
// 4. 백엔드에서 받은 이메일코드와 사용자가 작성한 코드가 맞는지 확인한다.
// 5. 인증번호가 일치한다면 확인버튼 활성화
// 6. 활성화된 확인버튼 누르면 비밀번호 변경할수 있는 페이지로 이동
// 7. 만약 아니라면 인증번호가 다르다고 띄우기

// ??? 해결 ???
// 1.처음에 유효성검사 에러메세지 띄우는 곳에 `가입시 등록한 이메일 주소를 입력하세요`(sendMessage)가 뜨도록한다.
// 2.인증버튼을 누르면 이메일 유효성검사 띄운다.??
// 3.유효성검사 통과시 성공시 `인증번호가 발송되었습니다.`(sendMessage)글씨 띄우기

const FindPw = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  // 이메일 인증 발송 상태관리
  const [codeSent, setCodeSent] = useState(false);
  // 서버에서 발송된 인증번호
  const [code, setCode] = useState("");
  // 인증번호 입력 값
  const [inputCode, setInputCode] = useState("");
  // 확인버튼 비활성화
  const [btnDisabled, setBtnDisabled] = useState(true);
  // input 메세지 관리(이메일 버튼 인증)
  const [sendMessage, setSendMessage] = useState(
    "가입시 등록한 이메일 주소를 입력해주세요.",
  );

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
    if (inputCode === code) {
      console.log("이메일 인증 성공");
      navigate("/auth/resetpw");
    } else {
      alert("인증번호가 틀렸습니다. 다시 시도해주세요.");
    }
  };

  // 이메일 인증 요청
  const handleSendCode = async email => {
    // const result = await sendEmailCode(email);

    // ------------test------------------------
    console.log("이메일 인증코드 요청", email);
    setSendMessage("인증번호가 발송되었습니다.");
    // const result = await axios.post("http://주소:5000/ecode", { email });
    // ----------------------------------------
    try {
      if (result.data && result.data.emailCode) {
        setCode(result.data.emailCode);
        setCodeSent(true);
        setBtnDisabled(false);
        setSendMessage("인증번호가 발송되었습니다.");
      } else {
        alert("인증번호 발송에 실패했습니다.");
      }
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  // 버튼 활성화
  const handleInputChange = e => {
    setInputCode(e.target.value);
    // -----------test---------------------
    setCode("1234");
    // ------------------------------------
    if (e.target.value === code) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>비밀번호 찾기</h3>
      <span>가입시 등록한 이메일 주소로 인증번호를 발송해 드립니다.</span>

      {/* 이메일 입력 */}
      <CustomInputBtn
        label={"Email"}
        type={"text"}
        name={"email"}
        btntxt={"인증"}
        register={register}
        errors={errors}
        initmessage={sendMessage}
        ref={emailRef}
        onClick={e => {
          e.preventDefault();
          handleSendCode(emailRef.current.value);
        }}
      />
      {/* 인증코드 입력 */}
      <CustomInput
        label={"인증번호"}
        type={"text"}
        name={"emailCode"}
        value={inputCode}
        onChange={e => {
          handleInputChange(e);
        }}
        register={register}
        errors={errors}
        initmessage={"인증번호를 입력해주세요."}
      />
      {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
      <BasicBtn
        btnname={"확인"}
        type="submit"
        disabled={inputCode !== code || btnDisabled}
        style={{
          marginTop: "30px",
          backgroundColor: btnDisabled ? "#d3d3d3" : "#5469D4",
        }}
      ></BasicBtn>
    </form>
  );
};

export default FindPw;
