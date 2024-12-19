// import styled from "@emotion/styled";
// import LoginLayer from "../../components/layer/LoginLayer";
import {
  FindPwDiv,
  JoinDiv,
  LayerDiv,
  LoginDiv,
} from "../../components/common";
import BasicBtn from "../../components/button/BasicBtn";
import CustomInput from "../../components/input/CustomInput";
import { Link } from "react-router-dom";

import LayerLogo from "../../components/layer/LayerLogo";

function IndexPage() {
  return (
    <LoginDiv>
      <LayerDiv>
        {/* 로고 */}
        <LayerLogo />

        {/* input 태그 */}
        <CustomInput label={"Email"} type={"text"}></CustomInput>
        <CustomInput label={"Password"} type={"password"}></CustomInput>

        {/* 비밀번호찾기 - 링크 */}
        <FindPwDiv>
          <Link to={"/auth/findpw"}>비밀번호 찾기</Link>
        </FindPwDiv>

        {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
        <BasicBtn btnname={"로그인"}></BasicBtn>

        {/* 회원가입 링크 */}
        <JoinDiv>
          <span>아직 회원이 아니신가요?</span>
          <Link to={"/auth/signup"}>회원가입</Link>
        </JoinDiv>
      </LayerDiv>
    </LoginDiv>
  );
}

export default IndexPage;
