import BasicBtn from "../button/BasicBtn";
import CustomInputBtn from "../input/CustomInputBtn";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  pw: yup
    .string()
    .required("비밀번호를 입력해주세요.")
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
const FindPw = () => {
  const handleClickUpdatePw = () => {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pw: "",
      pwconfirm: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <>
      <h3>비밀번호 찾기</h3>
      <span>가입시 등록한 이메일 주소로 인증번호를 발송해 드립니다.</span>

      {/* input btn 태그 */}
      <CustomInputBtn label={"Email"} type={"text"} btntxt={"인증"} />
      <CustomInputBtn label={"인증번호"} type={"text"} btntxt={"확인"} />
      {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
      <BasicBtn
        btnname={"확인"}
        onClick={() => {
          handleClickUpdatePw();
        }}
      ></BasicBtn>
    </>
  );
};

export default FindPw;
