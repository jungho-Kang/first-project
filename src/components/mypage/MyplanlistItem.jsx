import { Link } from "react-router-dom";
import {} from "./mypage";

const MyplanlistItem = ({ item }) => {
  const planDateMinusOne = parseInt(item?.planDate) - 1;
  const imgUrl = `http://112.222.157.156:5212/pic/city/${item?.cityId}/${item?.cityPic}`;

  return (
    <Link className="item">
      <img className="city-pic" src={imgUrl} alt="지역이미지" />
      <div
        className="city-color"
        style={{ backgroundColor: `#${item?.color}` }}
      ></div>
      <div className="txt-box">
        <h4>{item?.cityKorName}</h4>
        <p>
          {planDateMinusOne}박 {item?.planDate}일
        </p>
      </div>
      <div className="date">{item?.startDate} 다녀ALL</div>
    </Link>
  );
};

export default MyplanlistItem;
