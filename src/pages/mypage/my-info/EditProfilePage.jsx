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
  nickName: yup
    .string()
    .required("닉네임은 필수입니다.")
    .min(3, "닉네임은 최소 3자 이상이어야 합니다")
    .max(20, "닉네임은 최대 20자까지 입력할 수 있습니다"),
});
function EditProfilePage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      nickname: "",
    },
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
            <h3>프로필 수정</h3>

            {/* 닉네임 */}
            <TextForm>
              <label htmlFor="">
                <p>NickName</p>
                <input
                  type="text"
                  name="nickName"
                  {...register("nickName")}
                  value={"크롱52"}
                  // value={formData.nickName}
                  onChange={e => {
                    handleChangeFormData(e);
                  }}
                />
                {errors?.nickName ? (
                  <ErrorP>{errors.nickName?.message}</ErrorP>
                ) : (
                  <InitMessageP>4자 이상 닉네임을 입력해주세요.</InitMessageP>
                )}
              </label>
            </TextForm>

            {/* 이름 */}
            <TextForm>
              <label htmlFor="">
                <p>Name</p>
                <input type="text" name="name" value={"홍길동"} readOnly />
              </label>
            </TextForm>
            {/* 이메일 */}
            <TextForm>
              <label htmlFor="">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  value={"aa@gmail.com"}
                  readOnly
                />
              </label>
            </TextForm>

            <BtnAreaDiv>
              <BasicBtn
                btnname={"뒤로가기"}
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
            <BasicBtn
              btnname={"저장"}
              style={{ marginTop: "25px" }}
              onClick={() => {
                navigate("/myinfo");
              }}
            />
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default EditProfilePage;
