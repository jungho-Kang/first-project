import styled from "@emotion/styled";

//  --- wrap ---
export const WrapDiv = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

// --- 메인 페이지 ---
export const MainDiv = styled.main`
  margin-top: 68px;
`;

// --- 로그인 페이지 ---
export const LoginDiv = styled.div`
  background: url(/images/auth_bg.png) no-repeat center center / cover;
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
  background-color: #fff;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.12),
    0 7px 14px rgba(0, 0, 0, 0.12);

  h3 {
    margin: 10px 0 8px;
    font-size: 22px;
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
  margin: 24px 0 30px;
  display: flex;
  justify-content: center;
  span {
    font-size: 14px;
    color: #777;

    text-decoration: underline;
  }
  a {
    color: #5469d4;
    font-size: 14px;
    transform: translate(4px, 2px);
    font-weight: bold;
  }
`;
export const FindPwDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  font-size: 14px;
  margin-top: -21.5px;
`;
export const TitleDiv = styled.div`
  padding: 120px 0 80px;
  font-size: 38px;
  text-align: center;
  font-weight: 700;
  p {
    font-size: 18px;
    line-height: 1.5em;
    font-weight: 400;
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.65s);
  }
  b {
    position: relative;
    color: #73c971;
    display: inline-block;
    font-size: 52px;
    &::before {
      content: "";
      display: block;
      width: 23px;
      height: 23px;
      background: url(/images/icon/on_icon.svg) no-repeat center center /
        contain;
      position: absolute;
      top: -18px;
      left: 25px;
    }
  }
`;
export const LineDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

// CustomInput
export const TextForm = styled.div`
  padding: 6px 0;
  label {
    font-size: 15px;
    font-weight: 600;
  }
  input {
    width: 100%;
    margin-top: 8px;
    padding: 12px 10px;
    height: 42px;
    line-height: 42px;
    border-radius: 4px;
    border: 1px solid #dedede;
    outline: transparent;
  }
  /* 인증코드 */
  .pw {
    position: relative;
    input {
      padding-right: 50px;
    }

    .pwcheck {
      border-radius: 5px;
      color: #ddd;
      height: 26px;
      font-size: 24px;
      position: absolute;
      right: 10px;
      bottom: 7px;
    }
  }
`;

// CustomInputBtn
export const InputBtnArea = styled.div`
  padding: 6px 0;
  label {
    font-size: 15px;
    font-weight: 600;
  }
  > div {
    display: flex;
    align-items: end;
    gap: 10px;
    button {
      min-width: 85px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 5px;
      text-align: center;
      color: #fff;
      background-color: #5469d4;
      transition: all 0.3s;
      border: 1px solid transparent;
      padding: 0px 15px;
      height: 42px;
      line-height: 42px;
    }
  }
  input {
    flex-grow: 1;
    height: 42px;
    line-height: 42px;
    margin-top: 8px;
    padding: 10px 5px;
    border-radius: 4px;
    border: 1px solid #dedede;
    outline: transparent;
  }
`;

// BtnBasic
export const BtnBasic = styled.button`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  border-radius: 5px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #fff;
  background-color: #5469d4;
  transition: all 0.3s;
  border: 1px solid transparent;
  margin-top: 40px;
  :hover {
    opacity: 0.8;
  }
`;
// 체크박스
export const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;
  > * {
    cursor: pointer;
  }
  input {
    display: none;
  }
  em {
    display: inline-block;
    color: #ddd;
    transform: translateY(1.5px);
    margin-right: 8px;
  }
  input:checked + em {
    color: #ff0000;
  }
  b {
    color: #3450da;
    font-size: 14px;
  }
  span {
    font-weight: 600;
  }
`;

// 에러메세지
export const ErrorP = styled.p`
  display: block;
  margin-top: 5px;
  line-height: 1.3em;
  font-size: 12px;
  font-weight: 400;
  color: #ff0000;
`;
export const InitMessageP = styled.p`
  display: block;
  margin-top: 5px;
  line-height: 1.3em;
  font-weight: 400;
  color: #999;
  font-size: 12px;
`;
