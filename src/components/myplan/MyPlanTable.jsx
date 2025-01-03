import { useEffect, useState } from "react";
// comp
import axios from "axios";
import { useParams } from "react-router-dom";
// styled
import styled from "@emotion/styled";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  ChoiceDiv,
  DetailContentDiv,
  TableDiv,
} from "../../pages/mypage/plan-list/myplan";

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
  const [cnt, setCnt] = useState(0);
  const [planDate, setPlanDate] = useState();

  console.log(id);

  const cateChange = item => {
    if (item.category === "hotel") {
      return "호텔";
    }
    if (item.category === "place") {
      return "명소";
    }
    if (item.category === "restaurant") {
      return "음식점";
    }
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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

  const getPriceDate = async _id => {
    try {
      const res = await axios.get(`/api/plan/day?planMasterId=${_id}`);
      datePriceChange(res);
    } catch (error) {
      console.log(error);
    }
  };

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

  const planListDataChange = data => {
    if (selectedOption === "1일차") {
      const filterData = data.filter(item => item.date === 1);
      setMyPlan(filterData);
    }
    if (selectedOption === "2일차") {
      const filterData = data.filter(item => item.date === 2);
      setMyPlan(filterData);
    }
    if (selectedOption === "3일차") {
      const filterData = data.filter(item => item.date === 3);
      setMyPlan(filterData);
    }
    if (selectedOption === "4일차") {
      const filterData = data.filter(item => item.date === 4);
      setMyPlan(filterData);
    }
    if (selectedOption === "5일차") {
      const filterData = data.filter(item => item.date === 5);
      setMyPlan(filterData);
    }
  };

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
  useEffect(() => {
    getPlanDetail(id);
    getPriceDate(id);
    getPriceAll(id);
    console.log("몇명??", cnt);
  }, [cnt, selectedOption]);

  useEffect(() => {
    setDayList(Array.from({ length: planDate + 1 }, (_, i) => `${i + 1}일차`));
  }, [planDate]);
  return (
    <div>
      <DetailContentDiv>
        <ChoiceDiv>
          <SelectedOption onClick={() => setIsOpen(prev => !prev)}>
            {selectedOption}
            <TiArrowSortedDown
              style={{ position: "absolute", right: "12px", color: "#bbb" }}
            />
          </SelectedOption>
          {isOpen && (
            <OptionsList>
              {dayList.map((item, index) => (
                <OptionItem key={index} onClick={() => handleOptionClick(item)}>
                  {item}
                </OptionItem>
              ))}
            </OptionsList>
          )}
          <div className="cate-btn">
            <button>전체</button>
            <button>명소</button>
            <button>음식점</button>
            <button>숙소</button>
          </div>
        </ChoiceDiv>
        <TableDiv>
          <ul className="t-title">
            <li>
              <p>시간</p>
            </li>
            <li>
              <p>일정</p>
            </li>
            <li>
              <p>위치</p>
            </li>
            <li>
              <p>1인 비용</p>
            </li>
            <li>
              <p>총 비용</p>
            </li>
            <li>
              <p>메모</p>
            </li>
          </ul>
          <ul className="t-content">
            {myPlan.map(item => {
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
                        <em>{cateChange(item)}</em>
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
