import { useState } from "react";
// comp
import { JoinDiv, LayerDiv, LoginDiv } from "../../components/common";
import LayerLogo from "../../components/ui/logo/LayerLogo";
// import FindPw from "../../components/auth/FindPw";
// import ResetPw from "../../components/auth/ResetPw";
// yup
import FindPw from "../../components/auth/FindPw";
import ResetPw from "../../components/auth/ResetPw";
import { Link } from "react-router-dom";

function FindPwPage() {
  console.log("리랜더링");
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
            <ResetPw putPwEmail={putPwEmail} />
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
