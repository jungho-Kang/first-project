import { Link } from "react-router-dom";
import { AgreementDiv } from "../../pages/auth/login";
import {
  BtnBasic,
  ErrorP,
  InitMessageP,
  InputBtnArea,
  JoinDiv,
  TextForm,
} from "../common";
import LayerLogo from "../layer/LayerLogo";

const SignupForm = ({ formData, handleChangeFormData, register, errors }) => {
  return (
    <AgreementDiv style={{ padding: "30px 200px 100px" }}>
      <LayerLogo />
      <h2>회원가입</h2>
      <div className="form">
        {/* 닉네임 */}
        <TextForm>
          <label htmlFor="">
            <p>NickName</p>
            <input
              type="text"
              name="nickName"
              {...register("nickName")}
              value={formData.nickName}
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
            <input
              type="text"
              name="name"
              {...register("name")}
              value={formData.name}
              onChange={e => {
                handleChangeFormData(e);
              }}
            />
            {errors?.name ? (
              <ErrorP>{errors.name?.message}</ErrorP>
            ) : (
              <InitMessageP>이름을 입력해주세요.</InitMessageP>
            )}
          </label>
        </TextForm>

        {/* 이메일 입력 */}
        <InputBtnArea>
          <label htmlFor="">Email</label>
          <div>
            <input
              type="email"
              name="email"
              {...register("email")}
              value={formData.email}
              onChange={e => {
                handleChangeFormData(e);
              }}
            />
            {/* <button type="button" onClick={handleSendCode}> */}
            <button type="button">인증번호</button>
          </div>
          {errors?.email ? (
            <ErrorP>{errors.email?.message}</ErrorP>
          ) : (
            // <InitMessageP>{sendMessage}</InitMessageP>
            <InitMessageP>이메일 작성해주세요</InitMessageP>
          )}
        </InputBtnArea>

        {/* 인증코드 입력 */}
        <TextForm>
          <label htmlFor="">
            <p>인증번호</p>
            <input
              type="text"
              name={"authCode"}
              {...register("authCode")}
              // value={inputCode}
              // onChange={e => {
              //   handleInputChange(e);
              // }}
            />
            {errors?.authCode ? (
              <ErrorP>{errors.authCode?.message}</ErrorP>
            ) : (
              <InitMessageP>인증번호를 입력해주세요.</InitMessageP>
            )}
          </label>
        </TextForm>

        {/* 비밀번호 */}
        <TextForm>
          <label htmlFor="">
            <p>비밀번호</p>
            <input
              type="password"
              name="upw"
              {...register("upw")}
              value={formData.upw}
              onChange={e => {
                handleChangeFormData(e);
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
            <input
              type="password"
              name="pwconfirm"
              {...register("pwconfirm")}
            />
            {errors?.pwconfirm ? (
              <ErrorP>{errors.pwconfirm?.message}</ErrorP>
            ) : (
              <InitMessageP>비밀번호를 한 번 더 입력해주세요.</InitMessageP>
            )}
          </label>
        </TextForm>

        {/* 확인 */}
        <BtnBasic
          type="submit"
          // onClick={() => {
          //   handleClickUpdatePw();
          // }}
        >
          확인
        </BtnBasic>
        <JoinDiv>
          <Link to={"/auth"}>로그인화면 이동</Link>
        </JoinDiv>
      </div>
    </AgreementDiv>
  );
};
export default SignupForm;
