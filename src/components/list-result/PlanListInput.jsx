import styled from "@emotion/styled";
import { WrapDiv } from "../common";
import { PostCity } from "../../pages/planning/plan";

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

const PlanListInput = () => {
  return (
    <WrapDiv
      style={{
        margin: 0,
        marginLeft: 600,
        marginTop: 100,
        width: 1024,
        height: 800,
      }}
    >
      <h1 style={{ marginBottom: 30, fontSize: 30, fontWeight: 700 }}>1일차</h1>
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
      <div style={{ overflowY: "scroll", height: 500 }}>
        <PlanContentDiv>
          <TimeDiv>09:00 - 10:00</TimeDiv>
          <PlanDiv>
            <PostCity>숙소</PostCity>
          </PlanDiv>
          <LocationDiv>
            신라호텔
            <SubLocationDiv>서울 중구 동호로 249</SubLocationDiv>
          </LocationDiv>
          <PriceDiv>250,000</PriceDiv>
          <SumPriceDiv>250,000</SumPriceDiv>
          <MemoDiv>6시 조식, 11시 체크아웃 핸드폰 충전하기...</MemoDiv>
        </PlanContentDiv>
        <PlanContentDiv>
          <TimeDiv>09:00 - 10:00</TimeDiv>
          <PlanDiv>
            <PostCity>숙소</PostCity>
          </PlanDiv>
          <LocationDiv>
            신라호텔
            <SubLocationDiv>서울 중구 동호로 249</SubLocationDiv>
          </LocationDiv>
          <PriceDiv>250,000</PriceDiv>
          <SumPriceDiv>250,000</SumPriceDiv>
          <MemoDiv>6시 조식, 11시 체크아웃 핸드폰 충전하기...</MemoDiv>
        </PlanContentDiv>
        <PlanContentDiv>
          <TimeDiv>09:00 - 10:00</TimeDiv>
          <PlanDiv>
            <PostCity>숙소</PostCity>
          </PlanDiv>
          <LocationDiv>
            신라호텔
            <SubLocationDiv>서울 중구 동호로 249</SubLocationDiv>
          </LocationDiv>
          <PriceDiv>250,000</PriceDiv>
          <SumPriceDiv>250,000</SumPriceDiv>
          <MemoDiv>6시 조식, 11시 체크아웃 핸드폰 충전하기...</MemoDiv>
        </PlanContentDiv>
        <PlanContentDiv>
          <TimeDiv>09:00 - 10:00</TimeDiv>
          <PlanDiv>
            <PostCity>숙소</PostCity>
          </PlanDiv>
          <LocationDiv>
            신라호텔
            <SubLocationDiv>서울 중구 동호로 249</SubLocationDiv>
          </LocationDiv>
          <PriceDiv>250,000</PriceDiv>
          <SumPriceDiv>250,000</SumPriceDiv>
          <MemoDiv>6시 조식, 11시 체크아웃 핸드폰 충전하기...</MemoDiv>
        </PlanContentDiv>
        <PlanContentDiv>
          <TimeDiv>09:00 - 10:00</TimeDiv>
          <PlanDiv>
            <PostCity>숙소</PostCity>
          </PlanDiv>
          <LocationDiv>
            신라호텔
            <SubLocationDiv>서울 중구 동호로 249</SubLocationDiv>
          </LocationDiv>
          <PriceDiv>250,000</PriceDiv>
          <SumPriceDiv>250,000</SumPriceDiv>
          <MemoDiv>6시 조식, 11시 체크아웃 핸드폰 충전하기...</MemoDiv>
        </PlanContentDiv>
        <PlanContentDiv>
          <TimeDiv>09:00 - 10:00</TimeDiv>
          <PlanDiv>
            <PostCity>숙소</PostCity>
          </PlanDiv>
          <LocationDiv>
            신라호텔
            <SubLocationDiv>서울 중구 동호로 249</SubLocationDiv>
          </LocationDiv>
          <PriceDiv>250,000</PriceDiv>
          <SumPriceDiv>250,000</SumPriceDiv>
          <MemoDiv>6시 조식, 11시 체크아웃 핸드폰 충전하기...</MemoDiv>
        </PlanContentDiv>
      </div>
      <CostSummaryDiv>
        <div
          style={{ width: "10%", display: "flex", justifyContent: "center" }}
        >
          <PostCity style={{ backgroundColor: "#000" }}>전체</PostCity>
        </div>
        <div style={{ width: "20%" }}>1인당 비용</div>
        <PriceDiv>250,000</PriceDiv>
        <div style={{ width: "20%" }}>총 비용</div>
        <SumPriceDiv>250,000</SumPriceDiv>
      </CostSummaryDiv>
    </WrapDiv>
  );
};
export default PlanListInput;
