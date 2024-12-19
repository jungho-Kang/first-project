import moment from "moment/moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { TitleDiv } from "../../components/common";
import { PickDateDiv } from "./plan";
import "./react-datepicker.css";

// import { useNavigate } from "react-router-dom";

function CalendarPickerPage() {
  // const navigate = useNavigate();
  // navigate("/planning/makeplanner");
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

  return (
    <PickDateDiv>
      <TitleDiv>기간을 선택해주세요</TitleDiv>

      <DatePicker
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
    </PickDateDiv>
  );
}
export default CalendarPickerPage;
