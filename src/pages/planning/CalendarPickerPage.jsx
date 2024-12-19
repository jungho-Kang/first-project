import { useNavigate } from "react-router-dom";

function CalendarPickerPage() {
  const navigate = useNavigate();
  navigate("/planning/makeplanner");
  return <div>날짜선택</div>;
}
export default CalendarPickerPage;
