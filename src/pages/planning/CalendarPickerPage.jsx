import moment from "moment/moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled";
import { TitleDiv } from "../../components/common";
import { PickDateDiv } from "./plan";
import "./react-datepicker.css";

import { ko } from "date-fns/locale";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const FlexBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  padding-top: 30px;
`;

const NextBtn = styled.button`
  width: 80px;
  height: 45px;
  border-radius: 5px;
  background-color: #5469d4;
  color: #fff;
  border: none;
  line-height: 45px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
`;

function CalendarPickerPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (moment(startDate).isSame(endDate, "day")) {
      setMaxDate(null);
    } else {
      setMaxDate(moment(startDate).add(4, "days").toDate());
    }
    if (endDate) {
      setMaxDate(null);
    }
  }, [startDate, endDate]);

  const { handleSubmit } = useForm();

  const handleSubmitDate = () => {
    if (
      moment(endDate).format("YYYY-MM-DD") ===
      moment(startDate).format("YYYY-MM-DD")
    ) {
      alert("여행기간을 선택해주세요.");
    } else if (endDate === null) {
      alert("여행기간을 선택해주세요.");
    } else {
      navigate(`/planning/makeplanner/${id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitDate)}>
      <PickDateDiv>
        <TitleDiv>여행 기간을 선택해주세요</TitleDiv>
        <DatePicker
          locale={ko}
          selected={startDate}
          onChange={onChange}
          minDate={new Date()}
          maxDate={maxDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          showDisabledMonthNavigation
        />
        <FlexBtnDiv>
          <NextBtn type="submit">다음</NextBtn>
        </FlexBtnDiv>
      </PickDateDiv>
    </form>
  );
}
export default CalendarPickerPage;
