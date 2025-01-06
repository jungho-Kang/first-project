// comp
import { useParams } from "react-router-dom";
import MypageTab from "../../../components/mypage/MypageTab";
import MypageTop from "../../../components/mypage/MypageTop";
// styled
import MyPlanTable from "../../../components/myplan/MyPlanTable";
import { MyPageWrapDiv } from "../my-info/myinfo";
import { TitleAreaDiv } from "./myplan";
import axios from "axios";
import { useEffect, useState } from "react";

function MyPlanDetail({
  selectedOption,
  setSelectedOption,
  setIsOpen,
  isOpen,
  dayList,
  setDayList,
  datePrice,
  setDatePrice,
  allPrice,
  setAllPrice,
}) {
  const { id } = useParams();
  const [cityName, setCityName] = useState("");

  const getCityName = async () => {
    try {
      const res = await axios.get(`/api/plan?planMasterId=${id}`);
      setCityName(res.data.resultData.cityName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCityName();
  }, []);

  return (
    <div>
      <MypageTop />
      <MyPageWrapDiv>
        <MypageTab />
        <TitleAreaDiv>
          <h3>
            {cityName} {selectedOption} 일정
          </h3>
        </TitleAreaDiv>
        <MyPlanTable
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          dayList={dayList}
          setDayList={setDayList}
          datePrice={datePrice}
          setDatePrice={setDatePrice}
          allPrice={allPrice}
          setAllPrice={setAllPrice}
          id={id}
        />
      </MyPageWrapDiv>
    </div>
  );
}

export default MyPlanDetail;
