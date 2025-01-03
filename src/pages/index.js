import styled from "@emotion/styled";
import { WrapDiv } from "../components/common";

export const MainWrapDiv = styled(WrapDiv)`
  padding: 40px 0 120px;
`;

// 메인배너
export const VisualDiv = styled.div`
  background-color: #eee;
  margin-top: 68px;
  background: url(/images/visual.jpg) no-repeat center center / cover;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    align-items: center;
  }
`;
export const TextareaDiv = styled.div`
  margin-left: 80px;
  h1 {
    font-family: "yg-jalnan";
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 0.4em;
    b {
      color: #1270b0;
    }
  }
  p {
    line-height: 1.2em;
    color: #999;
    font-size: 16px;
  }
  a {
    margin-top: 2.5em;
    padding: 14px 30px;
    border-radius: 5px;
    background-color: #17a1fa;
    color: #fff;
    display: inline-block;
    transform: scale(1);
    transition: all 0.5s;
    &:hover {
      transform: scale(0.98);
      opacity: 0.8;
    }
  }
`;

// 메인컨텐츠1 - 추천여행지
export const ProvideDiv = styled.div`
  padding: 80px 0 160px;
  /* 타이틀 */
  .tit {
    text-align: center;

    h3 {
      font-size: 32px;
      font-weight: 600;
      padding: 0.8em 0;
      color: #000;
    }
    span {
      color: rgba(0, 0, 0, 0.65);
    }
  }
  /* 스와이퍼 */
  .mySwiper {
    padding: 80px 0;
    height: 100%;
    .mcont {
      /* height: 280px; */
      border: 1px solid #eee;
      border-radius: 12px;
      overflow: hidden;
    }
  }

  /* 버튼 */
  .btn-area {
    display: flex;
    justify-content: center;
    a {
      padding: 15px 50px;
      border-radius: 5px;
      background-color: #333;
      color: #fff;
    }
  }
`;
export const SwiperItemDiv = styled.div`
  cursor: pointer;
  display: block;
  transition: all 0.3s;
  &:hover {
    opacity: 0.9;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  /* height: 100%; */
  position: relative;
  .thum {
    width: 100%;
    z-index: 999;
    height: 320px;
    background: #000;
    overflow: hidden;
    background: #eee;
  }
  .txt-box {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    height: 85px;
    padding: 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .top {
      /* border: 1px solid; */
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #fff;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);

        em {
          display: inline-block;
          padding: 3px 6px;
          border-radius: 4px;
          background-color: #17a1fa;
          color: #000;
          font-size: 14px;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        }
        h4 {
          font-size: 18px;
          font-weight: 500;
        }
      }
      .like {
        color: red;
        font-size: 16px;
        span {
          color: #fff;
          font-weight: 500;
        }
      }
    }
    .date {
      /* border: 1px solid; */
      width: 100%;
      margin-top: 0.8em;
      text-align: right;
      color: rgba(255, 255, 255, 0.5);
      font-size: 14px;
    }
  }
`;

// 메인컨텐츠2 - 링크
export const LinkContDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  padding: 60px 0;
  /* gap: 4.16vw; */
`;
export const LinkBoxDiv = styled.div`
  border-radius: 12px;
  width: calc(100% / 3);
  height: 17vw;
  max-height: 270px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  &:nth-of-type(1) {
    background: url(/images/link-img_01.jpg) no-repeat center center / cover;
  }
  &:nth-of-type(2) {
    background: url(/images/link-img_02.jpg) no-repeat center center / cover;
  }
  &:nth-of-type(3) {
    background: url(/images/link-img_03.jpg) no-repeat center center / cover;
  }

  &:hover {
    transform: translateY(-3px);
  }

  > a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;

    em {
      background-color: #333;
      color: #fff;
      padding: 3px 5px 4px;
      position: absolute;
      top: 1vw;
      right: 1vw;
      border-radius: 4px;
    }

    .txt-box {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 2vw 1.5vw;
      background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));

      h4 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
        color: #fff;
        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
      }
      p {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;
