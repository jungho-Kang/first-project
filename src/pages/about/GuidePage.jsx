import { AboutTopDiv, GuideContentDiv, GuideDiv } from "./about";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

function GuidePage() {
  // 이미지 배열 (src는 파일명만, style은 배열로 관리)
  const images = [
    { src: "guide01.jpg", style: {} },
    { src: "guide02.jpg", style: {} },
    { src: "guide03.jpg", style: {} },
    { src: "guide04.jpg", style: { objectPosition: "left" } },
    { src: "guide05.jpg", style: { objectPosition: "right" } },
    { src: "guide06.jpg", style: { objectFit: "contain" } },
    { src: "guide07.jpg", style: {} },
    { src: "guide08.jpg", style: { objectFit: "contain" } },
    { src: "guide09.jpg", style: { objectFit: "contain" } },
    { src: "guide10.jpg", style: { objectFit: "contain" } },
    { src: "guide11.jpg", style: {} },
    { src: "guide12.jpg", style: {} },
    { src: "guide13.jpg", style: {} },
    { src: "guide14.jpg", style: {} },
  ];

  return (
    <GuideDiv>
      {/* <AboutTopDiv>
        <h2 className="txt">이용 가이드</h2>
      </AboutTopDiv> */}
      <GuideContentDiv>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/images/guide_img/${image.src}`}
                alt={`이용방법 ${index + 1}`}
                className={`guide${index + 1}`}
                style={image.style}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </GuideContentDiv>
    </GuideDiv>
  );
}

export default GuidePage;
