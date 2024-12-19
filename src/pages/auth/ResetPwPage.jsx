import { Link } from "react-router-dom";
import ResetPw from "../../components/auth/ResetPw";
import { JoinDiv, LayerDiv, LoginDiv } from "../../components/common";
import LayerLogo from "../../components/layer/LayerLogo";

function ResetPwPage() {
  return (
    <LoginDiv>
      <LayerDiv>
        {/* 로고 */}
        <LayerLogo />

        {/* 비밀번호 재설정 */}
        <ResetPw></ResetPw>

        <JoinDiv>
          <Link to={"/auth/signup"}>로그인화면 가기</Link>
        </JoinDiv>
      </LayerDiv>
    </LoginDiv>
  );
}

export default ResetPwPage;
