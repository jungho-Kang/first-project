//
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../contexts/LoginContext";
import { API_URL } from "../../../constants/login";
import axios from "axios";
// comp
import MypageTop from "../../../components/mypage/MypageTop";
import MypageTab from "../../../components/mypage/MypageTab";
import MyplanlistItem from "../../../components/mypage/MyplanlistItem";
import Popup from "../../../components/common/Popup";
// styled
import { MyPageWrapDiv } from "../my-info/myinfo";
import { MyplanlistDiv, TitleAreaDiv } from "./myplan";

function MyPlanListPage({ setPlanMasterId }) {
  const { user } = useContext(LoginContext);
  const [myScheduleList, setMyScheduleList] = useState([]);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const fetchApi = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/user/schedule?userId=${user?.userId}`,
      );
      // console.log(res.data.resultData);
      setMyScheduleList(res.data.resultData);
    } catch (error) {
      console.log(error);
      alert("서버 오류가 발생했습니다.");
    }
  };
  useEffect(() => {
    if (user?.userId) {
      fetchApi();
    }
  }, [user?.userId]);

  return (
    <div>
      <MypageTop />
      <MyPageWrapDiv>
        <MypageTab />
        {/* 타이틀 */}
        <TitleAreaDiv>
          <h3>일정 목록</h3>
        </TitleAreaDiv>
        <MyplanlistDiv>
          {myScheduleList && myScheduleList.length > 0 ? (
            myScheduleList.map(item =>
              item.cityKorName && item.startDate ? (
                <MyplanlistItem
                  key={item.planMasterId}
                  item={item}
                  setMyScheduleList={setMyScheduleList}
                  setPlanMasterId={setPlanMasterId}
                  setIsDeletePopupOpen={setIsDeletePopupOpen}
                />
              ) : null,
            )
          ) : (
            <p>일정이 없습니다.</p>
          )}
        </MyplanlistDiv>
      </MyPageWrapDiv>

      <Popup
        isOpen={isDeletePopupOpen}
        onClose={() => setIsDeletePopupOpen(false)}
        message="선택한 일정이 삭제되었습니다."
        type="alert"
      />
    </div>
  );
}

export default MyPlanListPage;
