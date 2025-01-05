import { useNavigate, useParams } from "react-router-dom";
import { LineDiv, TitleDiv, WrapDiv } from "../../components/common";
import PlanListResult from "../../components/list-result/PlanListResult";
import { FlexDiv, PostCity } from "../planning/plan";
import { FlexLayoutDiv, SubTitleDiv } from "./board";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { GoHeartFill } from "react-icons/go";
import axios from "axios";

function DetailPage({
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
  const navigate = useNavigate();
  const { isLogin, user } = useContext(LoginContext);
  const { id } = useParams();
  const [feedDetail, setFeedDetail] = useState({});

  const getFeedDetail = async _id => {
    try {
      const res = await axios.get(`/api/feed/detail?planMasterId=${_id}`);
      setFeedDetail(res.data.resultData);
      console.log("피드 디테일 가져와!!", res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  const deletFeedDetail = async () => {
    try {
      await axios.delete(`/api/feed?planMasterId=${id}`);
      alert("삭제 되었습니다.");
      navigate("/board");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedDetail(id);
  }, []);

  return (
    <WrapDiv>
      <TitleDiv>다녀ON</TitleDiv>
      <FlexLayoutDiv>
        <PostCity style={{ backgroundColor: `#${feedDetail.color}` }}>
          {feedDetail.cityName}
        </PostCity>
        <SubTitleDiv>{feedDetail.title}</SubTitleDiv>
      </FlexLayoutDiv>
      <LineDiv />
      <PlanListResult
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
        content={feedDetail.content}
      />
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          maxWidth: 1200,
          width: "100%",
          justifyContent: "flex-end",
          marginBottom: 20,
          gap: 15,
        }}
      >
        {isLogin && user.userId === feedDetail.userId ? (
          <>
            <button
              onClick={() => navigate(`/board/writeput/${id}`)}
              style={{
                width: 100,
                height: 50,
                borderRadius: 20,
                backgroundColor: "#B8D8E4",
                color: "#fff",
                border: "none",
              }}
            >
              수정
            </button>
            <button
              style={{
                width: 100,
                height: 50,
                borderRadius: 20,
                backgroundColor: "#B8D8E4",
                color: "#fff",
                border: "none",
              }}
              onClick={() => deletFeedDetail(id)}
            >
              삭제
            </button>
          </>
        ) : (
          <FlexDiv style={{ gap: 10 }}>
            <GoHeartFill
              style={{ color: "#f00", marginRight: 5, width: 25, height: 25 }}
            />
            <div style={{ fontSize: 20 }}>{feedDetail.likeCnt}</div>
          </FlexDiv>
        )}
      </div>
    </WrapDiv>
  );
}

export default DetailPage;
