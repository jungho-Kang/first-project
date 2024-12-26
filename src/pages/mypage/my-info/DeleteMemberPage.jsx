import { useNavigate } from "react-router-dom";
import BasicBtn from "../../../components/button/BasicBtn";
import { ErrorP, InitMessageP, TextForm } from "../../../components/common";
import MypageTab from "../../../components/mypage/MypageTab";
import MypageTop from "../../../components/mypage/MypageTop";
import {
  BtnAreaDiv,
  FormDiv,
  FormInnerDiv,
  MyPageWrapDiv,
  WarningBoxDiv,
} from "./myinfo";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  upw: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(8, "비밀번호는 8자 이상입니다.")
    .max(16, "비밀번호는 16자 이하 입니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "비밀번호는 영문, 숫자, 특수문자가 포함되어야 합니다.",
    ),
});
function DeleteMemberPage() {
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
            <h3>회원탈퇴</h3>
            <WarningBoxDiv>
              <p>회원탈퇴 안내사항</p>
              <span>
                회원 정보 및 여행 일정 데이터 등 개인 서비스 이용 기록은 탈퇴
                즉시 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.
              </span>
            </WarningBoxDiv>
            {/* 비밀번호 */}
            <TextForm>
              <label htmlFor="">
                <p>비밀번호</p>
                <input type="password" name="upw" {...register("upw")} />
                {errors?.upw ? (
                  <ErrorP>{errors.upw?.message}</ErrorP>
                ) : (
                  <InitMessageP>현재 비밀번호를 입력해주세요.</InitMessageP>
                )}
              </label>
            </TextForm>

            <BtnAreaDiv>
              <BasicBtn
                btnname={"취소"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#EEE",
                  color: "#555",
                }}
                onClick={() => {
                  navigate("/myinfo");
                }}
              />
              <BasicBtn
                mt={"25px"}
                btnname={"회원탈퇴"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#FF5757",
                  color: "#fff",
                }}
                onClick={() => {
                  navigate("/myinfo/deletemember");
                }}
              />
            </BtnAreaDiv>
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default DeleteMemberPage;
