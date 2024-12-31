import styled from "@emotion/styled";
import { useEffect, useState, useCallback } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import FocusMap from "./FocusMap";

const MapLayoutDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
`;

const TravelMap = ({ setMapResultList, searchWord, itemLatLng, isClick }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao?.maps) {
        setIsMapLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KKO_MAP_KEY}&autoload=false&libraries=services`;

      script.addEventListener("load", () => {
        window.kakao.maps.load(() => setIsMapLoaded(true));
      });

      document.head.appendChild(script);
      return () => document.head.removeChild(script);
    };

    loadKakaoMap();
  }, []);

  const searchPlaces = useCallback(
    map => {
      if (!map) return;

      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(searchWord, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          setMapResultList(data);

          const newMarkers = data.map(place => {
            const position = {
              lat: place.y,
              lng: place.x,
            };

            bounds.extend(new kakao.maps.LatLng(position.lat, position.lng));

            return {
              position,
              content: place.place_name,
            };
          });

          setMarkers(newMarkers);
          map.setBounds(bounds);
        }
      });
    },
    [searchWord],
  );

  useEffect(() => {
    if (map) {
      searchPlaces(map);
    }
  }, [map, searchPlaces]);

  if (!isMapLoaded) {
    return <div>지도를 불러오는 중입니다...</div>;
  }

  return (
    <MapLayoutDiv>
      {!isClick ? (
        <Map
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          level={3}
          onCreate={setMap}
        >
          {markers.map(marker => (
            <MapMarker
              key={`${marker.content}-${marker.position.lat}-${marker.position.lng}`}
              position={marker.position}
              onClick={() => setSelectedMarker(marker)}
            >
              {selectedMarker?.content === marker.content && (
                <div style={{ color: "#000" }}>{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
      ) : (
        <FocusMap itemLatLng={itemLatLng} />
      )}
    </MapLayoutDiv>
  );
};

export default TravelMap;
