import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LayoutDiv } from "./plan";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PlanListInput from "../../components/list-result/PlanListInput";
import Logo from "../../components/Logo";
import AddPlace from "../../components/plantabs/AddPlace";
import PlanTop from "../../components/plantabs/PlanTop";
import RecommendItem from "../../components/plantabs/RecommendItem";
import SchedulePush from "../../components/plantabs/SchedulePush";
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
  padding: 20px 0;
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
  background-color: #ddd;
  color: #000;
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

function MakePlannerPage({
  resData,
  cityName,
  resDetailData,
  planMasterId,
  peopleCnt,
  selectedOption,
  setSelectedOption,
  isOpen,
  setIsOpen,
  dayList,
  setDayList,
  datePrice,
  setDatePrice,
}) {
  const { id } = useParams();

  // 보낼 Plan 데이터 초기 값
  const initDetailData = {
    planMasterId: 0,
    placeId: 0,
    price: 0,
    memo: "",
    startTime: "",
    endTime: "",
    date: "",
    newPlacePostReq: {
      cityId: 0,
      placeAddress: "",
      placeName: "",
      category: "",
      lat: 0,
      lng: 0,
    },
  };

  // 보낼 Plan 데이터 (위치, 시간, 주소, 비용 등등)
  const [detailData, setDetailData] = useState(initDetailData);

  const [isSlide, setIsSlide] = useState(false);
  const [activeTab, setActiveTab] = useState("추천항목");

  // 12-17 : 검색 관련 키워드 입력 및 출력 목록
  const [mapResultList, setMapResultList] = useState([]);
  const [searchWord, setSearchWord] = useState(`${cityName} 맛집`);

  // 팝업창 띄우기 버튼
  const [isClick, setIsClick] = useState(false);

  // 일정등록, 일정 버튼
  const [selectedBtn, setSelectedBtn] = useState("일정등록");

  // 직접 추가로 선택된 아이템 전달
  const [selectedItem, setSelectedItem] = useState({
    addressName: "",
    placeName: "",
  });

  // 선택된 카테고리
  const [selectedCate, setSelectedCate] = useState("place");

  // 선택된 항목 위도 경도
  const [itemLatLng, setItemLatLng] = useState({
    lat: "",
    lng: "",
  });

  // 장소 리스트 가져오기
  const [placeData, setPlaceData] = useState([]);
  // 장소 btnClick 초기화
  const [initData, setInitData] = useState([]);

  // 일정 탭에 띄울 데이터
  const [planListData, setPlanListData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("planMasterId : ", planMasterId);
  }, [planMasterId]);

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log("플랜 리스트 데이터다", planListData);
  }, [planListData]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        marginTop: "-68px",
      }}
    >
      <LayoutDiv>
        <MenuLayoutDiv>
          <MenuDiv>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Link to={"/"}>
                <Logo />
              </Link>
              <EventBtn
                style={{
                  backgroundColor:
                    selectedBtn === "일정등록" ? "#5469D4" : "#ddd",
                  color: selectedBtn === "일정등록" ? "#fff" : "#000",
                }}
                onClick={() => setSelectedBtn("일정등록")}
              >
                일정등록
              </EventBtn>
              <EventBtn
                style={{
                  backgroundColor: selectedBtn === "일정" ? "#5469D4" : "#ddd",
                  color: selectedBtn === "일정" ? "#fff" : "#000",
                }}
                onClick={() => setSelectedBtn("일정")}
              >
                일정
              </EventBtn>
            </div>
            <BtnSortDiv>
              <EventBtn
                style={{ backgroundColor: "#D1373A", color: "#fff" }}
                onClick={() => {
                  alert("저장되었습니다.");
                  navigate("/");
                }}
              >
                저장
              </EventBtn>
            </BtnSortDiv>
          </MenuDiv>
          <AddScheduleDiv isSlide={isSlide}>
            <div className="inner">
              <PlanTop
                resData={resData}
                cityName={cityName}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setDayList={setDayList}
                dayList={dayList}
              />
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
                <RecommendItem
                  isClick={isClick}
                  setIsClick={setIsClick}
                  selectedCate={selectedCate}
                  setSelectedCate={setSelectedCate}
                  setSelectedItem={setSelectedItem}
                  cityId={id}
                  setPlaceData={setPlaceData}
                  setInitData={setInitData}
                  placeData={placeData}
                  setItemLatLng={setItemLatLng}
                />
              ) : (
                <AddPlace
                  // 선택된 요소의 주소와 장소이름 넘기기
                  setSelectedItem={setSelectedItem}
                  // 팝업창 띄우기
                  setIsClick={setIsClick}
                  setSearchWord={setSearchWord}
                  // 지도 목록 리스트
                  mapResultList={mapResultList}
                  // 위도, 경도
                  setItemLatLng={setItemLatLng}
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
        {/* 맵 API 컴포넌트, 일정 보여주기 컴포넌트 */}
        {selectedBtn === "일정등록" ? (
          <TravelMap
            // 지도 목록 갱신
            setMapResultList={setMapResultList}
            searchWord={searchWord}
            // 위도, 경도
            itemLatLng={itemLatLng}
            // 아이템이 선택됐는지 여부
            isClick={isClick}
          />
        ) : (
          <PlanListInput
            planListData={planListData}
            setPlanListData={setPlanListData}
            selectedOption={selectedOption}
            datePrice={datePrice}
            setDatePrice={setDatePrice}
            planMasterId={planMasterId}
            peopleCnt={peopleCnt}
            isSlide={isSlide}
          />
        )}
      </LayoutDiv>
      {isClick ? (
        <SchedulePush
          resDetailData={resDetailData}
          selectedItem={selectedItem}
          setIsClick={setIsClick}
          selectedCate={selectedCate}
          setSelectedCate={setSelectedCate}
          initData={initData}
          setPlaceData={setPlaceData}
          itemLatLng={itemLatLng}
          selectedOption={selectedOption}
          detailData={detailData}
          setDetailData={setDetailData}
          setPlanListData={setPlanListData}
          planListData={planListData}
        />
      ) : (
        <></>
      )}

      {isClick ? (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 500,
            width: 50,
            height: 650,
            zIndex: 99,
          }}
        ></div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default MakePlannerPage;
