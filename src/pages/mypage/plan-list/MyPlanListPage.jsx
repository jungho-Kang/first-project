// comp
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import MyplanlistItem from "../../../components/mypage/MyplanlistItem";
// styled
import { MyPageWrapDiv } from "../my-info/myinfo";
import { MyplanlistDiv, TitleAreaDiv } from "./myplan";

function MyPlanList() {
  return (
    <div>
      <MypageTop />
      <MyPageWrapDiv>
        <MypageTab />
        {/* 타이틀 */}
        <TitleAreaDiv>
          <h3>일정 목록</h3>
        </TitleAreaDiv>
        <MyplanlistDiv>
          <MyplanlistItem />
          <MyplanlistItem />
          <MyplanlistItem />
          <MyplanlistItem />
        </MyplanlistDiv>
      </MyPageWrapDiv>
    </div>
  );
}

export default MyPlanList;
