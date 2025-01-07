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
      // console.log("피드 디테일 가져와!!", res.data.resultData);
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
    <WrapDiv style={{ marginBottom: 150 }}>
      <TitleDiv style={{ fontFamily: "yg-jalnan", fontSize: 48 }}>
        다녀 <b>ON</b>
      </TitleDiv>
      <FlexLayoutDiv>
        <PostCity style={{ backgroundColor: `#${feedDetail.color}` }}>
          {feedDetail.cityName}
        </PostCity>
        <SubTitleDiv>{feedDetail.title}</SubTitleDiv>
      </FlexLayoutDiv>
      {/* <LineDiv /> */}
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
          margin: "50px auto",
          maxWidth: 1200,
          width: "100%",
          justifyContent: "flex-end",
          gap: 15,
        }}
      >
        {isLogin && user.userId === feedDetail.userId ? (
          <>
            <button
              onClick={() => navigate(`/board/writeput/${id}`)}
              style={{
                width: 110,
                height: 45,
                borderRadius: 5,
                backgroundColor: "#1270B0",
                color: "#fff",
                border: "none",
              }}
            >
              게시글 수정
            </button>
            <button
              style={{
                width: 100,
                height: 45,
                borderRadius: 5,
                backgroundColor: "#b3b3b3",
                color: "#fff",
                border: "none",
              }}
              onClick={() => deleteFeedDetail(id)}
            >
              삭제
            </button>
          </>
        ) : user.userId ? (
          <FlexDiv
            style={{
              cursor: "pointer",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {isLike ? (
              <span
                onClick={() => {
                  if (user.userId) {
                    deleteLike();
                  }
                }}
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "#ea4335",
                  borderRadius: 5,
                  padding: "8px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <GoHeartFill
                  style={{
                    color: "#fff",
                    width: 35,
                    height: 35,
                  }}
                />{" "}
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                    color: "#ffeeee",
                    fontSize: 18,
                  }}
                >
                  좋아요
                </p>
              </span>
            ) : (
              <span
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "#ebebeb",
                  borderRadius: 5,
                  padding: "8px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
                onClick={() => {
                  if (user.userId) {
                    postLike(likeData);
                  }
                }}
              >
                <GoHeartFill
                  style={{
                    width: 35,
                    height: 35,
                    color: "#999",
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                    color: "#555",
                    fontSize: 18,
                  }}
                >
                  좋아요
                </p>
              </span>
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
