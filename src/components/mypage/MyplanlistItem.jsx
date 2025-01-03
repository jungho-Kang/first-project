import { Link, useNavigate } from "react-router-dom";
import {} from "./mypage";

import { IoClose } from "react-icons/io5";
import { DeleteBtn } from "../../pages/mypage/plan-list/myplan";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

const MyplanlistItem = ({ item, myScheduleList, setMyScheduleList }) => {
  const planDateAddOne = parseInt(item?.planDate) + 1;
  const imgUrl = `http://112.222.157.156:5212/pic/city/${item?.cityId}/${item?.cityPic}`;
  const { user } = useContext(LoginContext);

  const deleteItem = _Id => {
    // const arr = myScheduleList.filter(item => item.planMasterId !== _Id);
    setMyScheduleList(prev => prev.filter(item => item.planMasterId !== _Id));
    // navigate("/auth");
  };
  // http://112.222.157.156:5212/api/plan?planMasterId=0&userId=0
  const deleteListItem = async data => {
    try {
      const res = await axios.delete(
        `/api/plan?planMasterId=${data}&userId=${user.userId}`,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // http://112.222.157.156:5212/api/plan?planMasterId=1

  const handleClickbtn = e => {
    e.preventDefault();
    deleteItem(item.planMasterId);
    deleteListItem(item.planMasterId);
  };

  return (
    <>
      <Link to={`/myplanlist/${item.planMasterId}`}>
        <img className="city-pic" src={imgUrl} alt="지역이미지" />
        <div
          className="city-color"
          style={{ backgroundColor: `#${item?.color}` }}
        ></div>
        <div className="txt-box">
          <h4>{item?.cityKorName}</h4>
          <p>
            {item?.planDate}박 {planDateAddOne}일
          </p>
        </div>
        <div className="date">{item?.startDate} 다녀ALL</div>
        <DeleteBtn onClick={handleClickbtn}>
          <IoClose />
        </DeleteBtn>
      </Link>
    </>
  );
};

export default MyplanlistItem;
