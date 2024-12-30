import { useNavigate } from "react-router-dom";
import { LineDiv, TitleDiv, WrapDiv } from "../../components/common";
import PlanListResult from "../../components/list-result/PlanListResult";
import { FlexDiv, PostCity } from "../planning/plan";
import { FlexLayoutDiv, SubTitleDiv } from "./board";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { GoHeartFill } from "react-icons/go";

function DetailPage() {
  const navigate = useNavigate();
  const { isLogin } = useContext(LoginContext);

  return (
    <WrapDiv>
      <TitleDiv>다녀ON</TitleDiv>
      <FlexLayoutDiv>
        <PostCity>부산</PostCity>
        <SubTitleDiv>2박3일 부산여행</SubTitleDiv>
      </FlexLayoutDiv>
      <LineDiv></LineDiv>
      <PlanListResult />
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
        {isLogin ? (
          <>
            <button
              onClick={() => navigate("/board/writepost")}
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
            >
              삭제
            </button>
          </>
        ) : (
          <>
            <FlexDiv>
              <GoHeartFill style={{ color: "#f00", marginRight: 5 }} />
              <div>12</div>
            </FlexDiv>
            <button
              style={{
                width: 100,
                height: 50,
                borderRadius: 20,
                backgroundColor: "#B8D8E4",
                color: "#fff",
                border: "none",
              }}
            >
              게시글 공유
            </button>
          </>
        )}
      </div>
    </WrapDiv>
  );
}

export default DetailPage;
