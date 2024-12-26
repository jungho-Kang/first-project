import { useNavigate } from "react-router-dom";
import BasicBtn from "../../../components/button/BasicBtn";
import { ErrorP, InitMessageP, TextForm } from "../../../components/common";
import MypageTab from "../../../components/mypage/MypageTab";
import MypageTop from "../../../components/mypage/MypageTop";
import { BtnAreaDiv, FormDiv, FormInnerDiv, MyPageWrapDiv } from "./myinfo";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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

function UpdatePwPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <MypageTop />

      <MyPageWrapDiv>
        <MypageTab />
        <FormDiv>
          <FormInnerDiv>
            <h3>비밀번호 재설정</h3>
            {/* 기존 비밀번호 */}
            <TextForm>
              <label htmlFor="">
                <p>기존 비밀번호</p>
                <input type="password" name="upw" {...register("upw")} />
                {errors?.upw ? (
                  <ErrorP>{errors.upw?.message}</ErrorP>
                ) : (
                  <InitMessageP>현재 비밀번호를 입력해주세요.</InitMessageP>
                )}
              </label>
            </TextForm>
            {/* 새 비밀번호 */}
            <TextForm>
              <label htmlFor="">
                <p>새비밀번호</p>
                <input type="password" name="upw" {...register("upw")} />
                {errors?.upw ? (
                  <ErrorP>{errors.upw?.message}</ErrorP>
                ) : (
                  <InitMessageP>
                    새비밀번호를 영문, 숫자, 특수문자가 포함하여 입력해주세요.
                  </InitMessageP>
                )}
              </label>
            </TextForm>

            {/* 새 비밀번호 확인 */}
            <TextForm>
              <label htmlFor="">
                <p>새비밀번호 확인</p>
                <input
                  type="password"
                  name="pwconfirm"
                  {...register("pwconfirm")}
                />
                {errors?.pwconfirm ? (
                  <ErrorP>{errors.pwconfirm?.message}</ErrorP>
                ) : (
                  <InitMessageP>
                    새비밀번호를 한 번 더 입력해주세요.
                  </InitMessageP>
                )}
              </label>
            </TextForm>

            {/* 취소버튼 설정완료버튼 */}
            <BtnAreaDiv>
              <BasicBtn
                type="button"
                btnname={"취소"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#eee",
                  color: "#555",
                }}
                onClick={() => {
                  navigate("/myinfo");
                }}
              />
              <BasicBtn
                type="submit"
                btnname={"설정완료"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#5469d4",
                  color: "#fff",
                }}
                onClick={() => {
                  navigate("/myinfo");
                }}
                //   handleClickUpdatePw();
                // }}
              />
            </BtnAreaDiv>
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default UpdatePwPage;
