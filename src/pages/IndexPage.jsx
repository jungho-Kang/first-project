import { Link } from "react-router-dom";
// comp
import { WrapDiv } from "../components/common";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";
import {
  LinkBoxDiv,
  LinkContDiv,
  MainWrapDiv,
  ProvideDiv,
  TextareaDiv,
  VisualDiv,
} from ".";

function IndexPage() {
  return (
    <>
      <VisualDiv>
        <WrapDiv>
          <TextareaDiv>
            <h1>
              다녀 <b>ALL</b>
            </h1>
            <p>
              여행지 추천부터 일정 계획까지, 다녀ALL에서 완벽한 여행을
              준비하세요.
            </p>
            <Link to={"/planning"}>일정계획 시작하기</Link>
          </TextareaDiv>
        </WrapDiv>
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
