import styled from "@emotion/styled";

const ContentDiv = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 40px;
`;

const SmallTitleDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

const TimeTitleDiv = styled.div`
  display: flex;
  gap: 200px;
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

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding-left: 10px;
`;

const SchedulePush = () => {
  return (
    <ContentDiv>
      <SmallTitleDiv>시간</SmallTitleDiv>
      <TimeTitleDiv>
        <div>시작</div>
        <div>종료</div>
      </TimeTitleDiv>
      <TimeDiv>
        <TimeInput type="time" defaultValue="12:00" />
        <TimeInput type="time" defaultValue="12:00" />
      </TimeDiv>
      <SmallTitleDiv>장소</SmallTitleDiv>
      <TextInput type="text" placeholder="장소명을 입력하세요" />
    </ContentDiv>
  );
};
export default SchedulePush;
