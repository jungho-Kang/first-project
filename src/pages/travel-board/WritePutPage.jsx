import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { TitleDiv, WrapDiv } from "../../components/common";
import PlanListResult from "../../components/list-result/PlanListResult";
import { LoginContext } from "../../contexts/LoginContext";
import { PostCity } from "../planning/plan";
import { FlexLayoutDiv } from "./board";

function WritePutPage({
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
  const { id } = useParams();
  const { user } = useContext(LoginContext);
  // 받아온 title, content

  // 수정한 title, review(content)
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [feedData, setFeedData] = useState({
    planMasterId: 0,
    userId: 0,
    title: "",
    content: "",
  });

  const { handleSubmit } = useForm();

  const getFeedDetail = async _id => {
    try {
      const res = await axios.get(`/api/feed/detail?planMasterId=${_id}`);
      setTitle(res.data.resultData.title);
      setReview(res.data.resultData.content);

      console.log("피드 디테일 가져와!!", res.data.resultData);
    } catch (error) {
      console.log(error);
    }
  };

  const putFeed = async item => {
    try {
      await axios.put(`/api/feed`, item);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitFeed = () => {
    putFeed({ ...feedData });
    alert("수정 되었습니다.");
    navigate("/board");
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
        ],
      },
    }),
    [],
  );

  useEffect(() => {
    getFeedDetail(id);
  }, [id]);

  useEffect(() => {
    setFeedData({
      planMasterId: id,
      userId: user.userId,
      title: title,
      content: review,
    });
  }, [title, review]);
  return (
    <WrapDiv>
      <form onSubmit={handleSubmit(handleSubmitFeed)}>
        <TitleDiv>다녀ON</TitleDiv>
        <FlexLayoutDiv style={{ position: "relative", height: 60 }}>
          <PostCity style={{ position: "absolute", zIndex: 9, marginLeft: 10 }}>
            부산
          </PostCity>
          <input
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{
              fontSize: 24,
              fontWeight: 700,
              position: "absolute",
              paddingLeft: 70,
              maxWidth: 1200,
              width: "100%",
              height: 60,
              borderRadius: 10,
            }}
          />
        </FlexLayoutDiv>
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
          content={""}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            height: 500,
            marginBottom: 70,
          }}
        >
          <ReactQuill
            style={{
              maxWidth: "1200px",
              width: "100%",
              border: "none",
            }}
            value={review}
            placeholder="후기를 입력해주세요"
            onChange={e => setReview(e)}
            modules={modules}
          />
        </div>

        <div
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "flex-end",
            width: 1200,
          }}
        >
          <button
            type="submit"
            style={{
              width: 100,
              height: 50,
              borderRadius: 20,
              backgroundColor: "#B8D8E4",
              color: "#fff",
              border: "none",
            }}
          >
            등록
          </button>
        </div>
      </form>
    </WrapDiv>
  );
}

export default WritePutPage;
