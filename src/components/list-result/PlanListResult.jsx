import styled from "@emotion/styled";
import { WrapDiv } from "../common";
import { PostCity } from "../../pages/planning/plan";
import { SubTitleDiv } from "../../pages/travel-board/board";

const PlanTitleDiv = styled.div`
  margin: 0 auto;
  background-color: #ffff80;
  max-width: 1200px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  color: #009800;
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
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
`;

const ReviewDiv = styled.div`
  margin: 0 auto;
  max-width: 860px;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 30px;
  line-height: 1.5em;
  margin-top: 30px;
  margin-bottom: 60px;
`;

const ReviewTitleDiv = styled(SubTitleDiv)`
  text-align: center;
  margin-top: 30px;
`;

const TimeDiv = styled.div`
  width: 10%;
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

const PlanListResult = () => {
  return (
    <WrapDiv>
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
      <ReviewTitleDiv>여행 후기</ReviewTitleDiv>
      <ReviewDiv>
        {`[1일차] 서울 KTX >> 부산 남포동 포장마차 퇴근 후, 친구와 함께 서울역에서
        ktx를 타고 부산으로 이동했어요 숙소는 남포동에 위치한 GnB HOTEL로
        잡았어요. 도착시간이 늦어서 밤늦게 여자둘이 이동하기 어려워서 숙소
        근처에는 남포동 포장마차 가려고 숙소를 남포동을 잡았어요 ㅎㅎㅎㅎㅎㅎㅎ
        남포동 포장마차 거리에서 괜찮아 보이는 곳으로 들어갔어요 저희는 30번
        포장마차로 ㄱㄱㄱㄱㄱㄱ 포장마차라서 안주가 저렴할 줄 알았는데 생각보다
        엄청 싸진 않았어요 ㅠ..ㅠ 그래도 부산에 왔으니 해산물과 대선소주 마시며
        여행을 시작했어요 ㅎㅎㅎㅎㅎㅎㅎㅎ
        
        [2일차] 쌍둥이국밥 >> 해운대 >> 용궁사 >> 남포동 자갈치시장
        전날 술을 많이 먹지 않아서 숙취가 심하지 않아서 가볍게 쌍둥이 국밥으로 해장하고 2일차 여행 시작 ㄱㄱㄱㄱㄱㄱ
        국밥을 먹고 부산하면 떠오르는 해운대로 갔어요! ㅎㅎㅎㅎ
        겨울바다라 춥긴 했지만, 부산에 갔으니 해운대를 꼭 가야한다며 친구랑 해운대 바다 아주 잠깐 감상하고 
        해운대역 뒷쪽에 ‘해리단길’에 위치한 레이크커피바에서 처음보는 메뉴를 주문했어요 ㅎㅎㅎㅎㅎ
        플랫브라운과 포레스트라는 커피인데, 오직 이곳에서만 맛볼 수 있는 메뉴라서 좋더라구요(지금 찾아보니 매장이 부산에서 서울 합정으로 이전했다고 하네요ㅠ..ㅠ 아숩아숩…..)
        친구와 저 둘다 종교가 불교라서, 부산에서 가장 유명한 용궁사라는 절에 갔어요. ㅎㅎㅎㅎ
        용궁사가.. 부산에서 다녀온 곳 중에 가장 좋고 기억에 남는 곳이였어요 부산가면 꼭 꼭 꼭!!!! 가보세요!!!!!!
        그리고 2일차의 마지막은 숙소가 있는 남포동 자갈치시장으로 와서 꼼장어를 먹으려고 했으나..
        꼼장어가 진짜 많이 비싸더라구요ㅠ..ㅠ 관광지라 그런건지… 너무 비싸서 친구랑 조개구이 먹고 마무리했어요(조개구이도 비싸요)
        갠적으로 자찰치 시장.. 가격대가 비싸서 그냐 서울 맛있는 집에서 먹는게 좋을 거 같다고 생각했어요  ㅎㅎㅎㅎㅎㅎㅎ
        [3일차] 남포동 BIFF거리 >> 서면역 기장손칼국수 >> 집으로 GOGO 마지막 날,
        남포동 숙소에서 짐을 챙기고 BIFF 거리를 구경하며 그 유명하다는 비빔당면과
        분식(떡볶이, 오뎅)을 먹고 기차타러 가기 전 서면역에 잠시 들렀어요.
        부산에서 가장 핫하다는 서면역이였지만 낮게 갔더니 뭔가 특별한 게 없고 그냥
        도시더라고요ㅎㅎㅎㅎㅎ 그래서 인터넷으로 급 검색해서 서면에서 오래된
        맛집이라고 되어있는 기장손칼국수를 먹었어요 ㅎㅎㅎㅎㅎ 배가 고프지 않아서
        손칼국수만 먹었는데 대박 가격이 5000원! 진한 멸치육수의 맛에 칼국수가 진짜
        맛있었어요ㅎㅎㅎㅎㅎ 이렇게 배를 든든히 채우고.. 여행을 마무리하고 집으로
        돌아갔어요!`}
      </ReviewDiv>
    </WrapDiv>
  );
};
export default PlanListResult;
