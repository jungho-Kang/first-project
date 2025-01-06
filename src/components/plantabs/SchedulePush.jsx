// "일정등록" 모달창 띄우기

import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants/login";

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
  detailData,
  setDetailData,
}) => {
  const { id } = useParams();

  // // 보낼 Plan 데이터 초기 값
  // const initDetailData = {
  //   planMasterId: 0,
  //   placeId: 0,
  //   price: 0,
  //   memo: "",
  //   startTime: "",
  //   endTime: "",
  //   date: "",
  //   newPlacePostReq: {
  //     cityId: 0,
  //     placeAddress: "",
  //     placeName: "",
  //     category: "",
  //     lat: 0,
  //     lng: 0,
  //   },
  // };

  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("22:00");
  const [price, setPrice] = useState();
  const [memo, setMemo] = useState("");

  const postPlanDetail = async item => {
    try {
      await axios.post(`${API_URL}/plan/detail`, item);
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
  }, [startTime, endTime, price, selectedCate, memo, selectedOption]);
  return (
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
              backgroundColor: selectedCate === "place" ? "#1270B0" : "#eee",
              color: selectedCate === "place" ? "#fff" : "#000",
            }}
          >
            명소
          </CateDiv>
          <CateDiv
            onClick={() => setSelectedCate("hotel")}
            style={{
              backgroundColor: selectedCate === "hotel" ? "#1270B0" : "#eee",
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
  );
};
export default SchedulePush;
