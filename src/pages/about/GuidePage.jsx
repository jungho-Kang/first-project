import { AboutTopDiv, GuideContentDiv, GuideDiv } from "./about";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function GuidePage() {
  return (
    <GuideDiv>
      <AboutTopDiv>
        <h2 className="txt">이용 가이드</h2>
      </AboutTopDiv>
      <GuideContentDiv>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src="/images/guide_img/guide01.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </GuideContentDiv>
    </GuideDiv>
  );
}

export default GuidePage;
