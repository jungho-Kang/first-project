import { useContext, useState } from "react";
import { LoginContext } from "../../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// comp
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import BasicBtn from "../../../components/ui/button/BasicBtn";
// style
import { ErrorP, InitMessageP, TextForm } from "../../../components/common";
import {
  BtnAreaDiv,
  FormDiv,
  FormInnerDiv,
  MyPageWrapDiv,
  WarningBoxDiv,
} from "./myinfo";
// yup
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
  const [deletePw, setDeletePw] = useState("");
  const navigate = useNavigate();
  const { user, handleClickLogout } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const fetchApi = async data => {
    // console.log("탈퇴를 위해 보내는 데이터", data);
    try {
      const res = await axios.delete(
        `/api/user?userId=${data.userId}&upw=${data.upw}`,
      );
      // console.log(res.data);
      // setIsLogin(false);
      if (res.data.resultData) {
        handleClickLogout();
        alert("탈퇴되었습니다.");
        navigate("/");
      } else {
        alert("비밀번호가 틀렸습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const onSubmit = () => {
    const isConfirmed = confirm("정말 탈퇴하시겠습니까?");
    if (isConfirmed) {
      const payload = { userId: user.userId, upw: deletePw };
      // console.log(payload);
      fetchApi(payload);
    } else {
      console.log("탈퇴가 취소되었습니다.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MypageTop />

      <MyPageWrapDiv>
        <MypageTab />
        <FormDiv>
          <FormInnerDiv>
            <div className="tit-area">
              <h3>회원탈퇴</h3>
            </div>
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
                <input
                  type="password"
                  name="upw"
                  {...register("upw")}
                  value={deletePw.upw}
                  onChange={e => setDeletePw(e.target.value)}
                />
                {errors?.upw ? (
                  <ErrorP>{errors.upw?.message}</ErrorP>
                ) : (
                  <InitMessageP>현재 비밀번호를 입력해주세요.</InitMessageP>
                )}
              </label>
            </TextForm>

            <BtnAreaDiv>
              <BasicBtn
                type="button"
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
                type="submit"
                btnname={"회원탈퇴"}
                style={{
                  marginTop: "25px",
                  backgroundColor: "#FF5757",
                  color: "#fff",
                }}
              />
            </BtnAreaDiv>
          </FormInnerDiv>
        </FormDiv>
      </MyPageWrapDiv>
    </form>
  );
}

export default DeleteMemberPage;
