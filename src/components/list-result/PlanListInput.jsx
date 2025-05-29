import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useRecoilState, useRecoilValue } from "recoil";
import { planMasterIdState } from "../../atoms/planAtom";
import {
  allPriceState,
  datePriceState,
  selectedOptionState,
} from "../../atoms/planDetailAtom";
import { API_URL } from "../../constants/login";
import { PostCity } from "../../pages/planning/plan";
import { WrapDiv } from "../common";

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
  color: #777;
`;

const PlanListInput = ({
  peopleCnt,
  planListData,
  setPlanListData,
  isSlide,
}) => {
  // 플랜 마스터 아이디
  const planMasterId = useRecoilValue(planMasterIdState);

  // 선택된 일차
  const selectedOption = useRecoilValue(selectedOptionState);
  // 일차별 가격
  const [datePrice, setDatePrice] = useRecoilState(datePriceState);
  // 총 가격
  const [allPrice, setAllPrice] = useRecoilState(allPriceState);
  const [isEdit, setIsEdit] = useState(false);

  const [myData, setMyData] = useState({
    category: "",
    placeName: "",
    addressName: "",
  });

  const [putPlanData, setPutPlanData] = useState({
    planId: 0,
    placeId: 0,
    price: 0,
    memo: "",
    startTime: "",
    endTime: "",
    date: "",
  });

  const { handleSubmit } = useForm();

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

  const putPlan = async item => {
    try {
      await axios.put(`/api/plan`, item);
      getPrice();
      getPlanData();
      getPriceAll();
      alert("수정 되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitData = async () => {
    await putPlan(putPlanData);
    // console.log(putPlanData);
    setIsEdit(false);
  };

  // 수정 필요함!!!!!!!
  const getPrice = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/plan/day?planMasterId=${planMasterId}`,
      );
      console.log("니 뭐고!!!!!!!!!!!!", res);
      datePriceChange(res);
      // console.log("getPrice 응답 데이터:", res.data);

      // console.log("get 받아왔다", res.data.resultData);
    } catch (error) {
      console.log(error);
      // 수정 필요함
      setDatePrice(0);
      setAllPrice(0);
    }
  };

  const getPlanData = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/plan?planMasterId=${planMasterId}`,
      );
      planListDataChange(res.data?.resultData?.selPlanDtoList);
    } catch (error) {
      console.log(error);
      // 에러 발생 이유가 selPlanDtoList가 비어 있으면 get 할 때 에러 발생하는 거 같음
      setPlanListData([]);
    }
  };
  const getPriceAll = async () => {
    try {
      const res = await axios.get(`/api/plan/sum?planMasterId=${planMasterId}`);
      const result = res.data.resultData;
      setAllPrice(result.price);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlanDetail = async _id => {
    try {
      await axios.delete(`/api/plan/detail?planId=${_id}`);
      getPrice();
      getPlanData();
      getPriceAll();
      alert("삭제 되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setDatePrice(0);
    setAllPrice(0);
  }, []);

  useEffect(() => {
    getPrice();
    getPlanData();
    getPriceAll();
  }, [selectedOption]);

  return (
    <>
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
          <div style={{ width: "20%" }}>시간</div>
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
                <div style={{ width: "20%" }}>
                  {item.startTime} - {item.endTime}
                </div>
                <PlanDiv>
                  <PostCity>{cateChange(item)}</PostCity>
                </PlanDiv>
                <LocationDiv>
                  {item.placeName}
                  <SubLocationDiv>{item.placeAddress}</SubLocationDiv>
                </LocationDiv>
                <PriceDiv>
                  {(
                    Math.ceil(item.price / peopleCnt / 100) * 100
                  ).toLocaleString()}
                </PriceDiv>
                <SumPriceDiv>{item.price.toLocaleString()}</SumPriceDiv>
                <MemoDiv>{item.memo}</MemoDiv>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    width: "5%",
                    color: "#999",
                  }}
                  onClick={() => {
                    setIsEdit(true);
                    setPutPlanData({
                      planId: item.planId,
                      placeId: item.placeId,
                      startTime: item.startTime,
                      endTime: item.endTime,
                      price: item.price,
                      memo: item.memo,
                      date: item.date,
                    });
                    setMyData({
                      placeName: item.placeName,
                      category: item.category,
                      addressName: item.placeAddress,
                    });
                  }}
                >
                  <FaEdit style={{ fontSize: 30 }} />
                  <div style={{ fontSize: 12 }}>수정</div>
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    width: "5%",
                    color: "#999",
                    marginRight: 20,
                  }}
                  onClick={() => {
                    deletePlanDetail(item.planId);
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
          <PriceDiv>
            {(Math.ceil(datePrice / peopleCnt / 100) * 100).toLocaleString()}
          </PriceDiv>
          <div style={{ width: "20%" }}>총 비용</div>
          <SumPriceDiv>{datePrice.toLocaleString()}</SumPriceDiv>
          <div style={{ width: "20%" }}>여행 총 비용</div>
          <SumPriceDiv>{allPrice.toLocaleString()}</SumPriceDiv>
        </CostSummaryDiv>
      </WrapDiv>
      {isEdit ? (
        <ContentDiv>
          <form
            onSubmit={handleSubmit(handleSubmitData)}
            style={{ position: "relative" }}
          >
            <h2>일정등록</h2>
            <SmallTitleDiv>시간</SmallTitleDiv>

            <TimeDiv>
              <TimeInput
                type="time"
                value={putPlanData.startTime}
                onChange={e =>
                  setPutPlanData(prev => ({
                    ...prev,
                    startTime: e.target.value,
                  }))
                }
              />
              <TimeInput
                type="time"
                value={putPlanData.endTime}
                onChange={e =>
                  setPutPlanData(prev => ({ ...prev, endTime: e.target.value }))
                }
              />
            </TimeDiv>
            <SmallTitleDiv>장소 이름</SmallTitleDiv>
            <TextInput type="text" value={myData.placeName} readOnly />

            <SmallTitleDiv>분류</SmallTitleDiv>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CateDiv
                onClick={() =>
                  setMyData(prev => ({ ...prev, category: "place" }))
                }
                style={{
                  backgroundColor:
                    myData.category === "place" ? "#1270B0" : "#eee",
                  color: myData.category === "place" ? "#fff" : "#000",
                }}
              >
                명소
              </CateDiv>
              <CateDiv
                onClick={() =>
                  setMyData(prev => ({ ...prev, category: "hotel" }))
                }
                style={{
                  backgroundColor:
                    myData.category === "hotel" ? "#1270B0" : "#eee",
                  color: myData.category === "hotel" ? "#fff" : "#000",
                }}
              >
                숙소
              </CateDiv>
              <CateDiv
                onClick={() =>
                  setMyData(prev => ({ ...prev, category: "restaurant" }))
                }
                style={{
                  backgroundColor:
                    myData.category === "restaurant" ? "#1270B0" : "#eee",
                  color: myData.category === "restaurant" ? "#fff" : "#000",
                }}
              >
                음식점
              </CateDiv>
            </div>
            <SmallTitleDiv>주소</SmallTitleDiv>
            <TextInput type="text" value={myData.addressName} readOnly />
            <div style={{ display: "flex", gap: 235 }}>
              <SmallTitleDiv>비용</SmallTitleDiv>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <CostInput
                placeholder="비용을 입력해주세요"
                value={putPlanData.price}
                onChange={e =>
                  setPutPlanData(prev => ({ ...prev, price: e.target.value }))
                }
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
              value={putPlanData.memo}
              onChange={e =>
                setPutPlanData(prev => ({ ...prev, memo: e.target.value }))
              }
            ></textarea>
            <button type="submit" className="btnSubmit">
              등록
            </button>
            <ExitBtn
              type="button"
              onClick={() => {
                setIsEdit(false);
              }}
            >
              <IoMdCloseCircle style={{ width: "100%", height: "100%" }} />
            </ExitBtn>
          </form>
        </ContentDiv>
      ) : (
        <></>
      )}
    </>
  );
};
export default PlanListInput;
