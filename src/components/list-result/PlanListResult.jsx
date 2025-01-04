import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import { SubTitleDiv } from "../../pages/travel-board/board";
import { WrapDiv } from "../common";
import MyPlanTable from "../myplan/MyPlanTable";

const ReviewDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 30px;
  line-height: 1.5em;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ReviewTitleDiv = styled(SubTitleDiv)`
  text-align: center;
  margin-top: 100px;
`;

const PlanListResult = ({
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
  id,
  content,
}) => {
  const { pathname } = useLocation();

  return (
    <WrapDiv style={{ maxWidth: 1200 }}>
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

      <ReviewTitleDiv>여행 후기</ReviewTitleDiv>
      {pathname === `/myplanlist/writepost/${id}` ? (
        <></>
      ) : (
        <ReviewDiv>{content}</ReviewDiv>
      )}
    </WrapDiv>
  );
};
export default PlanListResult;
