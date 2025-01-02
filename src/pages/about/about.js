import styled from "@emotion/styled";
export const AboutDiv = styled.div`
  border: 1px solid #eee;
`;
export const AboutTopDiv = styled.div`
  height: 280px;
  width: 100%;
  background-color: #1270b0;
  display: flex;
  justify-content: center;
  align-items: center;
  .txt {
    font-size: 42px;
    font-weight: 500;
    color: #fff;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
  }
`;
export const AboutContDiv = styled.div`
  padding-bottom: 160px;
  .cont {
    /* border: 1px solid; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 120px 0;

    .img-box {
      width: 50%;
      height: 420px;
      background-color: #eee;
    }
    .info-box {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        width: 55%;

        h4 {
          font-size: 28px;
          margin-bottom: 0.85em;
        }
        span {
          word-break: keep-all;
          line-height: 1.65em;
        }
      }
    }
  }
`;
