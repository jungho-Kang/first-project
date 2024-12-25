import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapLayoutDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
`;

const TravelMap = () => {
  // 검색 관련 키워드 입력 및 출력 목록
  const [list, setList] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  // 지도의 로딩 상태를 관리하는 state를 선언합니다
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const psRef = useRef(null);

  const { kakao } = window;

  // 컴포넌트가 마운트될 때 카카오맵 스크립트를 로드합니다
  useEffect(() => {
    // 카카오맵 스크립트 엘리먼트를 생성합니다
    const kakaoMapScript = document.createElement("script");
    // 스크립트를 비동기로 로드하도록 설정합니다
    kakaoMapScript.async = true;
    // 카카오맵 SDK URL을 설정합니다 (환경변수에서 API 키를 가져옵니다)
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KKO_MAP_KEY}&autoload=false&libraries=services`;

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

  const searchPlace = (word = "대구 맛집") => {
    if (!psRef.current) {
      // 카카오맵 서비스 인스턴스를 생성합니다
      psRef.current = new kakao.maps.services.Places();
    }
    // const ps = new kakao.maps.services.Places();
    psRef.current.keywordSearch(word, (data, status, _pagination) => {
      console.log(data, status, _pagination);
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // 원본 검색 데이터를 저장합니다
        setList([...data]);
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  };
  useEffect(() => {
    if (!map) return;
    searchPlace();
  }, [map]);

  // 지도가 로드되지 않았다면 로딩 메시지를 표시합니다
  if (!isMapLoaded) {
    return <div>지도를 불러오는 중입니다...</div>;
  }

  return (
    <MapLayoutDiv>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "500px",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map(marker => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
      <div>
        <input type="text" onChange={e => setSearchWord(e.target.value)} />
        <button onClick={() => searchPlace(searchWord)}>검색</button>
      </div>
      <div style={{ width: "50%", margin: "0 auto" }}>
        {list.map(item => {
          return (
            <div key={`item-${item.address_name}-${item.x},${item.y}`}>
              {item.address_name} : {item.category_group_name}
              {item.x} {item.y}
            </div>
          );
        })}
      </div>
    </MapLayoutDiv>
  );
};
export default TravelMap;
