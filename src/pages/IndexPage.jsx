import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// comp
import { WrapDiv } from "../components/common";
import SwiperItem from "../components/main/SwiperItem";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper/modules";

// styled
import {
  LinkBoxDiv,
  LinkContDiv,
  MainWrapDiv,
  ProvideDiv,
  TextareaDiv,
  VisualDiv,
} from ".";
// icon

function IndexPage() {
  const [planList, setPlanList] = useState([]);
  const fetchApi = async () => {
    try {
      const res = await axios.get(`/api/feed/main`);
      console.log(res.data.resultData);
      setPlanList(res.data.resultData);
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다.");
    }
  };
  useEffect(() => {
    // console.log()
    fetchApi();
  }, []);
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
        {/* 메인 컨텐츠1 - 추천여행지 (다녀ON) */}
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
            {planList.map(item => {
              return (
                <SwiperSlide
                  key={item.planMasterId}
                  item={item}
                  className="mcont"
                >
                  <SwiperItem item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="btn-area">
            <Link to={"/board"}>다녀ON 바로가기</Link>
          </div>
        </ProvideDiv>
        {/* 메인 컨텐츠2 - 링크 버튼 */}
        <LinkContDiv>
          <LinkBoxDiv>
            <Link
              to={"#"}
              onClick={() => {
                window.open("https://www.letskorail.com", "_blank");
              }}
            >
              <em>교통</em>
              <div className="txt-box">
                <h4>코레일</h4>
                <p>코레일 교통편 알아보기 </p>
              </div>
            </Link>
          </LinkBoxDiv>

          <LinkBoxDiv>
            <Link
              to={"#"}
              onClick={() => {
                window.open("https://www.koreanair.com/?hl=ko", "_blank");
              }}
            >
              <em>교통</em>
              <div className="txt-box">
                <h4>항공편</h4>
                <p>대한항공 교통편 알아보기 </p>
              </div>
            </Link>
          </LinkBoxDiv>

          <LinkBoxDiv>
            <Link
              to={"#"}
              onClick={() => {
                window.open("https://www.airbnb.co.kr/", "_blank");
              }}
            >
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
