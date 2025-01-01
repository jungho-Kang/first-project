import { Link } from "react-router-dom";
import {} from "./mypage";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "../../contexts/LoginContext";
const MyplanlistItem = () => {
  const { user } = useContext(LoginContext);
  const [myScheduleList, setMyScheduleList] = useState({
    cityKorName: "부산",
    cityPic:
      "https://mobile.busan.com/nas/wcms/wcms_data/photos/2023/05/31/2023053114544822296_l.jpg",
    startDate: "2024-01-08",
    planDate: "5",
    color: "#ffab1a",
  });
  useEffect(() => {
    const fetchApi = async data => {
      try {
        const res = await axios.get(`api/user/schedule?${data.userId}`);
        setMyScheduleList(res.resultData);
      } catch (error) {
        console.log(error);
        alert("서버 오류가 발생했습니다.");
      }
    };
    // fetchApi();
    return () => {};
  });

  const planDateMinusOne = parseInt(myScheduleList.planDate) - 1;
  return (
    <Link className="item">
      <img
        className="city-pic"
        src={`${myScheduleList.cityPic}`}
        alt="지역이미지"
      />
      <div
        className="city-color"
        style={{ backgroundColor: `${myScheduleList.color}` }}
      ></div>
      <div className="txt-box">
        <h4>{myScheduleList.cityKorName}</h4>
        <p>
          {planDateMinusOne}박 {myScheduleList.planDate}일
        </p>
      </div>
      <div className="date">{myScheduleList.startDate} 다녀ALL</div>
    </Link>
  );
};

export default MyplanlistItem;
