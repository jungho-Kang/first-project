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
import Popup from "../../../components/common/Popup";

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
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isCompletePopupOpen, setIsCompletePopupOpen] = useState(false);
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
    // API 호출 임시 주석 처리
    /*try {
      const res = await axios.delete(
        `/api/user?userId=${data.userId}&upw=${data.upw}`,
      );
      if (res.data.resultData) {*/

    setIsCompletePopupOpen(true);
    // navigate 제거 - 팝업의 확인 버튼에서 처리
    /*} else {
        alert("비밀번호가 틀렸습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }*/
  };

  const handleConfirmDelete = () => {
    setIsConfirmPopupOpen(false); // 확인 팝업 닫기
    fetchApi(); // 바로 실행되도록 수정
  };

  const onSubmit = () => {
    setIsConfirmPopupOpen(true);
  };

  return (
    <>
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

      {/* 탈퇴 확인 팝업 */}
      <Popup
        isOpen={isConfirmPopupOpen}
        onClose={() => setIsConfirmPopupOpen(false)}
        message="정말 탈퇴하시겠습니까?"
        onConfirm={handleConfirmDelete}
        type="confirm"
      />

      {/* 탈퇴 완료 팝업 */}
      <Popup
        isOpen={isCompletePopupOpen}
        onClose={() => {
          setIsCompletePopupOpen(false);
          handleClickLogout();
          navigate("/"); // 확인 버튼 클릭 시 네비게이션 실행
        }}
        message="탈퇴되었습니다."
        type="alert"
      />
    </>
  );
}

export default DeleteMemberPage;
