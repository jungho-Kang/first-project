import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../../contexts/LoginContext";
// comp
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import BasicBtn from "../../../components/ui/button/BasicBtn";
import Popup from "../../../components/common/Popup";
// styled
import { ErrorP, InitMessageP, TextForm } from "../../../components/common";
import { BtnAreaDiv, FormDiv, FormInnerDiv, MyPageWrapDiv } from "./myinfo";
// yup
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
  newUpw: yup
    .string()
    .required("비밀번호는 필수입니다.")
    .min(8, "비밀번호는 8자 이상입니다.")
    .max(16, "비밀번호는 16자까지 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "비밀번호는 영문, 숫자, 특수문자가 포함되어야 합니다.",
    ),

  newpwconfirm: yup
    .string()
    .required("비밀번호 확인을 입력해주세요")
    .oneOf([yup.ref("newUpw")], "비밀번호가 일치하지 않습니다."),
});

function UpdatePwPage() {
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    data.userId = user.userId;

    try {
      const res = await axios.patch("/api/user/password", data);
      if (res.data.resultData) {
        setIsPopupOpen(true);
      } else {
        alert("비밀번호 수정에 실패하였습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("비밀번호 수정중 문제가 발생하였습니다. 잠시후 다시 시도해주세요.");
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    navigate("/myinfo");
  };

  return (
    <>
      <div>
        <MypageTop />

        <MyPageWrapDiv>
          <MypageTab />
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormDiv>
              <FormInnerDiv>
                <div className="tit-area">
                  <h3>비밀번호 재설정</h3>
                </div>
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
                    <input
                      type="password"
                      name="newUpw"
                      {...register("newUpw")}
                    />
                    {errors?.newUpw ? (
                      <ErrorP>{errors.newUpw?.message}</ErrorP>
                    ) : (
                      <InitMessageP>
                        새비밀번호를 영문, 숫자, 특수문자가 포함하여
                        입력해주세요.
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
                      name="newpwconfirm"
                      {...register("newpwconfirm")}
                    />
                    {errors?.newpwconfirm ? (
                      <ErrorP>{errors.newpwconfirm?.message}</ErrorP>
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
                  />
                </BtnAreaDiv>
              </FormInnerDiv>
            </FormDiv>
          </form>
        </MyPageWrapDiv>
      </div>

      {/* 비밀번호 수정 완료 팝업 */}
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        message="새로운 비밀번호가 설정되었습니다."
        type="alert"
      />
    </>
  );
}

export default UpdatePwPage;
