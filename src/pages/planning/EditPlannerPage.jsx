import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// comp
import Logo from "../../components/Logo";
import AddPlace from "../../components/plantabs/AddPlace";
import RecommendItem from "../../components/plantabs/RecommendItem";
import TravelMap from "../../components/plantabs/TravelMap";
//styled
import styled from "@emotion/styled";
import { LayoutDiv } from "./plan";

// icon
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import PlanListInput from "../../components/list-result/PlanListInput";

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

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  > div {
    width: 100%;
    display: flex;
    gap: 15px;
  }
  h2 {
    display: block;
    font-weight: 700;
    font-size: 32px;
  }
`;

const SelectedOption = styled.div`
  width: 90px;
  position: relative;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  text-indent: -20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
`;

const OptionsList = styled.div`
  position: absolute;
  top: 35px;
  left: 80px;
  width: 90px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #ddd;
  border-top: 1px solid #fff;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 9;
`;

const OptionItem = styled.div`
  padding: 10px;
  text-indent: -20px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const PlanDateDiv = styled.div`
  padding: 0.8em 0;
  color: #777;
`;

const ContentDiv = styled.div`
  max-width: 480px;
  width: 100%;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.12),
    0 7px 14px rgba(0, 0, 0, 0.12);
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
  z-index: 999;
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  h2 {
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .btnSubmit {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    background-color: #17a1fa;
    color: #fff;
    border-radius: 5px;
    border: none;
  }
`;

const SmallTitleDiv = styled.div`
  margin: 10px 0 7px;
  font-size: 14px;
  font-weight: 700;
`;

const TimeDiv = styled.div`
  display: flex;
  margin-top: 5;
  gap: 10px;
`;

const TimeInput = styled.input`
  width: 50%;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CostInput = styled(TimeInput)`
  width: 100%;
  border: 1px solid #ddd;
`;

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding-left: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const CateDiv = styled.div`
  width: calc((100% - 20px) / 3);
  height: 38px;
  border-radius: 4px;
  text-align: center;
  background-color: #eee;
  line-height: 38px;
  cursor: pointer;
`;

const ExitBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  width: 30px;
  height: 30px;
`;

function EditPlannerPage({
  selectedOption,
  setSelectedOption,
  isOpen,
  setIsOpen,
  dayList,
  setDayList,
  datePrice,
  setDatePrice,
  allPrice,
  setAllPrice,
  setPlanMasterId,
}) {
  const { id } = useParams();

  // 보낼 Plan 데이터 초기 값
  const initDetailData = {
    planMasterId: id,
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
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("22:00");
  const [price, setPrice] = useState(0);
  const [memo, setMemo] = useState("");

  const [isSlide, setIsSlide] = useState(false);
  const [activeTab, setActiveTab] = useState("추천항목");

  const [planDetailData, setPlanDetailData] = useState({});

  // 12-17 : 검색 관련 키워드 입력 및 출력 목록
  const [mapResultList, setMapResultList] = useState([]);
  const [searchWord, setSearchWord] = useState(
    `${planDetailData.cityName} 맛집`,
  );

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

  const getPlanDetail = async () => {
    try {
      const res = await axios.get(`/api/plan?planMasterId=${id}`);
      console.log("get 받아옴!!", res.data.resultData);
      setPlanDetailData(res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const postPlanDetail = async item => {
    try {
      await axios.post(`/api/plan/detail`, item);
      setDetailData(initDetailData);
    } catch (error) {
      console.log("보낸 데이터", item);
      console.log(error);
    }
  };

  const { handleSubmit } = useForm();
  const handleSubmitData = () => {
    postPlanDetail({ ...detailData });

    setIsClick(false);
  };

  useEffect(() => {
    setDetailData({
      planMasterId: id,
      price: price,
      memo: memo,
      startTime: startTime,
      endTime: endTime,
      date: selectedOption.substring(0, 1),
      newPlacePostReq: {
        cityId: planDetailData.cityId,
        placeAddress: selectedItem.addressName,
        placeName: selectedItem.placeName,
        category: selectedCate,
        lat: itemLatLng.lat,
        lng: itemLatLng.lng,
      },
    });
  }, [startTime, endTime, price, selectedCate, memo, selectedOption]);

  useEffect(() => {
    getPlanDetail();
    setDayList(
      Array.from(
        { length: planDetailData.planDate + 1 },
        (_, i) => `${i + 1}일차`,
      ),
    );
    setSearchWord(`${planDetailData.cityName} 맛집`);
    setPlanMasterId(id);
  }, [planDetailData.cityName]);

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
        zIndex: 9999,
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
              {/* Plan-Top */}
              <Wrapper>
                <div>
                  <h2>{planDetailData.cityName}</h2>
                  <SelectedOption onClick={() => setIsOpen(prev => !prev)}>
                    {selectedOption}
                    <TiArrowSortedDown
                      style={{
                        position: "absolute",
                        right: "12px",
                        color: "#bbb",
                      }}
                    />
                  </SelectedOption>
                  {isOpen && (
                    <OptionsList>
                      {dayList.map((item, index) => (
                        <OptionItem
                          key={index}
                          onClick={() => handleOptionClick(item)}
                        >
                          {item}
                        </OptionItem>
                      ))}
                    </OptionsList>
                  )}
                </div>
                <PlanDateDiv>{`${planDetailData.startDate} - ${planDetailData.endDate}`}</PlanDateDiv>
              </Wrapper>
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
                  cityId={planDetailData.cityId}
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
            planMasterId={id}
            peopleCnt={planDetailData.peopleCnt}
            isSlide={isSlide}
            allPrice={allPrice}
            setAllPrice={setAllPrice}
          />
        )}
      </LayoutDiv>
      {/* SchedulePush */}
      {isClick ? (
        <ContentDiv>
          <form
            onSubmit={handleSubmit(handleSubmitData)}
            style={{ position: "relative" }}
          >
            <h2>일정등록</h2>
            <SmallTitleDiv>시간</SmallTitleDiv>
            {/* <TimeTitleDiv>
            <div>시작</div>
            <div>종료</div>
          </TimeTitleDiv> */}
            <TimeDiv>
              <TimeInput
                type="time"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
              <TimeInput
                type="time"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
              />
            </TimeDiv>
            <SmallTitleDiv>장소 이름</SmallTitleDiv>
            <TextInput type="text" value={selectedItem.placeName} readOnly />

            <SmallTitleDiv>분류</SmallTitleDiv>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CateDiv
                onClick={() => setSelectedCate("place")}
                style={{
                  backgroundColor:
                    selectedCate === "place" ? "#1270B0" : "#eee",
                  color: selectedCate === "place" ? "#fff" : "#000",
                }}
              >
                명소
              </CateDiv>
              <CateDiv
                onClick={() => setSelectedCate("hotel")}
                style={{
                  backgroundColor:
                    selectedCate === "hotel" ? "#1270B0" : "#eee",
                  color: selectedCate === "hotel" ? "#fff" : "#000",
                }}
              >
                숙소
              </CateDiv>
              <CateDiv
                onClick={() => setSelectedCate("restaurant")}
                style={{
                  backgroundColor:
                    selectedCate === "restaurant" ? "#1270B0" : "#eee",
                  color: selectedCate === "restaurant" ? "#fff" : "#000",
                }}
              >
                음식점
              </CateDiv>
            </div>
            <SmallTitleDiv>주소</SmallTitleDiv>
            <TextInput type="text" value={selectedItem.addressName} readOnly />
            <div style={{ display: "flex", gap: 235 }}>
              <SmallTitleDiv>비용</SmallTitleDiv>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <CostInput
                placeholder="비용을 입력해주세요"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
            <SmallTitleDiv>메모</SmallTitleDiv>
            <textarea
              style={{
                padding: 10,
                width: "100%",
                height: 80,
                overflowY: "auto",
                marginBottom: 20,
                borderRadius: 4,
                border: "1px solid #ddd",
                resize: "none",
              }}
              value={memo}
              onChange={e => setMemo(e.target.value)}
            ></textarea>
            <button type="submit" className="btnSubmit">
              등록
            </button>
            <ExitBtn
              type="button"
              onClick={() => {
                setIsClick(false);
                setSelectedCate("place");
                setPlaceData(initData);
              }}
            >
              <IoMdCloseCircle style={{ width: "100%", height: "100%" }} />
            </ExitBtn>
          </form>
        </ContentDiv>
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
export default EditPlannerPage;
