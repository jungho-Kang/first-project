// styled
import { BtnBasic, ErrorP, InitMessageP, TextForm } from "../common";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

// yup
const schema = yup.object({
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

const ResetPw = ({ putPwEmail, setPutPwEmail }) => {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  // react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      upw: "",
      pwconfirm: "",
    },
  });

  const onSubmit = async data => {
    console.log("data---!!", data);
    console.log("putPwEmail---!!", putPwEmail);

    try {
      const res = await axios.patch("/api/user/upw", putPwEmail);
      console.log("서버 응답:", res);

      if (res.data) {
        console.log("비밀번호 수정");
        navigate("/auth");
      } else {
        alert("인증번호가 틀렸습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  useEffect(() => {
    setPutPwEmail({ ...putPwEmail, upw: pw });
  }, [pw]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>비밀번호 재설정</h3>
      <span>새로운 비밀번호를 등록해 주세요.</span>

      {/* 비밀번호 */}
      <TextForm>
        <label htmlFor="">
          <p>비밀번호</p>
          <input
            type="password"
            name="upw"
            {...register("upw")}
            value={pw}
            onChange={e => {
              setPw(e.target.value);
            }}
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
          <input type="password" name="pwconfirm" {...register("pwconfirm")} />
          {errors?.pwconfirm ? (
            <ErrorP>{errors.pwconfirm?.message}</ErrorP>
          ) : (
            <InitMessageP>비밀번호를 한 번 더 입력해주세요.</InitMessageP>
          )}
        </label>
      </TextForm>

      {/* 확인 */}
      <BtnBasic type="submit" style={{ marginTop: "20px" }}>
        확인
      </BtnBasic>
    </form>
  );
};

export default ResetPw;
