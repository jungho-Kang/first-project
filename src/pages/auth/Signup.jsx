import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import {
  FindPwDiv,
  JoinDiv,
  LayerDiv,
  LoginDiv,
} from "../../components/common";
import Input from "../../components/input/Input";
import LayerLogo from "../../components/layer/LayerLogo";

function Signup() {
  return (
    <LoginDiv>
      <LayerDiv>
        {/* 로고 */}
        <LayerLogo />

        {/* input 태그 */}
        <Input label={"Email"} type={"text"}></Input>
        <Input label={"Password"} type={"password"}></Input>

        {/* 비밀번호찾기 - 링크 */}
        <FindPwDiv>
          <Link to={"/auth/findpw"}>비밀번호 찾기</Link>
        </FindPwDiv>

        {/* 로그인 버튼  홈화면 아니면 틀렸다는 창 띄우기*/}
        <Button btnname={"로그인"}></Button>

        {/* 회원가입 링크 */}
        <JoinDiv>
          <span>아직 회원이 아니신가요?</span>{" "}
          <Link to={"/auth/signup"}>회원가입</Link>
        </JoinDiv>
      </LayerDiv>
    </LoginDiv>
  );
}

export default Signup;
