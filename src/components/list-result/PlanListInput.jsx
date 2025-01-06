import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants/login";
import { PostCity } from "../../pages/planning/plan";
import { WrapDiv } from "../common";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const PlanTitleDiv = styled.div`
  margin: 0 auto;
  background-color: #5469d4;
  border-radius: 8px;
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

const CostSummaryDiv = styled.div`
  margin: 0 auto;
  background-color: #7f8edf;
  max-width: 1024px;
  height: 60px;
  display: flex;
  border-radius: 8px;
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
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  &:nth-of-type(2n) {
    background-color: #efefef;
    border-color: transparent;
  }
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
  isSlide,
  allPrice,
  setAllPrice,
}) => {
  const [planId, setPlanId] = useState("");

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
      return "숙소";
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

  const getPriceAll = async () => {
    try {
      const res = await axios.get(`/api/plan/sum?planMasterId=${planMasterId}`);
      // console.log(allPrice);
      const result = res.data.resultData;
      setAllPrice(result.price);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlanDetail = async () => {
    try {
      await axios.delete(`/api/plan/detail?planId=${planId}`);
      alert("삭제 되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrice();
    getPlanData();
    getPriceAll();
  }, [selectedOption]);

  useEffect(() => {
    setPlanId(planId);
  }, [planId]);

  return (
    <WrapDiv
      style={{
        margin: 0,
        marginTop: 100,
        width: 1024,
        height: 800,
        marginLeft: isSlide ? "340px" : "620px",
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
        <div style={{ width: "5%" }}></div>
        <div style={{ width: "5%", marginRight: 20 }}></div>
      </PlanTitleDiv>
      <div style={{ overflowY: "auto", height: 500 }}>
        {planListData.map(item => {
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
              <PriceDiv>
                {Math.ceil(item.price / peopleCnt / 100) * 100}
              </PriceDiv>
              <SumPriceDiv>{item.price}</SumPriceDiv>
              <MemoDiv>{item.memo}</MemoDiv>
              <button
                style={{
                  backgroundColor: "#fff",
                  border: "none",
                  width: "5%",
                  color: "#999",
                }}
              >
                <FaEdit style={{ fontSize: 30 }} />
                <div style={{ fontSize: 12 }}>수정</div>
              </button>
              <button
                style={{
                  backgroundColor: "#fff",
                  border: "none",
                  width: "5%",
                  color: "#999",
                  marginRight: 20,
                }}
                onClick={() => {
                  setPlanId(item.planId);
                  deletePlanDetail();
                }}
              >
                <RiDeleteBin6Fill style={{ fontSize: 30 }} />
                <div style={{ fontSize: 12 }}>삭제</div>
              </button>
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
        <PriceDiv>{Math.ceil(datePrice / peopleCnt / 100) * 100}</PriceDiv>
        <div style={{ width: "20%" }}>총 비용</div>
        <SumPriceDiv>{datePrice}</SumPriceDiv>
        <div style={{ width: "20%" }}>여행 총 비용</div>
        <SumPriceDiv>{allPrice}</SumPriceDiv>
      </CostSummaryDiv>
    </WrapDiv>
  );
};
export default PlanListInput;
