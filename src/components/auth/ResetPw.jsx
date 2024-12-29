import { Controller } from "react-hook-form";
// styled
import { BtnBasic, ErrorP, InitMessageP, TextForm } from "../common";

const ResetPw = ({ control, errors, handleSubmit }) => {
  // const onSubmit = data => {
  //   console.log("data", data);
  //   try {
  //     console.log("잘되는중");
  //     alert("로그인에 실패했습니다. 다시 시도해주세요.");
  //   } catch (error) {
  //     console.log(error);
  //     alert("서버 오류가 발생했습니다.");
  //   }
  // };
  return (
    <div>
      <h3>비밀번호 재설정</h3>
      <span>새로운 비밀번호를 등록해 주세요.</span>

      {/* 비밀번호 */}
      <TextForm>
        <label htmlFor="">
          <p>비밀번호</p>
          <Controller
            type="password"
            name="upw"
            control={control}
            defaultValue=""
            render={({ field }) => <input type="password" {...field} />}
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
            render={({ field }) => <input type="password" {...field} />}
          />
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
    </div>
  );
};

export default ResetPw;
