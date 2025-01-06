import { useNavigate, useParams } from "react-router-dom";
import { LineDiv, TitleDiv, WrapDiv } from "../../components/common";
import PlanListResult from "../../components/list-result/PlanListResult";
import { FlexDiv, PostCity } from "../planning/plan";
import { FlexLayoutDiv, SubTitleDiv } from "./board";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { GoHeartFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
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
  const [isLike, setIsLike] = useState(false);
  const likeData = {
    userId: user.userId,
    planMasterId: id,
  };

  const getFeedDetail = async _id => {
    try {
      const res = await axios.get(
        `/api/feed/detail?planMasterId=${_id}&userId=${user.userId}`,
      );
      setFeedDetail(res.data.resultData);
      console.log("피드 디테일 가져와!!", res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  const postLike = async item => {
    try {
      await axios.post(`/api/feed/like`, item);
      setIsLike(true);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLike = async () => {
    try {
      await axios.delete(
        `/api/feed/like?userId=${user.userId}&planMasterId=${id}`,
      );
      setIsLike(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFeedDetail = async () => {
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

  useEffect(() => {
    if (feedDetail.isLike === 1) {
      setIsLike(true);
    }
  }, [feedDetail.isLike]);

  return (
    <WrapDiv>
      <TitleDiv style={{ fontFamily: "yg-jalnan", fontSize: 48 }}>
        다녀 <b>ON</b>
      </TitleDiv>
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
              onClick={() => deleteFeedDetail(id)}
            >
              삭제
            </button>
          </>
        ) : user.userId ? (
          <FlexDiv style={{ cursor: "pointer" }}>
            {isLike ? (
              <GoHeartFill
                onClick={() => {
                  if (user.userId) {
                    deleteLike();
                  }
                }}
                style={{
                  color: "#f00",
                  marginRight: 5,
                  width: 25,
                  height: 25,
                }}
              />
            ) : (
              <CiHeart
                onClick={() => {
                  if (user.userId) {
                    postLike(likeData);
                  }
                }}
                style={{
                  marginRight: 5,
                  width: 25,
                  height: 25,
                }}
              />
            )}
          </FlexDiv>
        ) : (
          <></>
        )}
      </div>
    </WrapDiv>
  );
}

export default DetailPage;
