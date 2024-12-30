import styled from "@emotion/styled";

// auth에서 사용하는 로고
export const FormLogo = styled.div`
  .logo {
    display: flex;
    justify-content: center;
    a {
      display: block;
      width: 120px;
      height: 60px;
      font-size: 0;
      background: url(/images/logo.png) no-repeat center center / contain;
    }
  }
  > p {
    text-align: center;
    padding: 0px 0 35px;
    color: #aaa;
    font-size: 14px;
  }
`;
