import { Link, useNavigate } from "react-router-dom";
import BasicBtn from "../../components/button/BasicBtn";
import {
  ErrorP,
  FindPwDiv,
  InitMessageP,
  JoinDiv,
  LayerDiv,
  LoginDiv,
  TextForm,
} from "../../components/common";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useContext, useState } from "react";
// import { postLoginMember } from "../../../apis/myauth";
import { postLoginMember } from "../../../fetch/auth";
import ConfirmPopup from "../../components/ConfirmPopup";
import LayerLogo from "../../components/layer/LayerLogo";
import { LoginContext } from "../../contexts/LoginContext";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("올바른 이메일 형식이 아닙니다."),
  upw: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .min(8, "비밀번호는 8자 이상입니다.")
    .max(16, "비밀번호는 16자까지 가능합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
      "비밀번호는 영문, 숫자, 특수문자가 포함되어야 합니다.",
    ),
});

function IndexPage() {
  // 팝업상태관리
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();
  const { handleClickLogin } = useContext(LoginContext);

  // 리엑트훅폼 설정
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "a@a.net",
      upw: "1234!!GG",
    },
  });

  const onSubmit = async data => {
    console.log("onSubmit 호출됨", data);

    try {
      // 목데이터 API 호출
      // const result = await axios.post("/api/user/signin", { ...data });

      const result = await postLoginMember(data);

      if (result.data) {
        // 서버에서 받아온 데이터 확인
        console.log("받아온 데이터:", result.data);
        console.log("로그인 성공");
        handleClickLogin(true);
        navigate("/");
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  // 팝업
  const handleClickPopup = () => {
    setIsPopup(true);
    console.log(isPopup);
  };
  const handleClickPopupClose = () => {
    setIsPopup(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginDiv>
          <LayerDiv>
            {/* 로고 */}
            <LayerLogo />

            {/* email */}
            <TextForm>
              <label htmlFor="">
                <p>Email</p>
                <input type="email" name={"email"} {...register("email")} />
                {errors?.email ? (
                  <ErrorP>{errors.email?.message}</ErrorP>
                ) : (
                  <InitMessageP>
                    `이메일 주소에 @가 포함하여 입력해주세요.`
                  </InitMessageP>
                )}
              </label>
            </TextForm>

            {/* 비밀번호 */}
            <TextForm>
              <label htmlFor="">
                <p>비밀번호</p>
                <input type="password" name="upw" {...register("upw")} />
                {errors?.upw ? (
                  <ErrorP>{errors.upw?.message}</ErrorP>
                ) : (
                  <InitMessageP>
                    영문, 숫자, 특수문자가 포함한 비밀번호를 입력해주세요.
                  </InitMessageP>
                )}
              </label>
            </TextForm>

            {/* 비밀번호찾기 - 링크 */}
            <FindPwDiv>
              <Link to={"/auth/findpw"}>비밀번호 찾기</Link>
            </FindPwDiv>

            {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
            <BasicBtn btnname={"로그인"} type={"submit"}></BasicBtn>

            {/* 회원가입 링크 */}
            <JoinDiv>
              <span>아직 회원이 아니신가요?</span>
              <Link to={"/auth/signup"}>회원가입</Link>
            </JoinDiv>
            {/* start 팝업버튼 사용시 버튼 */}
            <button
              type="button"
              onClick={() => {
                handleClickPopup();
              }}
            >
              이거
            </button>
            {/* //end 팝업버튼 사용시 버튼 */}
          </LayerDiv>
        </LoginDiv>
      </form>
      {/* start 팝업버튼 사용시 */}
      {isPopup && (
        <ConfirmPopup
          navi={"/"}
          onClose={() => {
            handleClickPopupClose();
          }}
        />
      )}
      {/* //end 팝업버튼 사용시 */}
    </>
  );
}

export default IndexPage;
