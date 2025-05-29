import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import axios from "axios";
// styled
import { DeleteBtn } from "../../pages/mypage/plan-list/myplan";
// icon
import { IoClose } from "react-icons/io5";
import Popup from "../common/Popup";
import { IMAGE_URL } from "../../constants/api";
import { useRecoilState } from "recoil";
import { planMasterIdState } from "../../atoms/planAtom";

const MyplanlistItem = ({ item, setMyScheduleList, setIsDeletePopupOpen }) => {
  // 플랜 마스터 아이디
  const [_, setPlanMasterId] = useRecoilState(planMasterIdState);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const planDateAddOne = parseInt(item?.planDate) + 1;
  const imgUrl = `${IMAGE_URL}/pic/city/${item?.cityId}/${item?.cityPic}`;
  const { user } = useContext(LoginContext);

  const deleteItem = _Id => {
    setMyScheduleList(prev => prev.filter(item => item.planMasterId !== _Id));
  };

  const handleConfirmDelete = async () => {
    try {
      const res = await axios.delete(
        `/api/plan?planMasterId=${item.planMasterId}&userId=${user.userId}`,
      );

      setIsConfirmPopupOpen(false);

      if (res.data) {
        deleteItem(item.planMasterId);
        setIsDeletePopupOpen(true); // 상위 컴포넌트의 팝업 상태 변경
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickbtn = e => {
    e.preventDefault();
    setIsConfirmPopupOpen(true);
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

      {/* 삭제 확인 팝업만 남김 */}
      <Popup
        isOpen={isConfirmPopupOpen}
        onClose={() => setIsConfirmPopupOpen(false)}
        message="선택한 일정을 삭제하시겠습니까?"
        onConfirm={handleConfirmDelete}
        type="confirm"
      />
    </>
  );
};

export default MyplanlistItem;
