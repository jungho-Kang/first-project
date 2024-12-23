import BasicBtn from "../button/BasicBtn";
import CustomInputBtn from "../input/CustomInputBtn";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일 형식이 아닙니다."),
});
const FindPw = () => {
  const navigate = useNavigate();
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

  const onSubmit = data => {
    console.log("data", data);
    // try {
    //   console.log("잘되는중");
    //   alert("로그인에 실패했습니다. 다시 시도해주세요.");
    // } catch (error) {
    //   console.log(error);
    //   alert("서버 오류가 발생했습니다.");
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>비밀번호 찾기</h3>
      <span>가입시 등록한 이메일 주소로 인증번호를 발송해 드립니다.</span>

      {/* input btn 태그 */}
      <CustomInputBtn
        label={"Email"}
        type={"text"}
        name={"email"}
        btntxt={"인증"}
        register={register}
        errors={errors}
        initmessage={"가입시 등록한 이메일 주소를 입력해주세요."}
      />
      <CustomInputBtn
        label={"인증번호"}
        type={"text"}
        btntxt={"확인"}
        name={"emailcode"}
        register={register}
        errors={errors}
      />
      {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
      <BasicBtn
        btnname={"확인"}
        type="submit"
        mt={"30px"}
        onClick={() => {
          navigate("/auth/resetpw");
        }}
      ></BasicBtn>
    </form>
  );
};

export default FindPw;
