import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const LoginDiv = styled.div`
  background-color: #fff;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
`;
function Index() {
  return (
    <LoginDiv>
      <div className="layer">
        <Link to={"/"}>다녀올로고</Link>
        <p>다녀올 여행지 플랜너, 다녀ALL</p>

        <div className="text-form">
          <label htmlFor="">
            <p>Email</p>
            <input type="text" />
          </label>
        </div>
        <div className="text-form">
          <label htmlFor="">
            <p>Password</p>
            <input type="text" />
          </label>
        </div>

        <div className="user-state">
          <div className="auto-login">
            <input type="checkbox" name="" id="" />
            <em></em>
            자동로그인
          </div>
          <Link to={"/"}>비밀번호 찾기</Link>
        </div>
        <div className="btn-login">로그인</div>
        <div className="join">
          아직 회원이 아니신가요? <Link to={"/"}></Link>
        </div>
      </div>
    </LoginDiv>
  );
}

export default Index;
