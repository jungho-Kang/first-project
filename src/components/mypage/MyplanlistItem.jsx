import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import axios from "axios";
// styled
import { DeleteBtn } from "../../pages/mypage/plan-list/myplan";
// icon
import { IoClose } from "react-icons/io5";

const MyplanlistItem = ({ item, setMyScheduleList, setPlanMasterId }) => {
  const planDateAddOne = parseInt(item?.planDate) + 1;
  const imgUrl = `http://112.222.157.157:5212/pic/city/${item?.cityId}/${item?.cityPic}`;
  const { user } = useContext(LoginContext);

  const deleteItem = _Id => {
    setMyScheduleList(prev => prev.filter(item => item.planMasterId !== _Id));
  };
  const deleteListItem = async data => {
    try {
      const res = await axios.delete(
        `/api/plan?planMasterId=${data}&userId=${user.userId}`,
        alert("일정이 삭제되었습니다."),
      );
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickbtn = e => {
    e.preventDefault();
    const isConfirm = confirm("선택한 일정을 삭제하시겠습니까?");
    if (isConfirm) {
      deleteItem(item.planMasterId);
      deleteListItem(item.planMasterId);
    } else {
      // console.log("일정 삭제 취소됨");
    }
  };

  return (
    <>
      <Link
        to={`/myplanlist/${item.planMasterId}`}
        onClick={() => setPlanMasterId(item.planMasterId)}
      >
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
