import { useContext, useState } from "react";
import { ErrorP, InitMessageP, InputBtnArea } from "../common";
// yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { LoginContext } from "../../contexts/LoginContext";
import ConfirmPopup from "../popup/ConfirmPopup";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일은 필수입니다.")
    .email("올바른 이메일 형식이 아닙니다."),
  authCode: yup.string().required("인증번호를 입력해주세요."),
});

const CodeCheck = ({ email, setEmail }) => {
  const [code, setCode] = useState(""); // 서버에서 발송된 인증번호
  const [inputCode, setInputCode] = useState(""); // 인증번호 입력 값
  const [inputEmail, setInputEmail] = useState("");
  const [sendMessage, setSendMessage] = useState("이메일 주소를 입력해주세요."); // input 메세지 관리(이메일 버튼 인증)
  const [codeBtnDisable, setCodeBtnDisable] = useState(true); // 인증번호 버튼 비활성화
  const { setIsPopup, isPopup, handleClickPopupClose } =
    useContext(LoginContext);
  const [putData, setPutData] = useState({
    email: "",
    authCode: "",
  });

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      email: "",
      authCode: "",
    },
    // 나중에 onSubmit으로 전체 바꾸기
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // 상위페이지로 `이메일` 담아서 전달
  const handleChangeFormData = e => {
    const { name, value } = e.target;
    setInputEmail(e.target.value);
    setEmail({ ...email, [name]: value });
    // console.log(formData);
  };

  // 이메일 인증 요청 api 호출
  const handleSendCode = async email => {
    console.log("이메일 인증코드 요청", email);
    try {
      const res = await axios.post("/api/email-check", { email: email });
      console.log(res.data);
      setSendMessage("해당 이메일로 인증번호가 발송되었습니다.");
      setPutData({ ...putData, email: email });
      setCodeBtnDisable(false);
      setEmail({ email: email });
      setCode(res.data);
      console.log("PutData updated:", putData);
    } catch (error) {
      console.log("인증코드 발송 실패", error);
      setIsPopup(true);
      // alert("인증번호 발송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  //  이메일 인증코드 보내기
  const onSubmit = async data => {
    console.log("보내는데이터--->", data);
    console.log("보내는데이터--->", putData);

    try {
      console.log(putData);
      const res = await axios.put(
        `/api/auth-check?email=${data.email}&authCode=${data.authCode}`,
      );
      if (res.data) {
        console.log("코드 인증완료");
        setEmail({ email: data.email });
      } else {
        alert("인증번호가 틀렸습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  // 버튼 활성화
  const handleInputChange = e => {
    setInputCode(e.target.value);
    setPutData({ ...putData, authCode: e.target.value });
  };

  return (
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
          <button type="button" onClick={() => handleSendCode(inputEmail)}>
            인증번호 발송
          </button>
        </div>
        {errors?.email ? (
          <ErrorP>{errors.email?.message}</ErrorP>
        ) : (
          <InitMessageP>{sendMessage}</InitMessageP>
        )}
      </InputBtnArea>
      {/* 코드 인풋 */}
      <InputBtnArea>
        <label htmlFor="authcode">인증번호</label>
        <div>
          <input
            type="text"
            name={"authCode"}
            id="authCode"
            value={putData.authCode}
            {...register("authCode")}
            onChange={e => {
              handleInputChange(e);
            }}
          />
          {/* submit 버튼*/}
          <button
            type="submit"
            disabled={codeBtnDisable}
            style={{
              backgroundColor: codeBtnDisable ? "#d3d3d3" : "#5469D4",
            }}
          >
            인증번호 확인
          </button>
        </div>
        {errors?.authCode ? (
          <ErrorP>{errors.authCode?.message}</ErrorP>
        ) : (
          <InitMessageP>이메일로 받은 인증번호를 입력하세요</InitMessageP>
        )}
      </InputBtnArea>
      {isPopup && (
        <ConfirmPopup
          message="인증번호 발송에 실패했습니다. 이메일을 확인후 다시 시도해주세요."
          onClose={handleClickPopupClose}
          popupTit={"인증번호 발송실패"}
        />
      )}
    </form>
  );
};

export default CodeCheck;
