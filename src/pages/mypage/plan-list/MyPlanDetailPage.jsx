// comp
import MypageTab from "../../../components/mypage/MypageTab";
import MypageTop from "../../../components/mypage/MypageTop";
// styled
import { MyPageWrapDiv } from "../my-info/myinfo";

function MyPlanDetail() {
  return (
    <div>
      <MypageTop />
      <MyPageWrapDiv>
        <MypageTab />
      </MyPageWrapDiv>
    </div>
  );
}

export default MyPlanDetail;
