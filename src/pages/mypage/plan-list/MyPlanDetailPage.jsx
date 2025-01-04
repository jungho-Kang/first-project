// comp
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  return (
    <div>
      <MypageTop />
      <MyPageWrapDiv>
        <MypageTab />
        <TitleAreaDiv>
          <h3>상세정보</h3>
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
          id={id}
        />
      </MyPageWrapDiv>
    </div>
  );
}

export default MyPlanDetail;
