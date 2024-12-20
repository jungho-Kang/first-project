import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { LayoutDiv } from "./plan";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MenuDiv = styled.div`
  width: 125px;
  height: 100vh;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9;
`;
const LogoImg = styled.img`
  width: 100px;
  height: 50px;
  display: block;
  margin: 0 auto;
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
  height: 100vh;
  background-color: rebeccapurple;
`;
const MenuLayoutDiv = styled.div`
  max-width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
`;
const AddScheduleDiv = styled.div`
  width: 520px;
  height: 100vh;
  background-color: #fff;
  z-index: 5;
  position: absolute;
  left: 125px;
`;
function MakePlannerPage() {
  // 지도의 로딩 상태를 관리하는 state를 선언합니다
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  // 현재 위치를 저장할 상태
  const [location, setLoacation] = useState(null);

  // 위치 성공
  const successHandler = response => {
    // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
    console.log(response);
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
            <LogoImg src="/images/logo.svg" alt="로고" />
          </Link>
          <BtnSortDiv>
            <EventBtn>공유하기</EventBtn>
            <EventBtn>저장</EventBtn>
          </BtnSortDiv>
        </MenuDiv>
        <AddScheduleDiv></AddScheduleDiv>
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
