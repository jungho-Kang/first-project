// comp
import MypageTab from "../../../components/mypage/MypageTab";
import MypageTop from "../../../components/mypage/MypageTop";
// styled
import MyPlanTable from "../../../components/myplan/MyPlanTable";
import { MyPageWrapDiv } from "../my-info/myinfo";
import { TitleAreaDiv } from "./myplan";

function MyPlanDetail({
  selectedOption,
  setSelectedOption,
  setIsOpen,
  isOpen,
  dayList,
  setDayList,
  datePrice,
  setDatePrice,
  allPrice,
  setAllPrice,
}) {
  return (
    <div>
      <MypageTop />
      <MyPageWrapDiv>
        <MypageTab />
        <TitleAreaDiv>
          <h3>{selectedOption} 일정</h3>
        </TitleAreaDiv>
        <MyPlanTable
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          dayList={dayList}
          setDayList={setDayList}
          datePrice={datePrice}
          setDatePrice={setDatePrice}
          allPrice={allPrice}
          setAllPrice={setAllPrice}
        />
      </MyPageWrapDiv>
    </div>
  );
}

export default MyPlanDetail;
