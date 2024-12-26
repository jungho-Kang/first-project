import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { WrapDiv } from "../components/common";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

function IndexPage() {
  const MainWrapDiv = styled(WrapDiv)`
    /* border: 1px solid #333; */
    padding: 40px 0 120px;
  `;

  // 메인배너
  const VisualDiv = styled.div`
    background-color: #eee;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;
  const TextareaDiv = styled.div`
    h1 {
      font-size: 46px;
      margin-bottom: 20px;
    }
    p {
      color: #777;
    }
  `;

  // 메인컨텐츠1 - 추천여행지
  const ProvideDiv = styled.div`
    /* border: 1px solid red; */
    padding: 80px 0;
    /* 타이틀 */
    .tit {
      text-align: center;
      h3 {
        font-size: 32px;
        font-weight: 600;
        padding: 0.8em 0;
      }
      span {
        color: #555;
      }
    }
    /* 스와이퍼 */
    .mySwiper {
      padding: 60px 0;
      .mcont {
        height: 320px;
        border: 1px solid #eee;
        border-radius: 12px;
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

  // 메인컨텐츠2 - 링크
  const LinkContDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 60px;
    padding: 60px 0;
    /* gap: 4.16vw; */
    .tit {
    }
  `;
  const LinkBoxDiv = styled.div`
    border-radius: 12px;
    border: 1px solid #bbb;
    width: calc(100% / 3);
    height: 17vw;
    max-height: 270px;
    overflow: hidden;
    &:nth-child(1) {
      background: url(/images/korail.png) no-repeat center center;
      background-size: 50%;
    }
    &:nth-child(2) {
      background: url(/images/) no-repeat center center;
      background-size: 50%;
    }
    &:nth-child(3) {
      background: url(/images/) no-repeat center center;
      background-size: 50%;
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
        /* border: 1px solid #bbb; */

        h4 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        p {
          color: #555;
        }
      }
    }
  `;

  return (
    <>
      <VisualDiv>
        <TextareaDiv>
          <h1>다녀 ALL</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </TextareaDiv>
      </VisualDiv>

      <MainWrapDiv>
        {/* 메인 컨텐츠1 - 추천여행지 (여행로그) */}
        <ProvideDiv>
          <div className="tit">
            <h3>오늘의 추천 여행지</h3>
            <span className="sub-tit">
              어떻게 짜야할지 모르는 여행 플래너, 다른 고객의 추천 플랜을
              참고해보세요.
            </span>
          </div>

          <Swiper
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            spaceBetween={60}
            className="mySwiper"
          >
            <SwiperSlide className="mcont">Slide 1</SwiperSlide>
            <SwiperSlide className="mcont">Slide 2</SwiperSlide>
            <SwiperSlide className="mcont">Slide 3</SwiperSlide>
            <SwiperSlide className="mcont">Slide 4</SwiperSlide>
            <SwiperSlide className="mcont">Slide 5</SwiperSlide>
            <SwiperSlide className="mcont">Slide 6</SwiperSlide>
            <SwiperSlide className="mcont">Slide 7</SwiperSlide>
            <SwiperSlide className="mcont">Slide 8</SwiperSlide>
            <SwiperSlide className="mcont">Slide 9</SwiperSlide>
          </Swiper>

          <div className="btn-area">
            <Link to={"/board"}>여행로그 바로가기</Link>
          </div>
        </ProvideDiv>
        {/* 메인 컨텐츠2 - 링크 버튼 */}
        <LinkContDiv>
          <LinkBoxDiv>
            <Link to={"/"}>
              <em>교통</em>
              <div className="txt-box">
                <h4>코레일</h4>
                <p>코레일 교통편 알아보기 </p>
              </div>
            </Link>
          </LinkBoxDiv>

          <LinkBoxDiv>
            <Link to={"/"}>
              <em>교통</em>
              <div className="txt-box">
                <h4>항공편</h4>
                <p>대한항공 교통편 알아보기 </p>
              </div>
            </Link>
          </LinkBoxDiv>

          <LinkBoxDiv>
            <Link to={"/"}>
              <em>숙소</em>
              <div className="txt-box">
                <h4>숙소</h4>
                <p>에어비엔비 숙소 알아보기 </p>
              </div>
            </Link>
          </LinkBoxDiv>
        </LinkContDiv>
      </MainWrapDiv>
    </>
  );
}

export default IndexPage;
