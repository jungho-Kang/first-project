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

  h3 {
    margin: 10px 0;
    font-size: 20px;
    font-weight: 600;
  }
  span {
    color: #777;
    font-size: 14px;
    margin: 0 0 10px;
    display: block;
    line-height: 1.4em;
    word-break: keep-all;
  }
`;

export const JoinDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  font-size: 14px;

  span {
    color: #777;
    text-decoration: underline;
  }
  a {
    font-weight: bold;
    color: #5469d4;
    transform: translate(4px, 2px);
  }
`;
export const FindPwDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  font-size: 14px;
  color: #999;
`;
export const TitleDiv = styled.div`
  margin-top: 60px;
  font-size: 38px;
  margin-bottom: 60px;
  text-align: center;
  font-weight: 700;
`;

export const LineDiv = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;
