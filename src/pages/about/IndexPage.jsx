import { WrapDiv } from "../../components/common";
import { AboutContDiv, AboutDiv, AboutTopDiv } from "./about";

function IndexPage() {
  return (
    <AboutDiv>
      <AboutTopDiv>
        <h2 className="txt">About Us</h2>
      </AboutTopDiv>
      <AboutContDiv>
        <WrapDiv>
          {/* <h3>
            다녀 <b>ALL</b> 소개
          </h3> */}
          {/* 1 */}
          <div className="cont">
            <div className="img-box"></div>
            <div className="info-box">
              <div>
                <h4>맞춤형 여행 일정 생성</h4>
                <span>
                  다녀All에서는 여행자들이 선택한 지역에 맞춰 명소, 음식점,
                  숙소를 추천해 드리고, 이를 바탕으로 시간, 위치, 교통수단, 금액
                  등을 포함한 상세한 여행 일정을 손쉽게 만들 수 있습니다. 또한,
                  인원 수에 맞춰 총금액과 인당 금액을 자동으로 계산하여, 여행
                  예산을 보다 효율적으로 관리할 수 있습니다.
                </span>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="cont">
            <div className="info-box">
              <div>
                <h4>사용자 맞춤 일정</h4>
                <span>
                  명소, 음식점, 숙소를 추천받아 쉽게 일정을 구성할 수 있습니다.
                  또한, 사용자가 원하는 일정을 직접 등록하고 조정할 수 있어 더욱
                  개인화된 여행 계획을 세울 수 있습니다.
                </span>
              </div>
            </div>
            <div className="img-box"></div>
          </div>
          {/* 3 */}
          <div className="cont">
            <div className="img-box"></div>
            <div className="info-box">
              <div>
                <h4>여행 계획 관리 및 메모</h4>
                <span>
                  중요한 일정, 팁, 여행 경로 등 필요한 정보를 메모할 수 있는
                  기능을 제공하며, 일정을 변경하거나 수정하는 것이 매우
                  간편합니다. 이를 통해 더 나은 여행 계획을 세울 수 있도록
                  돕습니다.
                </span>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="cont">
            <div className="info-box">
              <div>
                <h4>여행 계획 공유 다녀ON 게시판</h4>
                <span>
                  완성된 여행 계획을 다녀ON에 다른 사용자들과 공유할 수
                  있습니다. 다른 사용자들이 올린 여행 계획을 보고, 마음에 드는
                  계획을 ‘내 계획’에 담아 개인화하여 사용할 수 있습니다. 이는
                  다른 여행자들의 아이디어를 참고하고, 더 나은 계획을 만들 수
                  있는 기회를 제공합니다.
                </span>
              </div>
            </div>
            <div className="img-box"></div>
          </div>
          {/* 5 */}
          <div className="cont">
            <div className="img-box"></div>
            <div className="info-box">
              <div>
                <h4>다른 사람의 계획을 내 계획으로</h4>
                <span>
                  게시판에 올라온 인기 있는 여행 계획을 내 계획에 저장하고,
                  필요에 따라 수정할 수 있습니다. 이 기능은 여행자들 간의
                  아이디어 공유를 촉진하고, 각자의 스타일에 맞게 여행 계획을
                  최적화할 수 있도록 도와줍니다.
                </span>
              </div>
            </div>
          </div>
        </WrapDiv>
      </AboutContDiv>
    </AboutDiv>
  );
}

export default IndexPage;
