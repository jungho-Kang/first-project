import { Link } from "react-router-dom";
import { JoinDiv, LayerDiv, LoginDiv } from "../../components/common";
import LayerLogo from "../../components/layer/LayerLogo";

import FindPw from "../../components/auth/FindPw";

function FindPwPage() {
  return (
    <LoginDiv>
      <LayerDiv>
        {/* 로고 */}
        <LayerLogo />
        {/* 비밀번호 찾기 */}
        <FindPw></FindPw>

        <JoinDiv>
          <Link to={"/auth/signup"}>로그인화면 가기</Link>
        </JoinDiv>
      </LayerDiv>
    </LoginDiv>
  );
}

export default FindPwPage;
