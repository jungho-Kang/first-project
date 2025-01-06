import { useState } from "react";
import { Link } from "react-router-dom";
// comp
import LayerLogo from "../../components/ui/logo/LayerLogo";
import FindPw from "../../components/auth/FindPw";
import ResetPw from "../../components/auth/ResetPw";
// styled
import { JoinDiv, LayerDiv, LoginDiv } from "../../components/common";

function FindPwPage() {
  const [showResetPw, setShowResetPw] = useState(false);
  const [putPwEmail, setPutPwEmail] = useState({
    email: "",
    upw: "",
  });

  return (
    <div>
      <LoginDiv>
        <LayerDiv>
          {/* 로고 */}
          <LayerLogo />
          {/* 비밀번호 찾기  & 비밀번호 변경*/}
          {!showResetPw ? (
            <FindPw
              setShowResetPw={setShowResetPw}
              putPwEmail={putPwEmail}
              setPutPwEmail={setPutPwEmail}
            />
          ) : (
            <ResetPw putPwEmail={putPwEmail} setPutPwEmail={setPutPwEmail} />
          )}
          {/* 로그인 링크 */}
          <JoinDiv>
            <Link to={"/auth"}>로그인화면 가기</Link>
          </JoinDiv>
        </LayerDiv>
      </LoginDiv>
    </div>
  );
}

export default FindPwPage;
