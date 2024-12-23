import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { Link } from "react-router-dom";
import { LayoutDiv } from "./plan";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Logo from "../../components/Logo";
import OfferItem from "../../components/plantabs/OfferItem";
import PlanTabs from "../../components/plantabs/PlanTabs";
import PlanTop from "../../components/plantabs/PlanTop";

const MenuDiv = styled.div`
  width: 125px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #eee;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9;
`;

const BtnSortDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const EventBtn = styled.button`
  width: 80px;
  height: 45px;
  border-radius: 5px;
  background-color: #5469d4;
  color: #fff;
  border: none;
  line-height: 45px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
`;
const MapLayoutDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
`;
const MenuLayoutDiv = styled.div`
  max-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
`;
const AddScheduleDiv = styled.div`
  width: 480px;
  height: 100%;
  background-color: #fff;
  z-index: 5;
  position: absolute;
  transition: all 0.3s;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.15);
  left: ${({ isSlide }) => (isSlide ? "-355px" : "125px")};

  .slide-btn {
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    width: 25px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 5px 5px 0;
    border: 1px solid #eee;
    border-left-color: #fff;
    background-color: #fff;
  }
  .inner {
    padding: 32px 24px;
  }
`;

const OfferListDiv = styled.div`
  max-height: 620px;
  height: 100%;
  padding: 0 10px;
  overflow-y: auto;
`;

function MakePlannerPage() {
  // 지도의 로딩 상태를 관리하는 state를 선언합니다
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  // 현재 위치를 저장할 상태
  const [location, setLoacation] = useState(null);
  const [isSlide, setIsSlide] = useState(false);

  // 위치 성공
  const successHandler = response => {
    // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
    const { latitude, longitude } = response.coords;
    setLoacation({ latitude, longitude });
  };
  // 위치 에러
  const errorHandler = error => {
    console.log(error);
  };

  useEffect(() => {
    // 성공시 successHandler, 실패시 errorHandler 함수가 실행된다.
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  // 컴포넌트가 마운트될 때 카카오맵 스크립트를 로드합니다
  useEffect(() => {
    // 카카오맵 스크립트 엘리먼트를 생성합니다
    const kakaoMapScript = document.createElement("script");
    // 스크립트를 비동기로 로드하도록 설정합니다
    kakaoMapScript.async = true;
    // 카카오맵 SDK URL을 설정합니다 (환경변수에서 API 키를 가져옵니다)
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KKO_MAP_KEY}&autoload=false`;

    // 스크립트 로드가 완료되면 실행될 이벤트 리스너를 추가합니다
    kakaoMapScript.addEventListener("load", () => {
      // 카카오맵을 로드하고 로딩 상태를 true로 변경합니다
      window.kakao.maps.load(() => {
        setIsMapLoaded(true);
      });
    });

    // 생성한 스크립트를 head에 추가합니다
    document.head.appendChild(kakaoMapScript);

    // 클린업 함수
    // 컴포넌트가 언마운트될 때 스크립트를 제거합니다
    return () => {
      document.head.removeChild(kakaoMapScript);
    };
  }, []);

  // 지도가 로드되지 않았다면 로딩 메시지를 표시합니다
  if (!isMapLoaded) {
    return <div>지도를 불러오는 중입니다...</div>;
  }

  return (
    <LayoutDiv>
      <MenuLayoutDiv>
        <MenuDiv>
          <Link to={"/"}>
            <Logo />
          </Link>
          <BtnSortDiv>
            <EventBtn>공유하기</EventBtn>
            <EventBtn>저장</EventBtn>
          </BtnSortDiv>
        </MenuDiv>
        <AddScheduleDiv isSlide={isSlide}>
          <div className="inner">
            <PlanTop />
            <PlanTabs />
            <OfferListDiv>
              <OfferItem />
              <OfferItem />
              <OfferItem />
              <OfferItem />
              <OfferItem />
              <OfferItem />
              <OfferItem />
              <OfferItem />
            </OfferListDiv>
          </div>
          <button
            className="slide-btn"
            onClick={() => {
              setIsSlide(prev => !prev);
            }}
          >
            {isSlide ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </AddScheduleDiv>
      </MenuLayoutDiv>
      <MapLayoutDiv>
        {location && (
          <Map
            center={{ lat: location.latitude, lng: location.longitude }}
            style={{ width: "100%", height: "100%" }}
            level={3}
          >
            <MapMarker
              position={{ lat: location.latitude, lng: location.longitude }}
            />
          </Map>
        )}
      </MapLayoutDiv>
    </LayoutDiv>
  );
}
export default MakePlannerPage;
