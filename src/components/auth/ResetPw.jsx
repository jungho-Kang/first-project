import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../button/BasicBtn";
import CustomInputBtn from "../input/CustomInput";
import { useForm } from "react-hook-form";

const schema = yup.object({
  pw: yup
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
    .oneOf([yup.ref("pw")], "비밀번호가 일치하지 않습니다."),
});

const ResetPw = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const handleClickUpdatePw = () => {};

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
      <h3>비밀번호 재설정</h3>
      <span>새로운 비밀번호를 등록해 주세요.</span>
      {/* input btn 태그 */}
      <CustomInputBtn
        label={"비밀번호"}
        type={"password"}
        register={register}
        errors={errors}
        name={"pw"}
        initmessage={"영문, 숫자, 특수문자가 포함한 비밀번호를 입력해주세요."}
      />
      <CustomInputBtn
        label={"비밀번호 확인"}
        type={"password"}
        register={register}
        errors={errors}
        name={"pwconfirm"}
        initmessage={"비밀번호를 한 번 더 입력해주세요."}
      />
      {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
      <Button
        btnname={"확인"}
        mt={"30px"}
        onClick={() => {
          handleClickUpdatePw();
        }}
      ></Button>
    </form>
  );
};

export default ResetPw;
