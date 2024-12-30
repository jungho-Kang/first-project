import { Link } from "react-router-dom";
import {} from "./mypage";
const MyplanlistItem = () => {
  return (
    <Link className="item">
      <div className="txt-box">
        <h4>제주</h4>
        <p>2박 3일</p>
      </div>
      <div className="date">2024-12-30 다녀ALL</div>
    </Link>
  );
};

export default MyplanlistItem;
