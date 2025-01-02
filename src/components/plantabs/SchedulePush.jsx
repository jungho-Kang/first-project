// "일정등록" 모달창 띄우기

import styled from "@emotion/styled";
import axios from "axios";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { API_URL } from "../../constants/login";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ContentDiv = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  padding: 50px;
  border-radius: 20px;
  margin-top: 40px;
  z-index: 999;
  position: absolute;
  top: calc(50% - 34px);
  right: 0;
  transform: translateY(-50%);
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .btnSubmit {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    background-color: #3825e4;
    color: #fff;
    border-radius: 5px;
    border: none;
  }
`;

const SmallTitleDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

const TimeTitleDiv = styled.div`
  display: flex;
  gap: 235px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #bbb;
  font-size: 12px;
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
`;

const CostInput = styled(TimeInput)`
  width: 100%;
`;

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding-left: 10px;
`;

const CateDiv = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  background-color: #eeeeee;
  line-height: 40px;
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

const SchedulePush = ({
  selectedItem,
  setIsClick,
  setSelectedCate,
  selectedCate,
  initData,
  setPlaceData,
  resDetailData,
  itemLatLng,
  selectedOption,
}) => {
  const { id } = useParams();
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

  const [detailData, setDetailData] = useState(initDetailData);
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("22:00");
  const [price, setPrice] = useState();
  const [memo, setMemo] = useState("");

  const postPlanDetail = async item => {
    try {
      const res = await axios.post(`${API_URL}/plan/detail`, item);
      // console.log(res.data.resultData);
      setDetailData(initDetailData);
    } catch (error) {
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
      planMasterId: resDetailData.planMasterId,
      price: price,
      memo: memo,
      startTime: startTime,
      endTime: endTime,
      date: selectedOption.substring(0, 1),
      newPlacePostReq: {
        cityId: id,
        placeAddress: selectedItem.addressName,
        placeName: selectedItem.placeName,
        category: selectedCate,
        lat: itemLatLng.lat,
        lng: itemLatLng.lng,
      },
    });
    console.log("시작 시간 : ", startTime, "끝 시간 : ", endTime);
    console.log("보낼 데이터 : ", detailData);
  }, [startTime, endTime, price, selectedCate, memo, selectedOption]);
  return (
    <ContentDiv>
      <form
        onSubmit={handleSubmit(handleSubmitData)}
        style={{ position: "relative" }}
      >
        <h2>일정등록</h2>
        <SmallTitleDiv>시간</SmallTitleDiv>
        <TimeTitleDiv>
          <div>시작</div>
          <div>종료</div>
        </TimeTitleDiv>
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
              backgroundColor: selectedCate === "place" ? "#5469D4" : "#ddd",
              color: selectedCate === "place" ? "#fff" : "#000",
            }}
          >
            명소
          </CateDiv>
          <CateDiv
            onClick={() => setSelectedCate("hotel")}
            style={{
              backgroundColor: selectedCate === "hotel" ? "#5469D4" : "#ddd",
              color: selectedCate === "hotel" ? "#fff" : "#000",
            }}
          >
            숙소
          </CateDiv>
          <CateDiv
            onClick={() => setSelectedCate("restaurant")}
            style={{
              backgroundColor:
                selectedCate === "restaurant" ? "#5469D4" : "#ddd",
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
          style={{ padding: 10, width: "100%", height: 120, resize: "none" }}
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
  );
};
export default SchedulePush;
