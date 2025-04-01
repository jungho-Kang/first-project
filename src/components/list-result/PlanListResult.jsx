import styled from "@emotion/styled";
import DOMPurify from "dompurify";
import { useLocation } from "react-router-dom";
import { WrapDiv } from "../common";
import MyPlanTable from "../myplan/MyPlanTable";

const ReviewDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  padding: 30px;
  line-height: 1.5em;
  margin: 10px 0 30px;
  strong {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: #555;
  }
  span {
    font-size: 16px;
  }
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
      {/* <ReviewTitleDiv>여행 후기</ReviewTitleDiv> */}
      {pathname === `/myplanlist/writepost/${id}` ||
      pathname === `/board/writeput/${id}` ? (
        <></>
      ) : (
        <ReviewDiv
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(String(content)),
          }}
        ></ReviewDiv>
      )}
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
    </WrapDiv>
  );
};
export default PlanListResult;
