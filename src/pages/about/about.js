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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 120px 0;
    &:nth-of-type(1) .img-box {
      background: url(/images/about/about01.jpg) no-repeat top left / 180%;
    }
    &:nth-of-type(2) .img-box {
      background: url(/images/about/about02.jpg) no-repeat top right / 100%;
    }
    &:nth-of-type(3) .img-box {
      background: url(/images/about/about03.jpg) no-repeat center right / 140%;
    }
    &:nth-of-type(4) .img-box {
      background: url(/images/about/about04.jpg) no-repeat top center / 110%;
    }
    .img-box {
      width: 50%;
      height: 380px;
      border: 1px solid #eee;
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

// 서브메뉴 - 가이드 페이지

export const GuideDiv = styled.div``;
export const GuideContentDiv = styled.div`
  max-width: 1280px;
  margin: 120px auto 160px;
  border: 1px solid #bbb;
  width: 100%;
  height: 720px;
  .mySwiper {
    width: 100%;
    height: 100%;
    > div > div {
      width: 100%;
      height: 100%;
      background: #eee;
    }
  }
`;
