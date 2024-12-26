import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDiv } from "./plan";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Logo from "../../components/Logo";
import AddPlace from "../../components/plantabs/AddPlace";
import PlanTop from "../../components/plantabs/PlanTop";
import RecommendItem from "../../components/plantabs/RecommendItem";
import TravelMap from "../../components/plantabs/TravelMap";

const PlanTabsUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 15px 10px 0;
  border-bottom: 1px solid #eee;

  li {
    width: 50%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    cursor: pointer;
    color: #777;
    font-size: 18px;
  }

  .active {
    font-weight: 500;
    color: #3825e4;
  }
`;

const TabUnderline = styled.li`
  position: absolute !important;
  bottom: -2px;
  left: ${props => (props.activeTab === "추천항목" ? "0" : "50%")};
  width: 50%;
  height: 5px !important;
  border-radius: 3px;
  background-color: #3825e4;
`;

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

function MakePlannerPage() {
  const [isSlide, setIsSlide] = useState(false);
  const [activeTab, setActiveTab] = useState("추천항목");

  // 검색 관련 키워드 입력 및 출력 목록
  const [list, setList] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const psRef = useRef(null);

  const { kakao } = window;

  const searchPlace = (word = `대구 명소`) => {
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

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

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
            <div>
              <PlanTabsUl>
                <li
                  className={activeTab === "추천항목" ? "active" : ""}
                  onClick={() => handleTabClick("추천항목")}
                >
                  추천항목
                </li>
                <li
                  className={activeTab === "직접추가" ? "active" : ""}
                  onClick={() => handleTabClick("직접추가")}
                >
                  직접추가
                </li>
                <TabUnderline activeTab={activeTab} />
              </PlanTabsUl>
            </div>
            {activeTab === "추천항목" ? (
              <RecommendItem />
            ) : (
              <AddPlace
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                searchPlace={searchPlace}
                list={list}
              />
            )}
          </div>
          <button
            className="slide-btn"
            onClick={() => {
              setIsSlide(prev => !prev);
            }}
          >
            {isSlide ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </AddScheduleDiv>
      </MenuLayoutDiv>
      {/* 맵 API 컴포넌트 */}
      <TravelMap
        list={list}
        map={map}
        searchPlace={searchPlace}
        setMap={setMap}
        markers={markers}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
    </LayoutDiv>
  );
}
export default MakePlannerPage;
