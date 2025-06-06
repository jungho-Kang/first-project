import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// styled
import {
  BtnAreaDiv,
  ChoiceDiv,
  DetailContentDiv,
  TableDiv,
  TableTopDiv,
} from "../../pages/mypage/plan-list/myplan";
import {
  CateEm,
  MemoPopupDiv,
  OptionItem,
  OptionsList,
  SelectedOption,
} from "./mydetailplan";
// icon
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { useRecoilState } from "recoil";
import {
  allPriceState,
  datePriceState,
  dayListState,
  selectedOptionState,
} from "../../atoms/planDetailAtom";

const MyPlanTable = ({ id }) => {
  // 선택된 일차 (게시글)
  const [selectedOption, setSelectedOption] =
    useRecoilState(selectedOptionState);
  // 일차 정보 저장
  const [dayList, setDayList] = useRecoilState(dayListState);
  // 일차 선택 state
  const [isOpen, setIsOpen] = useState(false);
  // 일차별 가격
  const [datePrice, setDatePrice] = useRecoilState(datePriceState);
  // 총 가격
  const [allPrice, setAllPrice] = useRecoilState(allPriceState);

  const [myPlan, setMyPlan] = useState([]);
  const [filterPlan, setFilterPlan] = useState([]); // 필터링된 일정
  const [cnt, setCnt] = useState(0); // 인원
  const [planDate, setPlanDate] = useState();
  const [startEndDate, setStartEndDate] = useState({
    endDate: "",
    startDate: "",
  });

  const [planDetailPop, setPlanDetailPop] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { pathname } = useLocation();
  const tableTitle = ["시간", "일정", "위치", "1인비용", "총비용", "메모"];
  // console.log(id);

  const cateChange = item => {
    if (item.category === "hotel") {
      return "숙소";
    }
    if (item.category === "place") {
      return "명소";
    }
    if (item.category === "restaurant") {
      return "음식점";
    }
  };

  // 선택된 옵션 처리
  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  // 데이터 가져오기
  const getPlanDetail = async _id => {
    // http://112.222.157.157:5212/api/plan?planMasterId=1
    try {
      const res = await axios.get(`/api/plan?planMasterId=${_id}`);
      const result = res.data.resultData;
      setPlanDate(result.planDate);
      setCnt(result.peopleCnt);
      setMyPlan(result.selPlanDtoList);
      setStartEndDate({
        endDate: result.endDate,
        startDate: result.startDate,
      });

      planListDataChange(result.selPlanDtoList);
    } catch (error) {
      console.log(error);
    }
  };

  // 가격 가져오기
  const getPriceDate = async _id => {
    try {
      const res = await axios.get(`/api/plan/day?planMasterId=${_id}`);
      datePriceChange(res);
    } catch (error) {
      console.log(error);
    }
  };

  // 전체 가격 가져오기
  const getPriceAll = async _id => {
    try {
      const res = await axios.get(`/api/plan/sum?planMasterId=${_id}`);
      // console.log(allPrice);
      const result = res.data.resultData;
      setAllPrice(result.price);
    } catch (error) {
      console.log(error);
    }
  };

  // 일정 데이터 필터링
  const filterPlansByDay = (data, day) => {
    return data.filter(item => item.date === day);
  };

  // 가격 변경
  const datePriceChange = res => {
    const result = res.data.resultData;
    const dayIndex = Number(selectedOption.replace("일차", "")) - 1;
    if (dayIndex >= 0 && dayIndex < result.length) {
      setDatePrice(result[dayIndex]?.price);
    } else {
      setDatePrice(0);
    }
  };

  // 카테고리 필터 처리
  const handleCateFilter = category => {
    let filtered = filterPlansByDay(myPlan, parseInt(selectedOption[0])); // 선택된 일차에 맞는 필터링

    if (category !== "전체") {
      filtered = filtered.filter(item => cateChange(item) === category);
    }

    setFilterPlan(filtered);
  };

  // 일정 데이터 필터링
  const planListDataChange = data => {
    const dayIndex = parseInt(selectedOption.replace("일차", ""));
    const filterData = data.filter(item => item.date === dayIndex);
    setMyPlan(filterData);
  };

  // 카테고리 색상 지정
  const getCateColor = category => {
    switch (category) {
      case "전체":
        return "#333";
      case "명소":
        return "#1270b0";
      case "음식점":
        return "#ea4335";
      case "숙소":
        return "#fbbc04";
      default:
        return "transparent";
    }
  };

  // 팝업
  const togglePlanPop = () => {
    setPlanDetailPop(!planDetailPop);
  };

  // 날짜 목록 업데이트
  useEffect(() => {
    setDayList(Array.from({ length: planDate + 1 }, (_, i) => `${i + 1}일차`));
  }, [planDate, datePrice]);

  // 일정 목록 상태 업데이트 (일차와 카테고리 필터링)
  useEffect(() => {
    const filteredPlan = filterPlansByDay(myPlan, parseInt(selectedOption[0])); // 선택된 일차만 필터링
    setFilterPlan(filteredPlan);
  }, [myPlan, selectedOption]);

  // 일정 목록 상태 업데이트
  useEffect(() => {
    getPlanDetail(id);
    getPriceDate(id);
    getPriceAll(id);
  }, [cnt, selectedOption]);

  // 1일차로 초기화
  useEffect(() => {
    setSelectedOption("1일차");
  }, []);
  return (
    <div>
      <DetailContentDiv>
        <TableTopDiv>
          <ChoiceDiv style={{ justifyContent: "start", gap: 15 }}>
            <SelectedOption onClick={() => setIsOpen(prev => !prev)}>
              {selectedOption}
              <TiArrowSortedDown />
            </SelectedOption>
            {isOpen && (
              <OptionsList style={{ left: 0, top: 46 }}>
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
            <div className="cate-btn">
              <button
                onClick={() => {
                  handleCateFilter("전체");
                }}
              >
                전체
              </button>
              <button
                onClick={() => {
                  handleCateFilter("명소");
                }}
              >
                명소
              </button>
              <button
                onClick={() => {
                  handleCateFilter("음식점");
                }}
              >
                음식점
              </button>
              <button
                onClick={() => {
                  handleCateFilter("숙소");
                }}
              >
                숙소
              </button>
            </div>
          </ChoiceDiv>
          {pathname === `/myplanlist/${id}` ? (
            <BtnAreaDiv>
              <Link to={`/myplanlist/editplanner/${id}`}>일정 수정</Link>
              <Link to={`/myplanlist/writepost/${id}`}>다녀ON 리뷰작성</Link>
            </BtnAreaDiv>
          ) : (
            <></>
          )}
        </TableTopDiv>
        <TableDiv>
          <ul className="t-title">
            {tableTitle.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
          {filterPlan.length === 0 ? (
            <p className="empty-list">일정이 없습니다</p>
          ) : (
            <ul className="t-content">
              {filterPlan.map(item => {
                const cateColor = getCateColor(cateChange(item));
                return (
                  <li
                    key={item.planId}
                    className="item"
                    onClick={() => {
                      setSelectedItem(item);
                      togglePlanPop();
                    }}
                  >
                    <ul>
                      <li>
                        <p>
                          {item.startTime} - {item.endTime}
                        </p>
                      </li>
                      <li>
                        <p>
                          <CateEm
                            style={{
                              backgroundColor: cateColor,
                            }}
                          >
                            {cateChange(item)}
                          </CateEm>
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>{item.placeName}</b>
                          <strong>{item.placeAddress}</strong>
                        </p>
                      </li>
                      <li>
                        <p>
                          {(
                            Math.ceil(item.price / cnt / 100) * 100
                          ).toLocaleString()}
                        </p>
                      </li>
                      <li>
                        <p>{item.price.toLocaleString()}</p>
                      </li>
                      <li>
                        <p>{item.memo}</p>
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          )}
          <ul className="t-result">
            <li>
              <p>{selectedOption}</p>
            </li>
            <li>
              <p>1인당 비용</p>
            </li>
            <li>
              <p>
                {(Math.ceil(datePrice / cnt / 100) * 100).toLocaleString()} 원
              </p>
            </li>
            <li>
              <p>총 비용</p>
            </li>
            <li>
              <p>{datePrice.toLocaleString()} 원</p>
            </li>
            <li>
              <p>여행 총 비용</p>
            </li>
            <li>
              <p>{allPrice.toLocaleString()} 원</p>
            </li>
          </ul>
        </TableDiv>
      </DetailContentDiv>
      {planDetailPop && selectedItem && (
        <MemoPopupDiv>
          <div className="layer">
            <h4 className="tit">
              <em>[{cateChange(selectedItem)}]</em> {selectedItem.placeName}
            </h4>
            <div className="scheduleInfo">
              <div>
                <b>기간</b>
                <p>
                  {" "}
                  {startEndDate.startDate} - {startEndDate.endDate}({" "}
                  {selectedItem.date}일차 )
                </p>
              </div>
              <div>
                <b>시간</b>
                <p>
                  {selectedItem.startTime} - {selectedItem.endTime}
                </p>
              </div>
              <div>
                <b>장소</b>
                <p>{selectedItem.placeAddress}</p>
              </div>
            </div>

            <div className="price">
              <div>
                <b>1인 기준 비용</b>
                <p>
                  {(
                    Math.ceil(selectedItem.price / cnt / 100) * 100
                  ).toLocaleString()}
                  원
                </p>
              </div>
              <div>
                <b>전체 비용 </b>
                <p>{selectedItem.price.toLocaleString()} 원</p>
              </div>
            </div>
            <div className="memo">
              <b>메모</b>
              <span>{selectedItem.memo}</span>
            </div>
            <button
              onClick={() => {
                togglePlanPop();
              }}
            >
              <IoClose />
            </button>
          </div>
        </MemoPopupDiv>
      )}
    </div>
  );
};

export default MyPlanTable;
