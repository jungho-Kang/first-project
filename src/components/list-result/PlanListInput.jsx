import styled from "@emotion/styled";
import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../../constants/login";
import { PostCity } from "../../pages/planning/plan";
import { WrapDiv } from "../common";

const PlanTitleDiv = styled.div`
  margin: 0 auto;
  background-color: #ffff80;
  max-width: 1024px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  color: #009800;
  align-items: center;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

const CostSummaryDiv = styled.div`
  margin: 0 auto;
  background-color: #7f8edf;
  max-width: 1024px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

const PlanContentDiv = styled.div`
  margin: 0 auto;
  padding: 15px 0;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
`;
const TimeDiv = styled.div`
  width: 20%;
`;
const PlanDiv = styled.div`
  width: 5%;
  display: flex;
  justify-content: center;
`;
const LocationDiv = styled.div`
  width: 30%;
`;
const PriceDiv = styled.div`
  width: 10%;
`;
const SumPriceDiv = styled.div`
  width: 10%;
`;
const MemoDiv = styled.div`
  width: 35%;
`;

const SubLocationDiv = styled.div`
  margin-top: 10px;
  font-size: 10px;
  font-weight: 100;
  color: #999;
`;

const PlanListInput = ({
  planListData,
  setPlanListData,
  selectedOption,
  datePrice,
  setDatePrice,
  planMasterId,
  peopleCnt,
}) => {
  const getPrice = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/plan/day?planMasterId=${planMasterId}`,
      );
      datePriceChange(res);
      console.log("getPrice 응답 데이터:", res.data);

      console.log("get 받아왔다", res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlanData = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/plan?planMasterId=${planMasterId}`,
      );
      planListDataChange(res.data.resultData.selPlanDtoList);
    } catch (error) {
      console.log(error);
    }
  };

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

  const planListDataChange = data => {
    if (selectedOption === "1일차") {
      const filterData = data.filter(item => item.date === 1);
      setPlanListData(filterData);
    }
    if (selectedOption === "2일차") {
      const filterData = data.filter(item => item.date === 2);
      setPlanListData(filterData);
    }
    if (selectedOption === "3일차") {
      const filterData = data.filter(item => item.date === 3);
      setPlanListData(filterData);
    }
    if (selectedOption === "4일차") {
      const filterData = data.filter(item => item.date === 4);
      setPlanListData(filterData);
    }
    if (selectedOption === "5일차") {
      const filterData = data.filter(item => item.date === 5);
      setPlanListData(filterData);
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
    getPrice();
    getPlanData();
  }, [selectedOption, datePrice]);

  return (
    <WrapDiv
      style={{
        margin: 0,
        marginLeft: 200,
        marginTop: 100,
        width: 1024,
        height: 800,
      }}
    >
      <h1 style={{ marginBottom: 30, fontSize: 30, fontWeight: 700 }}>
        {selectedOption}
      </h1>
      <PlanTitleDiv>
        <TimeDiv>시간</TimeDiv>
        <PlanDiv>일정</PlanDiv>
        <LocationDiv>위치</LocationDiv>
        <PriceDiv>
          금액
          <br />
          (1인당 금액)
        </PriceDiv>
        <SumPriceDiv>총금액</SumPriceDiv>
        <MemoDiv>메모</MemoDiv>
      </PlanTitleDiv>
      <div style={{ overflowY: "auto", height: 500 }}>
        {planListData.map(item => {
          console.log("응?", planMasterId);
          return (
            <PlanContentDiv key={`${item.planId}`}>
              <TimeDiv>
                {item.startTime} - {item.endTime}
              </TimeDiv>
              <PlanDiv>
                <PostCity>{cateChange(item)}</PostCity>
              </PlanDiv>
              <LocationDiv>
                {item.placeName}
                <SubLocationDiv>{item.placeAddress}</SubLocationDiv>
              </LocationDiv>
              <PriceDiv>{item.price / peopleCnt}</PriceDiv>
              <SumPriceDiv>{item.price}</SumPriceDiv>
              <MemoDiv>{item.memo}</MemoDiv>
            </PlanContentDiv>
          );
        })}
      </div>
      <CostSummaryDiv>
        <div
          style={{ width: "10%", display: "flex", justifyContent: "center" }}
        >
          <PostCity style={{ backgroundColor: "#000" }}>전체</PostCity>
        </div>
        <div style={{ width: "20%" }}>1인당 비용</div>
        <PriceDiv>{datePrice / peopleCnt}</PriceDiv>
        <div style={{ width: "20%" }}>총 비용</div>
        <SumPriceDiv>{datePrice}</SumPriceDiv>
      </CostSummaryDiv>
    </WrapDiv>
  );
};
export default PlanListInput;
