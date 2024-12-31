import styled from "@emotion/styled";

export const SignupDiv = styled.div`
  border: 1px solid #eee;
  max-width: 1024px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  gap: 15px;
  flex-direction: column;
  padding: 60px 18% 100px;
  background-color: #fff;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .signup-form {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
`;
export const AgreementDocumentDiv = styled.div`
  border: 1px solid rgb(228, 228, 228);
  padding: 20px 30px 0;
  border-radius: 12px;
  overflow-y: auto;
  max-height: 200px;
  line-height: 1.35em;
  * {
    word-break: keep-all;
  }
  > div {
    padding: 5px 0;
    margin-bottom: 10px;

    p {
      font-weight: 600;
      line-height: 1.8em;
      margin-bottom: 5px;
    }
    span {
      display: block;
      padding: 5px 10px;
      font-size: 14px;
      color: #555;
      line-height: 1.5em;
    }
    > ul {
      font-size: 13px;
      padding: 10px 25px;
      &:last-of-type {
        margin-bottom: 0;
      }
      > li {
        color: #777;
        margin-bottom: 10px;
        > ul {
          background-color: #eee;
          margin-top: 10px;
          padding: 15px;
          line-height: 1.5em;
        }
      }
    }
  }
  .item {
    font-size: 14px;
    line-height: 2em;
    b {
      font-weight: 700;
      display: inline-block;
      width: 80px;
    }
    em {
      color: #777;
    }
  }
`;
