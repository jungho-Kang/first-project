import { useEffect, useState } from "react";
// comp
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// styled
import { TiArrowSortedDown } from "react-icons/ti";
import {
  BtnAreaDiv,
  ChoiceDiv,
  DetailContentDiv,
  TableDiv,
  TableTopDiv,
} from "../../pages/mypage/plan-list/myplan";
import {
  CateEm,
  OptionItem,
  OptionsList,
  SelectedOption,
} from "./mydetailplan";

const MyPlanTable = ({
  selectedOption,
  setSelectedOption,
  setIsOpen,
  isOpen,
  dayList,
  setDayList,
  datePrice,
  setDatePrice,
  allPrice,
  setAllPrice,
}) => {
  const { id } = useParams();
  const [myPlan, setMyPlan] = useState([]);
  const [filterPlan, setFilterPlan] = useState([]); // 필터링된 일정
  const [cnt, setCnt] = useState(0);
  const [planDate, setPlanDate] = useState();
  const tableTitle = ["시간", "일정", "위치", "1일비용", "총비용", "메모"];
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
    // http://112.222.157.156:5212/api/plan?planMasterId=1

    try {
      const res = await axios.get(`/api/plan?planMasterId=${_id}`);
      setPlanDate(res.data.resultData.planDate);
      setCnt(res.data.resultData.peopleCnt);
      setMyPlan(res.data.resultData.selPlanDtoList);
      planListDataChange(res.data.resultData.selPlanDtoList);
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
      // console.log("이거 어디갔냐!!!!!!!!!!", res.data.resultData.price);
      console.log(allPrice);
      setAllPrice(res.data.resultData.price);
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
    if (selectedOption === "1일차") {
      setDatePrice(res.data.resultData[0].price);
    }
    if (selectedOption === "2일차") {
      setDatePrice(res.data.resultData[1].price);
    }
    if (selectedOption === "3일차") {
      setDatePrice(res.data.resultData[2].price);
    }
    if (selectedOption === "4일차") {
      setDatePrice(res.data.resultData[3].price);
    }
    if (selectedOption === "5일차") {
      setDatePrice(res.data.resultData[4].price);
    }
  };

  // 날짜 목록 업데이트
  useEffect(() => {
    setDayList(Array.from({ length: planDate + 1 }, (_, i) => `${i + 1}일차`));
  }, [planDate]);

  // 일정 목록 상태 업데이트 (일차와 카테고리 필터링)
  useEffect(() => {
    if (selectedOption === "전체") {
      setFilterPlan(myPlan); // 전체 선택 시, 모든 일정 표시
    } else {
      const filteredPlan = filterPlansByDay(
        myPlan,
        parseInt(selectedOption[0]),
      ); // 선택된 일차만 필터링
      setFilterPlan(filteredPlan);
    }
  }, [myPlan, selectedOption]);

  // 카테고리 필터 처리
  const handleCateFilter = category => {
    let filtered =
      selectedOption === "전체"
        ? myPlan // 전체 선택 시 모든 데이터 사용
        : filterPlansByDay(myPlan, parseInt(selectedOption[0])); // 선택된 일차에 맞는 필터링

    if (category !== "전체") {
      filtered = filtered.filter(item => cateChange(item) === category);
    }

    setFilterPlan(filtered);
  };

  // 일정 데이터 필터링
  // const planListDataChange = data => {
  //   if (selectedOption === "1일차") {
  //     const filterData = data.filter(item => item.date === 1);
  //     setMyPlan(filterData);
  //   }
  //   if (selectedOption === "2일차") {
  //     const filterData = data.filter(item => item.date === 2);
  //     setMyPlan(filterData);
  //   }
  //   if (selectedOption === "3일차") {
  //     const filterData = data.filter(item => item.date === 3);
  //     setMyPlan(filterData);
  //   }
  //   if (selectedOption === "4일차") {
  //     const filterData = data.filter(item => item.date === 4);
  //     setMyPlan(filterData);
  //   }
  //   if (selectedOption === "5일차") {
  //     const filterData = data.filter(item => item.date === 5);
  //     setMyPlan(filterData);
  //   }
  // };

  // 일정 목록 상태 업데이트
  useEffect(() => {
    getPlanDetail(id);
    getPriceDate(id);
    getPriceAll(id);
    // console.log("몇명??", cnt);
  }, [cnt, selectedOption]);
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
          <BtnAreaDiv>
            <Link to={"/"}>일정 수정</Link>
            <Link to={"/board/writepost"}>다녀ON 리뷰작성</Link>
          </BtnAreaDiv>
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
                  <li key={item.planId} className="item">
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
                        <p>{item.price / cnt}</p>
                      </li>
                      <li>
                        <p>{item.price}</p>
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
              <p>{datePrice / cnt} 원</p>
            </li>
            <li>
              <p>총 비용</p>
            </li>
            <li>
              <p>{datePrice} 원</p>
            </li>
            <li>
              <p>여행 총 비용</p>
            </li>
            <li>
              <p>{allPrice} 원</p>
            </li>
          </ul>
        </TableDiv>
      </DetailContentDiv>
    </div>
  );
};

export default MyPlanTable;
