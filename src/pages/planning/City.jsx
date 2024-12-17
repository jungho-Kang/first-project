import { useNavigate } from "react-router-dom";

function City() {
  const navigate = useNavigate();
  navigate("/planning/schedule");

  return <div>지역선택</div>;
}
export default City;
