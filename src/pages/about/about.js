import { keyframes } from "@emotion/react";
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
const objectPositionMove = keyframes`
  0% { object-position: top;}
  40% { object-position: top;}
  60% {object-position: bottom;}
  100% {object-position: bottom;}
`;
export const GuideDiv = styled.div``;
export const GuideContentDiv = styled.div`
  max-width: 1280px;
  margin: 120px auto 160px;
  width: 100%;
  height: 720px;

  .mySwiper {
    width: 100%;
    height: 100%;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border-radius: 30px;

    > div > div {
      width: 100%;
      height: 100%;
      background: #666;

      overflow: hidden;

      &:nth-child(12) img {
        object-position: top;
        animation: ${objectPositionMove} 5s infinite alternate;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  /* 이용내역 스와이퍼 커스텀 */
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    color: #fff;
  }
  .swiper-pagination-fraction {
    color: #fff;
    text-align: right;
    padding: 15px 30px;
  }
`;
