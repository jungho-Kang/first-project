// "일정등록" 모달창 띄우기

import styled from "@emotion/styled";

const ContentDiv = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  padding: 50px;
  border-radius: 20px;
  margin-top: 40px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
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
`;

const SchedulePush = () => {
  return (
    <ContentDiv>
      <form>
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
        <TextInput type="text" />
        <SmallTitleDiv>분류</SmallTitleDiv>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CateDiv>명소</CateDiv>
          <CateDiv>숙소</CateDiv>
          <CateDiv>교통</CateDiv>
          <CateDiv>음식점</CateDiv>
        </div>
        <SmallTitleDiv>주소</SmallTitleDiv>
        <TextInput type="text" />
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
      </form>
    </ContentDiv>
  );
};
export default SchedulePush;
