import styled from "@emotion/styled";

export const WrapDiv = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

export const MainDiv = styled.main`
  /* padding: 80px 0px 160px; */
`;

// 로그인 페이지
export const LoginDiv = styled.div`
  background-color: #fff;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LayerDiv = styled.div`
  max-width: 460px;
  width: 100%;
  min-height: 500px;
  padding: 40px 50px;
  border-radius: 12px;
  border: 1px solid #eee;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.12),
    0 7px 14px rgba(0, 0, 0, 0.12);

  .logo {
    display: flex;
    justify-content: center;
    a {
      display: block;
      width: 140px;
      height: 40px;
      line-height: 40px;
      background-color: #eee;
      text-align: center;
    }
  }

  > p {
    text-align: center;
    padding: 10px 0 40px;
    color: #777;
  }
`;

export const JoinDiv = styled.div`
  text-align: center;
  margin: 30px 0;
  font-size: 14px;
  span {
    color: #777;
    text-decoration: underline;
  }
  a {
    font-weight: bold;
    color: #5469d4;
  }
`;
export const FindPwDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin-bottom: 50px;
  font-size: 14px;
  color: #999;
`;
