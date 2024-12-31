// "일정등록" 모달창 띄우기

import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";

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

const CostInput = styled(TimeInput)``;
const CountInput = styled(TimeInput)``;

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
}) => {
  const { handleSubmit } = useForm();
  const handleSubmitData = () => {};
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
          <TimeInput type="time" defaultValue="10:00" />
          <TimeInput type="time" defaultValue="22:00" />
        </TimeDiv>
        <SmallTitleDiv>장소 이름</SmallTitleDiv>
        <TextInput type="text" value={selectedItem.placeName} readOnly />

        <SmallTitleDiv>분류</SmallTitleDiv>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CateDiv
            onClick={() => setSelectedCate("명소")}
            style={{
              backgroundColor: selectedCate === "명소" ? "#5469D4" : "#ddd",
              color: selectedCate === "명소" ? "#fff" : "#000",
            }}
          >
            명소
          </CateDiv>
          <CateDiv
            onClick={() => setSelectedCate("숙소")}
            style={{
              backgroundColor: selectedCate === "숙소" ? "#5469D4" : "#ddd",
              color: selectedCate === "숙소" ? "#fff" : "#000",
            }}
          >
            숙소
          </CateDiv>
          <CateDiv
            onClick={() => setSelectedCate("교통")}
            style={{
              backgroundColor: selectedCate === "교통" ? "#5469D4" : "#ddd",
              color: selectedCate === "교통" ? "#fff" : "#000",
            }}
          >
            교통
          </CateDiv>
          <CateDiv
            onClick={() => setSelectedCate("음식점")}
            style={{
              backgroundColor: selectedCate === "음식점" ? "#5469D4" : "#ddd",
              color: selectedCate === "음식점" ? "#fff" : "#000",
            }}
          >
            음식점
          </CateDiv>
        </div>
        <SmallTitleDiv>주소</SmallTitleDiv>
        <TextInput type="text" value={selectedItem.addressName} readOnly />
        <div style={{ display: "flex", gap: 235 }}>
          <SmallTitleDiv>비용</SmallTitleDiv>
          <SmallTitleDiv>인원수</SmallTitleDiv>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <CostInput placeholder="비용을 입력해주세요" />
          <CountInput placeholder="인원수를 입력해주세요" />
        </div>
        <SmallTitleDiv>메모</SmallTitleDiv>
        <textarea
          style={{ padding: 10, width: "100%", height: 120, resize: "none" }}
        ></textarea>
        <button type="submit" className="btnSubmit">
          등록
        </button>
        <ExitBtn
          type="button"
          onClick={() => {
            setIsClick(false);
            setSelectedCate("명소");
          }}
        >
          <IoMdCloseCircle style={{ width: "100%", height: "100%" }} />
        </ExitBtn>
      </form>
    </ContentDiv>
  );
};
export default SchedulePush;
